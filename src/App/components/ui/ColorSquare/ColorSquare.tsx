import { getHexColor } from "../../../data";



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
	const tooltip = `${baseColorName}-${shadeName}`;
	const hexColor: string = getHexColor(baseColorName, shadeName);
	const style = {
		backgroundColor: hexColor,
		height: `${size}px`,
		width: `${size}px`
	};

	return (
		<div className="group relative rounded cursor-pointer" style={style} onClick={onClick} title={tooltip}>
			<div className="absolute h-full w-full border-2 border-black/50 opacity-0 group-hover:opacity-100"></div>
		</div>
	);
}
