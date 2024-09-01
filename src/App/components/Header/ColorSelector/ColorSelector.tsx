


interface ColorSelectorProps {
	className: string
}

export default function ColorSelector ({
	className
}: ColorSelectorProps) {
	return (
		<section className={`px-3 py-3 bg-white border-2 border-t-0 border-zinc-600 ${className}`}>
			<h4>ColorSelector</h4>
		</section>
	);
}
