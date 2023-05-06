import { useState, useEffect } from 'react';

const useResponsiveImageHeight = (imageWidth) => {
	const [windowWidth, setWindowWidth] = useState(undefined);
	const [imageHeight, setImageHeight] = useState(undefined);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (windowWidth) {
			setImageHeight(windowWidth * 0.5); // Adjust the multiplier as needed
		}
	}, [windowWidth]);

	return imageHeight;
};

export default useResponsiveImageHeight;
