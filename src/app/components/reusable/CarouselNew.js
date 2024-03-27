import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { CarouselItem } from "@/components/reusable/CarouselItem.js";

export default function Home() {
	let [ref, { width }] = useMeasure();
	let [count, setCount] = useState(0);
	let prev = usePrevious(count);
	let direction = count > prev ? 1 : -1;

	let [numDivs, setNumDivs] = useState(Math.floor(window.innerWidth / 300));

	const handleResize = () => {
		let calculatedNumDivs = Math.floor(window.innerWidth / 300);
		if (calculatedNumDivs < 1) {
			setNumDivs(1);
		} else if (calculatedNumDivs > 4) {
			setNumDivs(4);
		} else {
			setNumDivs(calculatedNumDivs);
		}
	};

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="flex justify-center">
			<div className="mt-12 w-full max-w-[1024px] text-white border overflow-visible">
				<div className="flex justify-between px-4">
					<button
						className="border text-black"
						onClick={() =>
							setCount((count - numDivs + colors.length) % colors.length)
						}
					>
						prev
					</button>
					<button
						className="border text-black"
						onClick={() => setCount((count + numDivs) % colors.length)}
					>
						next
					</button>
				</div>
				<div className="mt-8 flex justify-center overflow-visible">
					<div className="aspect-square w-full overflow-visible">
						<div className="relative gap-4  flex max-h-[300px] h-full items-center justify-center overflow-visible">
							<AnimatePresence>
								{doubleColors
									.slice(count, count + numDivs)
									.map((color, index) => {
										const uniqueKey = `${count + index}`; // append a timestamp to the key
										return (
											<motion.div
												key={color.id} // Ensure each item has a unique identifier
												initial={{ opacity: 0, x: -100 }}
												animate={{ opacity: 1, x: 0 }}
												exit={{ opacity: 0, x: 100 }}
												transition={{
													type: "spring",
													stiffness: 300,
													damping: 30,
												}}
												custom={{ direction, width, index, numDivs }}
												className={`flex h-[300px] w-[300px] items-center justify-center text-3xl font-bold ${color} `}
											>
												{count + index}
											</motion.div>
										);
									})}
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>h
		</div>
	);
}

let colors = [
	"bg-red-100",
	"bg-red-200",
	"bg-red-300",
	"bg-red-400",
	"bg-blue-100",
	"bg-blue-200",
	"bg-blue-300",
	"bg-blue-400",
	"bg-green-100",
	"bg-green-200",
	"bg-green-300",
	"bg-green-400",
	"bg-yellow-100",
	"bg-yellow-200",
	"bg-yellow-300",
	"bg-yellow-400",
];

let doubleColors = [...colors, ...colors];

let variants = {
	enter: ({ direction, width, index, numDivs }) => ({
		// x: direction * width * numDivs,
		x: direction * width,
		transition: {
			x: { type: "spring", stiffness: 300, damping: 30 },
		},
	}),
	center: ({ direction, width, index, numDivs }) => ({
		x: 0,
		opacity: 1,
		transition: {
			x: { type: "spring", stiffness: 300, damping: 30 },
			opacity: { duration: 0.2 },
		},
	}),

	exit: ({ direction, width, index, numDivs }) => ({
		x: -width,
		opacity: 0,
		scale: 0,
		transition: {
			x: { type: "spring", stiffness: 300, damping: 30, duration: 0.2 },
			opacity: { duration: 0.2 },
		},
	}),
};

function usePrevious(count) {
	let [tuple, setTuple] = useState([null, count]);

	if (tuple[1] !== count) {
		setTuple([tuple[1], count]);
	}

	return tuple[0];
}
