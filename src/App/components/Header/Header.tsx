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
			<section className="">
				<header className="bg-zinc-100 grid grid-cols-2 gap-1 text-center">
					<HeaderButton text="Background" hexColor={bgHexColor} />
					<HeaderButton text="Text" hexColor={textHexColor} />
				</header>

				<footer></footer>
			</section>
		</header>
	);
}
