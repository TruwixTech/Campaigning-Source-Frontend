import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Text } from '@react-three/drei';

const words = [
    "Political promotion",
    "Business development",
    "Press Release",
    "Wikipedia Management",
    "Website Development",
    "App Development",
    "WhatsApp Broadcast",
    "SMS Broadcast",
    "IVR",
    "Bulk Calling",
    "Graphic Designing",
    "Customized Printing",
    "Profile Management",
    "Email Marketing",
];

function Word({ children, ...props }) {
    const color = new THREE.Color();
    const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer';
        return () => (document.body.style.cursor = 'auto');
    }, [hovered]);

    // Tie component to the render-loop
    useFrame(({ camera }) => {
        ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : '#e3e3e3'), 0.1);
    });

    return (
        <Billboard {...props}>
            <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...fontProps} children={children} />
        </Billboard>
    );
}

function RotatingSphere({ count = 6, radius = 24, rotationSpeed = 0.002 }) {
    const groupRef = useRef();

    useFrame(() => {
        groupRef.current.rotation.x += rotationSpeed;
        groupRef.current.rotation.y += rotationSpeed;
        groupRef.current.rotation.z += rotationSpeed;
    });

    // Create a count x count random words with spherical distribution
    const cloudWords = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;
        for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++) {
                temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), words[(i + j) % words.length]]);
            }
        return temp;
    }, [count, radius]);

    return (
        <group ref={groupRef}>
            {cloudWords.map(([pos, word], index) => (
                <Word key={index} position={pos} children={word} />
            ))}
        </group>
    );
}

export default function WordSphere() {
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
            <fog attach="fog" args={['#242424', 12, 100]} />
            <Suspense fallback={null}>
                <RotatingSphere />
            </Suspense>
        </Canvas>
    );
}
