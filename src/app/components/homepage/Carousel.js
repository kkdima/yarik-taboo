import { motion, useSpring } from "framer-motion";
import { useRef } from "react";
import useMeasure from "react-use-measure";
import { images } from "@/data/imagePath/images.js";
import Card from "@/components/homepage/Card.js";

export default function Carousel() {
	const x = useSpring(0, { mass: 2, stiffness: 700, damping: 70 });
	const [cardRef, { width: cardWidth }] = useMeasure();
	const [sliderRef, { width: sliderWidth }] = useMeasure();
	const draggableRef = useRef(null);

	let startPos = 0;
	const handleDragStart = () => {
		startPos = x.get();
	};

	const handleDragEnd = (_, i) => {
		const direction = i.offset.x > 0 ? -1 : 1;

		let movedCards =
			Math.abs(i.offset.x) > cardWidth / 5
				? Math.round(Math.abs(i.offset.x) / cardWidth)
				: 0;

		const threshold = cardWidth / 4;
		if (Math.abs(i.offset.x) > threshold) {
			movedCards = Math.max(movedCards, 1);
		}

		let newPosition;
		if (movedCards === 0) {
			newPosition = startPos; // Snap back to the original position
		} else {
			console.log(x.get());
			console.log(i.offset.x);
			newPosition =
				x.get() - movedCards * (cardWidth + 28 + i.offset.x) * direction;
			newPosition = Math.max(
				Math.min(newPosition, 0),
				-cardWidth * images.length + sliderWidth - cardWidth
			);
		}

		x.set(newPosition);
	};

	return (
		<div className="text-center font-sans">
			<div
				ref={sliderRef}
				className="relative w-full mx-auto mt-[4px] rounded-md overflow-hidden p-3 pb-2"
			>
				<motion.div
					ref={draggableRef}
					className="inline-flex"
					drag="x"
					dragTransition={{ bounceStiffness: 50, bounceDamping: 12 }}
					dragConstraints={{
						left:
							-cardWidth * images.length +
							sliderWidth -
							16 * 2 * images.length -
							24,
						right: 0,
					}}
					onDragStart={handleDragStart}
					onDragEnd={handleDragEnd}
					dragMomentum={false}
					style={{ x }}
				>
					{images.map((src, i) => {
						return <Card src={src} key={i} cardRef={cardRef} />;
					})}
				</motion.div>
			</div>
		</div>
	);
}
