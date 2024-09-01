


interface HeaderButtonProps {
	text: string,
	hexColor: string
}

export default function HeaderButton ({
	text, hexColor
}: HeaderButtonProps) {
	return (
		<button className="grid grid-cols-4 bg-white text-zinc-800 border-2 border-zinc-600">
			<section className="col-span-3 px-4 py-4 text-sm font-bold text-left">
				<div>{text}</div>
			</section>

			<section className="border-l-2 border-zinc-600 h-full bg-red-500" style={{backgroundColor: hexColor}}></section>
		</button>
	);
}
