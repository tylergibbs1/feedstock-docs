import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<div className="flex items-center gap-2.5">
				<svg viewBox="0 0 40 40" width={20} height={20}>
					<circle
						cx="20"
						cy="20"
						r="8"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
					/>
					<line
						x1="20"
						y1="8"
						x2="20"
						y2="4"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
					/>
					<line
						x1="20"
						y1="36"
						x2="20"
						y2="32"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
					/>
					<line
						x1="8"
						y1="20"
						x2="4"
						y2="20"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
					/>
					<line
						x1="36"
						y1="20"
						x2="32"
						y2="20"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
					/>
				</svg>
				<span className="font-medium text-[15px] tracking-[-0.03em]">
					feedstock
				</span>
			</div>
		),
	},
	githubUrl: "https://github.com/tylergibbs1/feedstock",
};
