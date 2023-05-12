"use client";

import Image from "next/image";
import ImagesSection from "@/components/homepage/ImagesSection";
import Carousel from "@/components/homepage/Carousel";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
	const isLoading = useSelector((state) => state.menu.isLoading);

	return (
		<main className="pt-10 flex flex-col overflow-hidden">
			<div className="text-center px-5 ">
				<p>
					Tattoo Artist <br /> Based in Los Angeles
				</p>
			</div>
			<ImagesSection />
			<motion.button
				whileHover={{
					borderColor: "#000000",
					backgroundColor: "#FFFFFF",
					color: "#000000",
				}}
				whileTap={{ scale: 0.9 }}
				className="bg-black text-white mx-auto max-w-min whitespace-nowrap border border-transparent border-black rounded-[8px] py-2 px-4 cursor-pointer"
			>
				Book an appointment
			</motion.button>
			<h1 className="px-7 text-2xl font-semibold mt-12">Flashes</h1>
			<Carousel />
		</main>
	);
}
