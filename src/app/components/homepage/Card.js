// import { delay } from "@reduxjs/toolkit/dist/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({ src, cardRef, onClick, folderName }) => {
	return (
		<motion.div
			layout
			ref={cardRef}
			layoutId={`card-${src}`}
			onClick={onClick}
			whileTap={{ scale: 1.1 }}
			// whileHover={{ scale: 1.1 }}
			className="relative snap-center rounded-[8px] aspect-[1/1] border cursor-grab active:cursor-grabbing border-primary-black overflow-hidden m-4 select-none w-full min-w-[25%]"
		>
			<Image
				src={`/images/${folderName}/${src}.jpeg`}
				fill
				alt="flashes"
				onDragStart={(e) => e.preventDefault()}
				className="object-contain w-full h-full"
			/>
		</motion.div>
	);
};

export default Card;
