import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
	XMarkIcon,
	MagnifyingGlassPlusIcon,
	MagnifyingGlassMinusIcon,
} from "@heroicons/react/24/outline";

const ModalImage = ({
	src,
	numberOfFiles,
	folderName,
	isSelected,
	setIsSelected,
	selectedCard,
	setSelectedCard,
}) => {
	const [isZoomed, setIsZoomed] = useState(false);
	const [direction, setDirection] = useState(0);

	console.log(numberOfFiles, folderName);

	useEffect(() => {
		if (isSelected) {
			document.body.style.overflow = "hidden";
			const handleKeyDown = (event) => {
				if (event.keyCode === 37) {
					// left arrow
					setDirection(-1);
					setSelectedCard((selectedCard - 1 + numberOfFiles) % numberOfFiles);
				} else if (event.keyCode === 39) {
					// right arrow
					setDirection(1);
					setSelectedCard((selectedCard + 1) % numberOfFiles);
				}
			};
			window.addEventListener("keydown", handleKeyDown);
			return () => {
				window.removeEventListener("keydown", handleKeyDown);
			};
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isSelected, selectedCard]);

	const toggleModal = () => {
		setIsSelected(!isSelected);
		setSelectedCard(null);
	};

	const toggleZoom = () => {
		setIsZoomed(!isZoomed);
	};

	return (
		<AnimatePresence>
			{isSelected && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-primary-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto"
					style={{ backdropFilter: "blur(5px)" }}
					onClick={toggleModal}
				>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: isZoomed ? 1.2 : 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.2 }}
						className="relative"
						onClick={(e) => e.stopPropagation()}
					>
						<Image
							src={`/images/${folderName}/${selectedCard}`}
							alt="Modal image"
							width="1952"
							height="2366"
							className="w-full max-h-[90vh] m-auto block md:max-w-none"
						/>
					</motion.div>
					<div className="absolute top-4 right-4 ">
						<button
							className="p-2 rounded-full bg-white shadow-lg focus:outline-none  mr-5"
							onClick={(e) => {
								e.stopPropagation(); // stop event propagation
								toggleZoom();
							}}
						>
							{isZoomed ? (
								<MagnifyingGlassMinusIcon className="h-6 w-6 text-black" />
							) : (
								<MagnifyingGlassPlusIcon className="h-6 w-6 text-black" />
							)}
						</button>
						<button
							className="p-2 rounded-full bg-white shadow-lg focus:outline-none"
							onClick={toggleModal}
						>
							<XMarkIcon className="h-6 w-6 text-black" />
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ModalImage;
