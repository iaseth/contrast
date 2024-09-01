import { TailwindColorDS, TailwindColorShadeDS, tailwindColors } from "../../../data";



interface ColorSquareProps {
	baseColorName: string,
	shadeName?: string,
	size?: number,
	onClick?: () => void
}

export default function ColorSquare ({
	baseColorName,
	shadeName="500",
	size=40,
	onClick = () => {}
}: ColorSquareProps) {
	const color: TailwindColorDS = tailwindColors.find(c => c.name === baseColorName) || tailwindColors[0];
	const shade: TailwindColorShadeDS = color.shades.find(c => c.shade === shadeName) || color.shades[0];
	const style = {
		backgroundColor: shade.hex,
		height: `${size}px`,
		width: `${size}px`
	};

	return (
		<div className="group relative rounded cursor-pointer" style={style} onClick={onClick}>
			<div className="absolute h-full w-full border-2 border-black/50 opacity-0 group-hover:opacity-100"></div>
		</div>
	);
}
