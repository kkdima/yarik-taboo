'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleMenu } from '@/store/slices/menuSlice';
import Image from 'next/image';

const Header = () => {
	const dispatch = useDispatch();
	const isMenuOpen = useSelector((state) => state.menu.isOpen);

	return (
		<div className="flex justify-between px-5 pt-8">
			<div className="">
				<Image
					src="/images/yarik_logo.png"
					height="40"
					width="151"
					alt="yarik logo"
				/>
			</div>
			<motion.div
				className="cursor-pointer"
				whileTap={{ scale: 0.9 }}
				onClick={() => dispatch(toggleMenu())}
			>
				<Image
					src="/images/humberger_menu.png"
					width="35"
					height="32"
					alt="Menu"
				/>
			</motion.div>
		</div>
	);
};

export default Header;
