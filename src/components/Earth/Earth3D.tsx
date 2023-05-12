import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Stars } from "@react-three/drei";

import EarthDayMap from "../../assets/8k_earth_daymap.jpg";
import EarthNightMap from "../../assets/8k_earth_nightmap.jpg";
import EarthNormalMap from "../../assets/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/8k_earth_clouds.jpg";

import { TextureLoader } from "three";

export const Earth3D = () => {
  const [dayMap, nightMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [
      EarthDayMap,
      EarthNightMap,
      EarthNormalMap,
      EarthSpecularMap,
      EarthCloudsMap,
    ]
  );

  // refs
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <pointLight color={"#fcebcc"} intensity={1} position={[2, 0, 5]} />
      <Stars
        radius={300}
        depth={60}
        count={15000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh position={[0, 0, 3]} ref={cloudsRef}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, 0, 3]} ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </>
  );
};
