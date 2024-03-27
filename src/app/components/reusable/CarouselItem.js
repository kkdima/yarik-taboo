import React from "react";
import { motion } from "framer-motion";

const CarouselItem = (count, index, color) => {
	return (
		<motion.div
			// key={color.id} // Ensure each item has a unique identifier
			initial={{ opacity: 0, x: -100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 100 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 30,
			}}
			// custom={{ direction, width, index, numDivs }}
			className={`flex h-[300px] w-[300px] items-center justify-center text-3xl font-bold ${color} `}
		>
			{count + index}
		</motion.div>
	);
};

export default CarouselItem;
