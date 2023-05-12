'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useSelector, useDispatch } from 'react-redux';
import { toggleLoading } from '@/store/slices/menuSlice';

const containerVariants = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const imageVariants = {
	hidden: { opacity: 0, scale: 0.4, y: 20 },
	visible: { opacity: 1, scale: 1, y: 0 },
};

const ImagesSection = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.menu.isLoading);

	return (
		<motion.div
			className="relative mt-10 max-w-[500px] m-auto w-full h-[500px]"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.span key="1" variants={imageVariants}>
				<Image
					src="/images/character_main.png"
					width="197"
					height="236"
					className="m-auto select-none"
					alt="tiger"
					onLoad={() => toggleLoading()}
				/>
			</motion.span>
			<motion.span
				key="2"
				variants={imageVariants}
				className="absolute top-[108px] transform rotate-[-35deg]"
			>
				<Image
					src="/images/lady_warrior.png"
					width="114"
					height="200"
					className="select-none "
					alt="yarik himself"
				/>
			</motion.span>
			<motion.span
				key="3"
				variants={imageVariants}
				className="absolute top-[90px] -right-9"
			>
				<Image
					src="/images/cowboy_laying.png"
					width="159"
					height="194"
					className="m-auto select-none"
					alt="cowboy laying"
					onLoad={() => toggleLoading()}
				/>
			</motion.span>
			<motion.span
				key="4"
				variants={imageVariants}
				className="absolute w-full top-[290px]"
			>
				<Image
					src="/images/cowgirl.png"
					width="297"
					height="134"
					className="m-auto select-none"
					alt="cowboy laying"
				/>
			</motion.span>
		</motion.div>
	);
};

export default ImagesSection;
