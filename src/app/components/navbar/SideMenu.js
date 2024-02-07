"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuVariants } from "@/framer-variants/variants";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "@/store/slices/menuSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";

const SideMenu = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.menu.isOpen);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed top-0 right-0 h-full w-full bg-white z-50"
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={menuVariants}
				>
					<div className="flex justify-end pt-4 mr-1">
						<motion.button
							className="p-4"
							whileTap={{ scale: 0.9 }}
							onClick={() => dispatch(toggleMenu())}
						>
							<XMarkIcon className="h-6 w-6" />
						</motion.button>
					</div>
					<div className="font-semibold text-3xl text-left h-auto px-10">
						<h2 className="pb-5">Contact and Booking</h2>
						<h2 className="pb-5">Service & Pricing</h2>
						<h2 className="pb-5">Shop</h2>
						<h2 className="pb-5">Portfolio</h2>
						<h2 className="pb-5">About</h2>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default SideMenu;
