import React from "react";
import HeaderButton from "./HeaderButton/HeaderButton";
import ColorSelector from "./ColorSelector/ColorSelector";



interface HeaderProps {
	bgHexColor: string,
	textHexColor: string
}

export default function Header ({
	bgHexColor, textHexColor
}: HeaderProps) {
	const [showBgPicker, setShowBgPicker] = React.useState(false);
	const [showTextPicker, setShowTextPicker] = React.useState(false);

	const toggleBgPicker = () => {
		setShowTextPicker(false);
		setShowBgPicker(x => !x);
	};

	const toggleTextPicker = () => {
		setShowBgPicker(false);
		setShowTextPicker(x => !x);
	};

	return (
		<header className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-xl px-4" onClick={e => e.stopPropagation()}>
			<section className="">
				<header className="bg-zinc-100 grid grid-cols-2 gap-1 mb-1 text-center">
					<HeaderButton text="Background" hexColor={bgHexColor} onClick={toggleBgPicker} />
					<HeaderButton text="Text" hexColor={textHexColor} onClick={toggleTextPicker} />
				</header>

				<footer>
					{showBgPicker && <ColorSelector className="text-left" />}
					{showTextPicker && <ColorSelector className="text-right" />}
				</footer>
			</section>
		</header>
	);
}
