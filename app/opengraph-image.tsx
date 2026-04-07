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
				background: "#111827",
				fontFamily: "Inter, -apple-system, sans-serif",
			}}
		>
			<svg viewBox="0 0 40 40" width={120} height={120}>
				<circle
					cx="20"
					cy="20"
					r="8"
					fill="none"
					stroke="#E0E7FF"
					stroke-width="3"
				/>
				<line
					x1="20"
					y1="8"
					x2="20"
					y2="4"
					stroke="#E0E7FF"
					stroke-width="3"
					stroke-linecap="round"
				/>
				<line
					x1="20"
					y1="36"
					x2="20"
					y2="32"
					stroke="#E0E7FF"
					stroke-width="3"
					stroke-linecap="round"
				/>
				<line
					x1="8"
					y1="20"
					x2="4"
					y2="20"
					stroke="#E0E7FF"
					stroke-width="3"
					stroke-linecap="round"
				/>
				<line
					x1="36"
					y1="20"
					x2="32"
					y2="20"
					stroke="#E0E7FF"
					stroke-width="3"
					stroke-linecap="round"
				/>
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
