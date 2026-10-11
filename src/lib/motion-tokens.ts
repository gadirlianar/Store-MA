export const MOTION_TOKENS = {
  ease: {
    heavy: "power4.out",
    friction: "power2.out",
    snap: "expo.out",
    inOut: "power3.inOut",
    linear: "none",
  },
  duration: {
    micro: 0.18,
    ui: 0.4,
    scene: 1.2,
    long: 2.0,
  },
  stagger: {
    fast: 0.04,
    standard: 0.08,
    deliberate: 0.15,
  },
} as const;
