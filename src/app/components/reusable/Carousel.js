import { motion, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import useMeasure from "react-use-measure";
// import { images } from "@/data/imagePath/images.js";
import Card from "@/components/homepage/Card.js";
import ExpandedCard from "@/components/homepage/ExpandedCard.js";

export default function Carousel(props) {
	const x = useSpring(0, { mass: 2, stiffness: 700, damping: 70 });
	const [cardRef, { width: cardWidth }] = useMeasure();
	const [sliderRef, { width: sliderWidth }] = useMeasure();
	const draggableRef = useRef(null);
	const [selectedCard, setSelectedCard] = useState(null);
	const [isSelected, setIsSelected] = useState(false);

	return (
		<div>
			<div
				ref={sliderRef}
				className="relative w-full mx-auto mt-[4px] overflow-scroll snap-x scroll-snap-x hide-scrollbar"
			>
				{isSelected && (
					<ExpandedCard
						isSelected={isSelected}
						setIsSelected={setIsSelected}
						selectedCard={selectedCard}
						setSelectedCard={setSelectedCard}
					/>
				)}
				<motion.div
					ref={draggableRef}
					className="inline-flex p-3 pb-2 snap-start"
				>
					{Array.from({ length: props.numberOfFiles }, (_, i) => {
						const src = i + 1;
						return (
							<Card
								src={src}
								folderName={props.folderName}
								key={i}
								cardRef={cardRef}
								onClick={() => (setSelectedCard(i), setIsSelected(!isSelected))}
								isSelected={i === selectedCard}
							/>
						);
					})}
				</motion.div>
			</div>
		</div>
	);
}
