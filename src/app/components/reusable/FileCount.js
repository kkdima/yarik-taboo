import fs from "fs";
import path from "path";
import { useEffect, useState } from "react";

function FileCount({ folderName }) {
	const [fileCount, setFileCount] = useState(0);

	useEffect(() => {
		const calculateFileCount = () => {
			const directoryPath = path.join(
				process.cwd(),
				"public/images",
				folderName
			);
			const numberOfFiles = fs.readdirSync(directoryPath).length;
			setFileCount(numberOfFiles);
		};

		calculateFileCount(); // Calculate when the component mounts
		console.log("File count: ", fileCount);
	}, [folderName]); // Recalculate if folderName changes

	return null; // This component doesn't render any visible UI
}

export default FileCount;
