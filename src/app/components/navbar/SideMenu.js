'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuVariants } from '@/framer-variants/variants';
import Image from 'next/image';

import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '@/store/slices/menuSlice';

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
							<Image src="/images/close.png" width="44" height="40" />
						</motion.button>
					</div>
					<div className="font-semibold text-3xl text-center h-auto">
						<h2 className="pb-5">Contact and Booking</h2>
						<h2 className="pb-5">Service & Pricing</h2>
						<h2 className="pb-5">Portfolio</h2>
						<h2 className="pb-5">About</h2>
						<Image
							src="/images/yarik_logo.png"
							width="151"
							height="40"
							className="m-auto select-none"
							alt="yarik logo"
						/>
					</div>
					<div>
						<Image
							src="/images/yarik_himself.png"
							height="400"
							width="300"
							className="absolute bottom-0 left-[50%] transform translate-x-[-40%] select-none"
							alt="yarik himself"
						/>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default SideMenu;
