import * as THREE from "three";

/**
 * Procedural material factory for KHORALIS physical metallurgy and optics
 */
export function createKhoralisMaterials() {
  // 1. Tellurium Copper: Warm brushed metal with anisotropic specular luster
  const copperMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#d87333"),
    metalness: 0.92,
    roughness: 0.25,
  });

  // 2. Cold Sintered Tungsten: High-density industrial gray with sharp specular highlights
  const tungstenMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#9ca3af"),
    metalness: 0.98,
    roughness: 0.14,
  });

  // 3. Monolithic Basalt / Bead-Blasted Titanium Base
  const chassisMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#1f2229"),
    metalness: 0.75,
    roughness: 0.48,
  });

  // 4. Optical Fused Silica Crystal: Refractive, high transmission
  const crystalMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#ffffff"),
    metalness: 0.05,
    roughness: 0.08,
    transmission: 0.94,
    thickness: 1.2,
    ior: 1.54,
    reflectivity: 0.5,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
  });

  // 5. Incandescent Resonant Core: Emissive warmth
  const coreEmissiveMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color("#ff8533"),
  });

  // 6. Hairline Datum Laser Ring
  const datumRingMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color("#f08c4a"),
    wireframe: true,
  });

  return {
    copper: copperMaterial,
    tungsten: tungstenMaterial,
    chassis: chassisMaterial,
    crystal: crystalMaterial,
    emissive: coreEmissiveMaterial,
    datum: datumRingMaterial,
  };
}
