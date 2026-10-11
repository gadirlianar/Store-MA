import * as THREE from "three";
import { createKhoralisMaterials } from "./ProceduralMaterials";

export class KhoralisModel {
  public group: THREE.Group;
  public materials: ReturnType<typeof createKhoralisMaterials>;

  // Tier groups for exploded view
  public tier1_lens: THREE.Group;
  public tier2_rotors: THREE.Group;
  public tier3_chamber: THREE.Group;
  public tier4_bearing: THREE.Group;
  public tier5_chassis: THREE.Group;

  // Internal rotating elements
  public rotorOuter: THREE.Mesh;
  public rotorInner: THREE.Mesh;
  public coreSphere: THREE.Mesh;

  // Base Y positions when fully assembled
  private readonly baseY1 = 1.35;
  private readonly baseY2 = 0.85;
  private readonly baseY3 = 0.2;
  private readonly baseY4 = -0.45;
  private readonly baseY5 = -1.1;

  constructor() {
    this.group = new THREE.Group();
    this.materials = createKhoralisMaterials();

    this.tier1_lens = new THREE.Group();
    this.tier2_rotors = new THREE.Group();
    this.tier3_chamber = new THREE.Group();
    this.tier4_bearing = new THREE.Group();
    this.tier5_chassis = new THREE.Group();

    // -------------------------------------------------------------
    // Tier 1: Fused Silica Crystal Cap & Beveled Collar
    // -------------------------------------------------------------
    const lensGeo = new THREE.CylinderGeometry(1.3, 1.35, 0.35, 48);
    const lensMesh = new THREE.Mesh(lensGeo, this.materials.crystal);
    this.tier1_lens.add(lensMesh);

    const collarGeo = new THREE.TorusGeometry(1.36, 0.05, 16, 64);
    const collarMesh = new THREE.Mesh(collarGeo, this.materials.copper);
    collarMesh.rotation.x = Math.PI / 2;
    this.tier1_lens.add(collarMesh);

    // -------------------------------------------------------------
    // Tier 2: Gyroscopic Tellurium Copper Counter-Rotors
    // -------------------------------------------------------------
    const rotorOuterGeo = new THREE.TorusGeometry(1.6, 0.12, 24, 72);
    this.rotorOuter = new THREE.Mesh(rotorOuterGeo, this.materials.copper);
    this.rotorOuter.rotation.x = Math.PI / 2;
    this.tier2_rotors.add(this.rotorOuter);

    const rotorInnerGeo = new THREE.TorusGeometry(1.2, 0.09, 20, 64);
    this.rotorInner = new THREE.Mesh(rotorInnerGeo, this.materials.tungsten);
    this.rotorInner.rotation.x = Math.PI / 2;
    this.tier2_rotors.add(this.rotorInner);

    // Radial vanes / spokes
    const spokeGeo = new THREE.BoxGeometry(0.06, 0.06, 1.15);
    for (let i = 0; i < 4; i++) {
      const spoke = new THREE.Mesh(spokeGeo, this.materials.copper);
      spoke.rotation.y = (i * Math.PI) / 4;
      this.tier2_rotors.add(spoke);
    }

    // -------------------------------------------------------------
    // Tier 3: Resonant Bell Chamber & Incandescent Core
    // -------------------------------------------------------------
    const chamberBodyGeo = new THREE.CylinderGeometry(1.15, 1.45, 0.9, 48);
    const chamberMesh = new THREE.Mesh(chamberBodyGeo, this.materials.copper);
    this.tier3_chamber.add(chamberMesh);

    // Incandescent molten core inside
    const coreGeo = new THREE.SphereGeometry(0.42, 32, 32);
    this.coreSphere = new THREE.Mesh(coreGeo, this.materials.emissive);
    this.tier3_chamber.add(this.coreSphere);

    // Vertical acoustic fluting fins around chamber
    const finGeo = new THREE.BoxGeometry(0.08, 0.8, 0.15);
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI * 2) / 12;
      const fin = new THREE.Mesh(finGeo, this.materials.tungsten);
      fin.position.x = Math.cos(angle) * 1.35;
      fin.position.z = Math.sin(angle) * 1.35;
      fin.rotation.y = -angle;
      this.tier3_chamber.add(fin);
    }

    // -------------------------------------------------------------
    // Tier 4: Zero-Contact Sintered Tungsten Magnetic Bearing
    // -------------------------------------------------------------
    const bearingGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.28, 48);
    const bearingMesh = new THREE.Mesh(bearingGeo, this.materials.tungsten);
    this.tier4_bearing.add(bearingMesh);

    // Magnetic polar segments
    const poleGeo = new THREE.BoxGeometry(0.3, 0.04, 0.12);
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI * 2) / 8;
      const pole = new THREE.Mesh(poleGeo, this.materials.copper);
      pole.position.x = Math.cos(angle) * 1.25;
      pole.position.z = Math.sin(angle) * 1.25;
      pole.position.y = 0.15;
      pole.rotation.y = -angle;
      this.tier4_bearing.add(pole);
    }

    // -------------------------------------------------------------
    // Tier 5: Monolithic Octagonal / Chamfered Billet Chassis
    // -------------------------------------------------------------
    const chassisGeo = new THREE.CylinderGeometry(1.75, 1.95, 0.85, 8); // 8-sided faceted foundation
    const chassisMesh = new THREE.Mesh(chassisGeo, this.materials.chassis);
    this.tier5_chassis.add(chassisMesh);

    // Milled copper datum rim at base
    const baseRimGeo = new THREE.TorusGeometry(1.88, 0.06, 16, 48);
    const baseRimMesh = new THREE.Mesh(baseRimGeo, this.materials.copper);
    baseRimMesh.rotation.x = Math.PI / 2;
    baseRimMesh.position.y = -0.38;
    this.tier5_chassis.add(baseRimMesh);

    // Assemble tiers into master group
    this.group.add(this.tier1_lens);
    this.group.add(this.tier2_rotors);
    this.group.add(this.tier3_chamber);
    this.group.add(this.tier4_bearing);
    this.group.add(this.tier5_chassis);

    // Set initial assembled positions
    this.setDisassembly(0);
  }

  /**
   * Explodes tiers vertically based on progress 0 (assembled) -> 1 (exploded)
   */
  public setDisassembly(progress: number) {
    const p = Math.max(0, Math.min(1, progress));

    // Dynamic vertical explosion offsets
    this.tier1_lens.position.y = this.baseY1 + p * 2.8;
    this.tier2_rotors.position.y = this.baseY2 + p * 1.6;
    this.tier3_chamber.position.y = this.baseY3 + p * 0.5;
    this.tier4_bearing.position.y = this.baseY4 - p * 0.5;
    this.tier5_chassis.position.y = this.baseY5 - p * 1.5;

    // Lateral expansion & dynamic rotation tilt on explosion
    this.tier1_lens.rotation.z = p * 0.12;
    this.tier3_chamber.rotation.z = -p * 0.08;
    this.tier2_rotors.scale.set(1 + p * 0.2, 1, 1 + p * 0.2);
  }

  /**
   * Continuous animation update
   */
  public update(time: number, disassembly: number) {
    this.setDisassembly(disassembly);

    // Counter-rotating gyroscopes
    this.rotorOuter.rotation.z += 0.015;
    this.rotorInner.rotation.z -= 0.022;

    // Subtle breathing pulse of incandescent core
    const scale = 1 + Math.sin(time * 3) * 0.04;
    this.coreSphere.scale.set(scale, scale, scale);
  }
}
