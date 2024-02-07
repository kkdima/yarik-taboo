export const modelVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

export const imageVariants = {
	hidden: { opacity: 0 },
	visible: (custom) => ({
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};
