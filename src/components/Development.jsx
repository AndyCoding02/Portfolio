import { OrbitControls } from '@react-three/drei';
import { Stage } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Mac from './Mac';

const Development = () => {
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <Mac />
                    </Stage>
                    <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
            </Canvas>
        </>
    );
};

export default Development;