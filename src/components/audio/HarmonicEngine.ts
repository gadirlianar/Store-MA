"use client";

class HarmonicEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isMuted: boolean = true;
  private droneOscillators: OscillatorNode[] = [];

  constructor() {
    // AudioContext will be initialized on first user interaction
  }

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
  }

  public toggleMute(): boolean {
    this.initContext();
    if (!this.ctx || !this.masterGain) return false;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;

    if (!this.isMuted) {
      // Fade in master
      this.masterGain.gain.setTargetAtTime(0.08, this.ctx.currentTime, 0.2);
      this.startDrone();
    } else {
      // Fade out master
      this.masterGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.15);
      this.stopDrone();
    }

    return !this.isMuted;
  }

  public getMuteState(): boolean {
    return this.isMuted;
  }

  private startDrone() {
    if (!this.ctx || !this.masterGain) return;
    this.stopDrone();

    // Fundamental: 55Hz (A1), Harmonic: 110Hz, 165Hz
    const freqs = [55, 110, 164.81];
    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      const level = idx === 0 ? 0.3 : idx === 1 ? 0.12 : 0.05;
      gain.gain.setValueAtTime(level, this.ctx.currentTime);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      this.droneOscillators.push(osc);
    });
  }

  private stopDrone() {
    this.droneOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore already stopped
      }
    });
    this.droneOscillators = [];
  }

  /**
   * Play an ephemeral tactile click/detent tone (subtle UI feedback)
   */
  public triggerDetent(frequency = 440) {
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch {
      // audio error handling
    }
  }

  /**
   * Modulate drone frequency based on scroll progress or spatial node
   */
  public setModulation(ratio: number) {
    if (this.isMuted || !this.ctx || this.droneOscillators.length === 0) return;
    const base = 55 + ratio * 20;
    this.droneOscillators[0]?.frequency.setTargetAtTime(base, this.ctx.currentTime, 0.1);
  }
}

export const harmonicEngine = new HarmonicEngine();
