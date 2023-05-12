import { motion } from 'framer-motion';
import Image from 'next/image';

const Card = ({ src, cardRef }) => {
	return (
		<motion.div
			layout
			ref={cardRef}
			whileTap={{ scale: 1.1 }}
			className="rounded-[8px] border cursor-grab active:cursor-grabbing border-black w-full min-w-[75%] md:w-4/12 md:min-w-[33%] lg:w-2/12 lg:min-w-[16%] overflow-hidden m-4 select-none h-min"
		>
			<Image
				src={`/images/flashes/${src}`}
				width="1952"
				height="2366"
				alt="flashes"
				onDragStart={(e) => e.preventDefault()}
			/>
		</motion.div>
	);
};

export default Card;
