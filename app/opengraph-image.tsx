import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Feedstock - High-Performance Web Crawler for TypeScript";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: "#0F1219",
				fontFamily: "Inter, -apple-system, sans-serif",
			}}
		>
			<svg viewBox="0 0 40 40" width={120} height={120}>
				<circle cx="20" cy="20" r="6" fill="#6C8CFF" />
				<line x1="20" y1="12" x2="20" y2="4" stroke="#6C8CFF" stroke-width="2.5" stroke-linecap="round" />
				<circle cx="20" cy="3" r="2" fill="#6C8CFF" />
				<line x1="20" y1="28" x2="20" y2="36" stroke="#6C8CFF" stroke-width="2.5" stroke-linecap="round" />
				<circle cx="20" cy="37" r="2" fill="#6C8CFF" />
				<line x1="12" y1="20" x2="4" y2="20" stroke="#6C8CFF" stroke-width="2.5" stroke-linecap="round" />
				<circle cx="3" cy="20" r="2" fill="#6C8CFF" />
				<line x1="28" y1="20" x2="36" y2="20" stroke="#6C8CFF" stroke-width="2.5" stroke-linecap="round" />
				<circle cx="37" cy="20" r="2" fill="#6C8CFF" />
				<line x1="25" y1="15" x2="31" y2="9" stroke="#6C8CFF" stroke-width="2" stroke-linecap="round" opacity="0.5" />
				<circle cx="32.5" cy="7.5" r="1.5" fill="#6C8CFF" opacity="0.5" />
				<line x1="15" y1="25" x2="9" y2="31" stroke="#6C8CFF" stroke-width="2" stroke-linecap="round" opacity="0.5" />
				<circle cx="7.5" cy="32.5" r="1.5" fill="#6C8CFF" opacity="0.5" />
			</svg>
			<div
				style={{
					fontSize: 64,
					fontWeight: 500,
					color: "#E0E7FF",
					letterSpacing: "-0.04em",
					marginTop: 24,
					lineHeight: 1,
				}}
			>
				feedstock
			</div>
			<div
				style={{
					fontSize: 20,
					color: "#6B7280",
					marginTop: 16,
					letterSpacing: "-0.01em",
				}}
			>
				High-performance web crawler for TypeScript
			</div>
		</div>,
		{ ...size },
	);
}
