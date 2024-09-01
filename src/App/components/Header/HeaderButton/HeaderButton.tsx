


interface HeaderButtonProps {
	text1: string,
	text2: string,
	hexColor: string
}

export default function HeaderButton ({
	text1, text2, hexColor
}: HeaderButtonProps) {
	return (
		<button className="grid grid-cols-4 bg-zinc-600 text-zinc-100 border-2 border-zinc-600">
			<section className="col-span-3 px-2 py-2 text-xs font-bold text-left">
				<div>{text1}</div>
				<div>{text2}</div>
			</section>

			<section className="h-full bg-red-500" style={{backgroundColor: hexColor}}></section>
		</button>
	);
}
