import { Play } from "react-feather";
import { classnames, TArg, THeight } from "tailwindcss-classnames";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

export interface HoverableCoverProps {
	cover: string;
	height?: THeight;
	onClick?: () => void | PromiseLike<void>;
}

const fullConfig = resolveConfig(tailwindConfig);

export const HoverableCover = ({
	cover,
	height = "h-12",
	onClick
}: HoverableCoverProps) => (
	<div className="relative inline-block">
		<img
			className={classnames(
				height,
				"filter",
				"duration-150",
				"rounded-md",
				"transform" as TArg,
				"group-hover:blur-sm" as TArg,
				"group-hover:scale-90" as TArg
			)}
			src={cover}
		/>
		<div
			className="hidden duration-150 absolute top-0 left-0 w-full h-full group-hover:flex items-center justify-center cursor-pointer"
			onClick={onClick}
		>
			<Play color={fullConfig.theme.colors.white} />
		</div>
	</div>
);
