import HeaderButton from "./HeaderButton/HeaderButton";



interface HeaderProps {
	bgHexColor: string,
	textHexColor: string
}

export default function Header ({
	bgHexColor, textHexColor
}: HeaderProps) {
	return (
		<header className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-xl px-4" onClick={e => e.stopPropagation()}>
			<section className="bg-zinc-100 grid grid-cols-4 gap-0.5 text-center">
				<HeaderButton text1="Background" text2="Color" hexColor={bgHexColor} />
				<HeaderButton text1="Background" text2="Shade" hexColor={bgHexColor} />
				<HeaderButton text1="Text" text2="Color" hexColor={textHexColor} />
				<HeaderButton text1="Text" text2="Shade" hexColor={textHexColor} />
			</section>
		</header>
	);
}
