import React from "react";
import Image from "next/image";

const AboutArtist = () => {
	return (
		<div className="w-full px-7">
			<div className="flex justify-between mt-12 mb-5">
				<h1 className="text-2xl font-semibold">About the Artist</h1>
				<Image
					src="/images/spin.png"
					width={30}
					height={32}
					className="max-h-[32px] my-auto"
					alt="About the Artist"
				/>
			</div>
			<p className="text-[#7A7A7A]">
				Yarik, born and raised in Kyiv, Ukraine, discovered his passion for
				self-expression through the vivid world of graffiti during his youth.
				Immersed in rock and punk culture, he honed his artistic skills,
				ultimately transitioning into the realm of tattoo artistry. Now based in
				Los Angeles, Yarik continues to channel his post-punk roots, creating
				edgy and unique tattoos that reflect his distinctive style and creative
				spirit.
			</p>
			<div className="max-w-[500px] mx-auto mt-9">
				<Image
					src="/images/yarik_himself_color.jpg"
					style={{ width: "100%", height: "auto" }}
					width={300}
					height={450}
					alt="photo of yarik"
				/>
			</div>
		</div>
	);
};

export default AboutArtist;
