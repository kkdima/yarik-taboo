import './globals.css';
import { Jost } from 'next/font/google';
import { Providers } from '@/store/provider';
import Header from '@/components/navbar/Header';
import Footer from '@/components/footer/Footer.js';
import SideMenu from '@/components/navbar/SideMenu';
import ClientOnly from '@/components/ClientOnly';

const jost = Jost({ subsets: ['latin'] });

export const metadata = {
	title: 'Yarik Taboo',
	description: 'Tattoo artist from Los Angeles',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Providers>
			<html lang="en">
				<ClientOnly>
					<Header />
					<SideMenu />
				</ClientOnly>
				<body className={jost.className}>{children}</body>
				{/* <Footer /> */}
			</html>
		</Providers>
	);
}
