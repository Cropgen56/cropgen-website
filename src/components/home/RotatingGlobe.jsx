"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Globe = ({ textureSrc }) => {
  const globeRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 3] }} className="w-full h-full">
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={1} />

      {/* Globe Mesh */}
      <mesh ref={globeRef} rotation={[0, 0, 0]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(textureSrc)}
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Controls (optional, remove zoom/pan for HeroSection) */}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      
      {/* Optional background stars */}
      <Stars radius={50} depth={50} count={5000} factor={4} fade />
    </Canvas>
  );
};

export default Globe;
