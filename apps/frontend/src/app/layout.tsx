import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "STDIMS RPG",
	description: "Character sheet website for STDIMS",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
