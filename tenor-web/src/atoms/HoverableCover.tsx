import { Play } from "react-feather";
import clsx, { ClassValue } from "clsx";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import { ISong } from "../common/song";

export type HoverableCoverProps =
	| Pick<ISong, "album"> & {
			height?: ClassValue;
			buttonHeight?: string;
	  };

const fullConfig = resolveConfig(tailwindConfig);

export const HoverableCover = ({
	album,
	height = "h-12",
	buttonHeight
}: HoverableCoverProps) => (
	<div className="relative inline-block h-full">
		<img
			className={clsx(
				height,
				"filter",
				"duration-150",
				"rounded-md",
				"transform",
				"group-hover:blur-sm",
				"group-hover:scale-90"
			)}
			src={album.cover}
		/>
		<div className="absolute top-0 left-0 items-center justify-center hidden w-full h-full duration-150 cursor-pointer group-hover:flex">
			<Play color={fullConfig.theme.colors.white} size={buttonHeight} />
		</div>
	</div>
);
