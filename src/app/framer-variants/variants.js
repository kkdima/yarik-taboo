// SideMenu.js
export const menuVariants = {
	hidden: {
		x: '100%',
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			stiffness: 100,
			damping: 20,
		},
	},
	exit: {
		x: '100%',
		opacity: 0,
		transition: {
			stiffness: 80,
			damping: 15,
		},
	},
};
