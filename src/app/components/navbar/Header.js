"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toggleMenu } from "@/store/slices/menuSlice";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
	const dispatch = useDispatch();

	return (
		<div className="flex justify-between px-5 pt-8">
			<div className="select-none">
				<Image
					src="/images/yarik_logo.png"
					height="40"
					width="151"
					alt="yarik logo"
				/>
			</div>
			<motion.div
				className="cursor-pointer select-none"
				whileTap={{ scale: 0.9 }}
				onClick={() => dispatch(toggleMenu())}
			>
				<Bars3Icon className="h-6 w-6" />
			</motion.div>
		</div>
	);
};

export default Header;
