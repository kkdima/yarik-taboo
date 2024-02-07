import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { toggleLoading } from "@/store/slices/menuSlice";

const imageVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const ImagesSection = () => {
	return (
		<div
			className="h-full grid grid-cols-2 grid-rows-2 place-items-center items-start"
			// className="relative mt-10 max-w-[500px] m-auto w-full h-[500px]"
			// "hidden"
			// animate="visible"
		>
			<motion.span
				key="1"
				alt="Decorative"
				variants={imageVariants}
				className="md:w-[170px] p-4" // Tailwind classes for sizing and padding
			>
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
				alt="Decorative"
				variants={imageVariants}
				className=" p-4" // Tailwind classes for sizing and padding
				// className="absolute top-[108px] transform rotate-[-35deg]"
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
				alt="Decorative"
				variants={imageVariants}
				className=" p-4" // Tailwind classes for sizing and padding
				// className="absolute top-[90px] -right-9"
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
				alt="Decorative"
				variants={imageVariants}
				whileHover={{ scale: 1.1 }} // Optional: animate on hover
				className=" p-4" // Tailwind classes for sizing and padding
				// className="absolute w-full top-[290px]"
			>
				<Image
					src="/images/cowgirl.png"
					width="297"
					height="134"
					className="m-auto select-none"
					alt="cowboy laying"
				/>
			</motion.span>
		</div>
	);
};

export default ImagesSection;
