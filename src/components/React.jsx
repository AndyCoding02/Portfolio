import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/react-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes['React-Logo_Material002_0'].geometry} material={materials['Material.002']} position={[0, 7.94, 18.1]} rotation={[0, 0, -Math.PI / 2]} scale={[39.17, 39.17, 52.73]} />
      </group>
    </group>
  )
}

useGLTF.preload('/react-transformed.glb')
