


interface HeaderProps {}

export default function Header ({}: HeaderProps) {
	return (
		<header className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-xl px-4" onClick={e => e.stopPropagation()}>
			<section className="bg-zinc-100 grid grid-cols-4 gap-0.5 text-center ch:bg-red-500 ch:text-zinc-100">
				<section className="col-span-2 px-3 py-1">
					<h6>Background</h6>
				</section>
				<section className="col-span-2 px-3 py-1">
					<h6>Text</h6>
				</section>

				<section className="px-3 py-1">
					<h6>Color</h6>
				</section>
				<section className="px-3 py-1">
					<h6>Shade</h6>
				</section>
				<section className="px-3 py-1">
					<h6>Color</h6>
				</section>
				<section className="px-3 py-1">
					<h6>Shade</h6>
				</section>
			</section>
		</header>
	);
}
