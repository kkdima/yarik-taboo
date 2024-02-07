import React from "react";
import Image from "next/image";

const servicesData = [
	{
		image: "/images/services/hearts_mini.png",
		title: "Tattoo",
		width: 30,
		height: 36,
	},
	{
		image: "/images/services/custom_flash.png",
		title: "Custom Flash",
		width: 30,
		height: 29,
	},
	{
		image: "/images/services/mask.png",
		title: "Masks",
		width: 27,
		height: 41,
	},
	{
		image: "/images/services/cards_paintings.png",
		title: "Paintings",
		width: 32,
		height: 52,
	},
];

const Services = () => {
	return (
		<div className="w-full px-7">
			<h1 className=" text-2xl font-semibold mt-12 mb-5">Services</h1>
			<div className="grid grid-cols-2 grid-rows-2 gap-5 place-items-center">
				{servicesData.map((service, i) => {
					return (
						<div
							key={i}
							className="border border-primary-black rounded-lg flex w-full justify-center space-x-2 h-[60px]"
						>
							<Image
								src={service.image}
								width={service.width}
								height={service.height}
								className="my-auto"
								alt={service.title}
							/>
							<p className="my-auto">{service.title}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Services;
