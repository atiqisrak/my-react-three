import * as THREE from "three"
import React, { useRef, useState, useEffect } from "react"
import { useGLTF, PerspectiveCamera } from "@react-three/drei"

import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Circle011_EyeFire_0: THREE.Mesh
    Circle011_SerpentBake_0: THREE.Mesh
    Hide003_EyeFire_0: THREE.Mesh
    Hide003_Boat2Bake_0: THREE.Mesh
    Keel002_EyeFire_0: THREE.Mesh
    Keel002_Boat1Bake_0: THREE.Mesh
    Plane044_WaterBake_0: THREE.Mesh
    Rock021_RockBake_0: THREE.Mesh
    VikingShipObjects001_Objects_0: THREE.Mesh
    VikingShipObjects001_Objects_0001: THREE.Mesh
  }
  materials: {
    EyeFire: THREE.MeshStandardMaterial
    SerpentBake: THREE.MeshStandardMaterial
    Boat2Bake: THREE.MeshStandardMaterial
    Boat1Bake: THREE.MeshStandardMaterial
    WaterBake: THREE.MeshStandardMaterial
    RockBake: THREE.MeshStandardMaterial
    Objects: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/scene_draco.glb") as GLTFResult

  const [hovered, setHover] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh material={materials.EyeFire} geometry={nodes.Circle011_EyeFire_0.geometry} />
            <mesh
              onPointerOver={(e) => setHover(true)}
              onPointerOut={(e) => setHover(false)}
              material={materials.SerpentBake}
              geometry={nodes.Circle011_SerpentBake_0.geometry}
              material-metalness={hovered ? 1 : 0}
            />
          </group>
          <group position={[-1018.2, -380.53, 1332.67]} rotation={[-1.05, 0.72, -0.08]} scale={[100, 100, 100]}>
            <mesh material={materials.EyeFire} geometry={nodes.Hide003_EyeFire_0.geometry} />
            <mesh material={materials.Boat2Bake} geometry={nodes.Hide003_Boat2Bake_0.geometry} />
          </group>
          <group position={[349.57, 32.32, 176.64]} rotation={[-1.73, -0.23, -2.65]} scale={[100, 100, 100]}>
            <mesh material={materials.EyeFire} geometry={nodes.Keel002_EyeFire_0.geometry} />
            <mesh material={materials.Boat1Bake} geometry={nodes.Keel002_Boat1Bake_0.geometry} />
          </group>
          <group position={[0, 27.07, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 170.02]}>
            <mesh material={materials.WaterBake} geometry={nodes.Plane044_WaterBake_0.geometry} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh material={materials.RockBake} geometry={nodes.Rock021_RockBake_0.geometry} material-metalness={0.5} />
          </group>
          <group scale={[100, 100, 100]}>
            <mesh material={materials.Objects} geometry={nodes.VikingShipObjects001_Objects_0.geometry} />
            <mesh material={materials.Objects} geometry={nodes.VikingShipObjects001_Objects_0001.geometry} />
          </group>
        </group>
      </group>
    </group>
  )
}