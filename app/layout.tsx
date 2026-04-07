import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { source } from "@/lib/source";
import { baseOptions } from "@/app/layout.config";
import { JsonLd } from "@/components/json-ld";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
};

export const metadata: Metadata = {
	metadataBase: new URL("https://feedstock.dev"),
	title: {
		template: "%s | Feedstock",
		default: "Feedstock - High-Performance Web Crawler for TypeScript",
	},
	description:
		"Crawl, scrape, and extract structured data from the web with TypeScript and Bun. Playwright and Lightpanda browser backends, deep crawling, markdown generation, and more.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://feedstock.dev",
		siteName: "Feedstock",
		title: "Feedstock - High-Performance Web Crawler for TypeScript",
		description:
			"Crawl, scrape, and extract structured data from the web with TypeScript and Bun. Playwright and Lightpanda browser backends, deep crawling, markdown generation, and more.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Feedstock",
		description:
			"High-performance web crawler for TypeScript, powered by Bun and Playwright.",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},
	alternates: {
		canonical: "/",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} ${jetbrainsMono.variable}`}>
				<JsonLd
					data={{
						"@context": "https://schema.org",
						"@type": "WebSite",
						name: "Feedstock",
						url: "https://feedstock.dev",
						description:
							"High-performance web crawler for TypeScript, powered by Bun and Playwright.",
						inLanguage: "en",
						publisher: {
							"@type": "Organization",
							name: "Feedstock",
							url: "https://github.com/tylergibbs1/feedstock",
						},
					}}
				/>
				<JsonLd
					data={{
						"@context": "https://schema.org",
						"@type": "SoftwareSourceCode",
						name: "Feedstock",
						url: "https://feedstock.dev",
						codeRepository:
							"https://github.com/tylergibbs1/feedstock",
						programmingLanguage: "TypeScript",
						runtimePlatform: "Bun",
						description:
							"High-performance web crawler for TypeScript",
					}}
				/>
				<RootProvider>
					<DocsLayout tree={source.pageTree} {...baseOptions}>
						{children}
					</DocsLayout>
				</RootProvider>
				<Analytics />
			</body>
		</html>
	);
}
