import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/python-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material} rotation={[Math.PI / 2, 0, 0]} scale={2.5} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['.001']} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={2.5} />
    </group>
  )
}

useGLTF.preload('/python-transformed.glb')
