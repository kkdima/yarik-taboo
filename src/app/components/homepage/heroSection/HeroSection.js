// src/app/components/homepage/HeroSection.js

import React from "react";
import ThreeDSection from "@/components/homepage/ThreeDSection";
import ImagesSection from "@/components/homepage/ImagesSection";

const HeroSection = () => {
	return (
		<div className="relative h-screen w-full overflow-hidden border">
			<div className="flex justify-center items-center">
				<ThreeDSection />
			</div>
			<div className="relative">
				<ImagesSection />
			</div>
		</div>
	);
};

export default HeroSection;
