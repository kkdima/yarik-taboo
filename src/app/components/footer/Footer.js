"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="w-full bg-primary-black text-gray-100 px-[35px] py-10 flex justify-center">
			<div className="flex w-full justify-between max-w-xl">
				<div className="space-y-5">
					<div className="flex">
						<Image
							src="/images/footer/Instagram.svg"
							alt="instagram"
							width={35}
							height={35}
						/>
						<a
							href="https://www.instagram.com/yarik.taboo/"
							className="self-end ml-2  hover:cursor-pointer"
						>
							Instagram
						</a>
					</div>
					<div className="flex">
						<Image
							src="/images/footer/smile.svg"
							width={35}
							height={35}
							alt="smile"
							className="ml-1 mr-3"
						/>
						<p className="hover:cursor-pointer">hello@yariktaboo.com</p>
					</div>
					<div className="flex">
						<Image
							src="/images/footer/upside_down_smile.svg"
							width={35}
							height={35}
							alt="smile"
							className="ml-1 mr-3 "
						/>
						<p className="underline underline-offset-4 hover:cursor-pointer">
							Policy
						</p>
					</div>
				</div>
				<div>
					<Image
						src="/images/footer/clown.svg"
						width={110}
						height={168}
						alt="smile"
						className="-mt-5"
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
