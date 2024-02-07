"use client";

import Image from "next/image";
import ImagesSection from "@/components/homepage/ImagesSection";
import Carousel from "@/components/homepage/Carousel";
import ThreeDSection from "@/components/homepage/ThreeDSection";
import Services from "@/components/homepage/Services";
import AboutArtist from "@/components/homepage/AboutArtist";
import Tattoos_Carousel from "@/components/homepage/Tattoos_Carousel";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/homepage/heroSection/HeroSection";

export default function Home() {
	const isLoading = useSelector((state) => state.menu.isLoading);

	return (
		<main className="pt-10 flex flex-col overflow-hidden">
			<div className="text-center px-5 ">
				<p>
					Tattoo Artist <br /> Based in Los Angeles
				</p>
			</div>
			{/* <HeroSection /> */}
			{/* <ThreeDSection />
			<ImagesSection /> */}
			{/* <Services /> */}
			<div className="">
				<Image
					src="/images/yarik_himself.png"
					width={30}
					height={450}
					layout="responsive"
					className="mx-auto max-w-[330px] mt-9 translate-x-[-20px]"
					alt="Yarik"

					// height={450}
				/>
				<div className="text-center px-5 ">
					<motion.button
						whileHover={{
							borderColor: "#000000",
							backgroundColor: "#FFFFFF",
							color: "#000000",
						}}
						whileTap={{ scale: 0.9 }}
						className="bg-primary-black text-white mx-auto max-w-min whitespace-nowrap rounded-[8px] py-2 px-4 cursor-pointer"
					>
						Book an appointment
					</motion.button>
				</div>
			</div>
			<Carousel />
			{/* <Tattoos_Carousel /> */}
			<AboutArtist />
		</main>
	);
}
