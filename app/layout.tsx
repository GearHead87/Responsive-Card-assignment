import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Responsive Card for Hotel',
	description: 'Good Looking Hotel Card',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="light">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto min-h-screen scroll-smooth bg-white`}
			>
				{children}
			</body>
		</html>
	);
}
