import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<div className="flex items-center gap-2.5">
				<svg viewBox="0 0 40 40" width={20} height={20}>
					<circle cx="20" cy="20" r="6" fill="currentColor" />
					<line x1="20" y1="12" x2="20" y2="4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
					<circle cx="20" cy="3" r="2" fill="currentColor" />
					<line x1="20" y1="28" x2="20" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
					<circle cx="20" cy="37" r="2" fill="currentColor" />
					<line x1="12" y1="20" x2="4" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
					<circle cx="3" cy="20" r="2" fill="currentColor" />
					<line x1="28" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
					<circle cx="37" cy="20" r="2" fill="currentColor" />
					<line x1="25" y1="15" x2="31" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
					<circle cx="32.5" cy="7.5" r="1.5" fill="currentColor" opacity="0.5" />
					<line x1="15" y1="25" x2="9" y2="31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
					<circle cx="7.5" cy="32.5" r="1.5" fill="currentColor" opacity="0.5" />
				</svg>
				<span className="font-medium text-[15px] tracking-[-0.03em]">
					feedstock
				</span>
			</div>
		),
	},
	githubUrl: "https://github.com/tylergibbs1/feedstock",
};
