import React from "react";
import { BaseColorNames, BaseShadeNames } from "../../../data";
import { ColorSquare } from "../ui";



interface ColorSelectorProps {
	baseColorName: string,
	baseShadeName: string,
	setBaseColorName: React.Dispatch<React.SetStateAction<string>>,
	setBaseShadeName: React.Dispatch<React.SetStateAction<string>>,
	className: string
}

export default function ColorSelector ({
	baseColorName, baseShadeName, setBaseColorName, setBaseShadeName, className
}: ColorSelectorProps) {

	return (
		<section className={`px-2 py-4 bg-white grid grid-cols-2 gap-x-4 border-2 border-t-0 border-zinc-600 ${className}`}>
			<section className="flex gap-1 flex-wrap justify-center">
				{BaseColorNames.map(color => <ColorSquare baseColorName={color} shadeName={baseShadeName}
					onClick={() => setBaseColorName(color)} />)}
			</section>

			<section className="flex gap-1 flex-wrap">
				{BaseShadeNames.map(shade => <ColorSquare baseColorName={baseColorName} shadeName={shade}
					onClick={() => setBaseShadeName(shade)} />)}
			</section>
		</section>
	);
}
