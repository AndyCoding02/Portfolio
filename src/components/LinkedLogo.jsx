import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/LinkedLogo-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} position={[0, 0, 0.121]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.026, 1.088, 0.074]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.001']} position={[-0.778, -0.7, 0.243]} rotation={[Math.PI / 2, 0, 0]} scale={[2.334, 0.788, 2.334]} />
    </group>
  )
}

useGLTF.preload('/LinkedLogo-transformed.glb')
