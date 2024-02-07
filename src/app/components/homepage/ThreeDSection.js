import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useAnimations } from '@react-three/drei';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model({ modelPath, position }) {
	const gltf = useLoader(GLTFLoader, modelPath);
	const modelRef = useRef();

	// console.log(modelRef.current);
	
	useFrame(({ pointer }) => {
		// Rotate the model with pointer if not on mobile:
		if (window.innerWidth > 768) {
			// Adjust mobile detection as needed
			const maxRotation = Math.PI / 16;
			modelRef.current.rotation.y = pointer.x * maxRotation;
			modelRef.current.rotation.x = -pointer.y * (maxRotation / 2);
		}
		
		if (modelRef.current) {
			const parentDiv = document.querySelector(".threeDparent");
			const parentDivEnd = parentDiv.offsetTop + parentDiv.offsetHeight;
			const maxScrollPosition = parentDivEnd - window.innerHeight;
			const maxRotation = Math.PI / 312;
			const rotationAmount = (scrollPosition / maxScrollPosition) * maxRotation;
			
			modelRef.current.rotation.z = rotationAmount;
			modelRef.current.position.y = scrollPosition * -0.01;
		}
	});
	
	// Use scroll position to adjust the model's position
	const [scrollPosition, setScrollPosition] = useState(0);
	
	useEffect(() => {
		console.log(modelRef.current);
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setScrollPosition(scrollY);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });

		if (modelRef.current) {
			modelRef.current.position.set(...position);
		}

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [position]);

	return <primitive object={gltf.scene} ref={modelRef} />;
}

const ThreeDSection = () => {
	const modelPath = "/threejs/Mask_2.4_dima_low.glb";
	const initialPosition = [0, 3, 2];

	return (
		<div className="threeDparent border absolute inset-0 border-red-500 z-20 h-full w-full">
			<Canvas
				shadows
				gl={{ antialias: false }}
				camera={{ position: [0, -1.5, 5.5], fov: 70 }}
			>
				{/* <color attach="background" args={[x"#f0f0f0"]} />
				<fog attach="fog" args={["#f0f0f0", 0, 20]} /> */}
				<ambientLight intensity={1.2} />
				<directionalLight position={[10, 10, 5]} intensity={0.8} />
				<pointLight position={[10, 10, -10]} />
				<Model modelPath={modelPath} position={initialPosition} />
			</Canvas>
		</div>
	);
};

export default ThreeDSection;
