import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LinkedLogo from "./LinkedLogo";

const SocialMedia = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <LinkedLogo />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    );
};

export default SocialMedia;

