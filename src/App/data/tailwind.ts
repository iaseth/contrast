import tailwindColorsJson from './tailwindColors.json';



export const BaseColorNames: string[] = [
	"slate", "gray", "zinc", "neutral", "stone",
	"red", "orange", "amber", "yellow",
	"lime", "green", "emerald", "teal", "cyan",
	"sky", "blue", "indigo", "violet", "purple",
	"fichsia", "pink", "rose"
];

export const BaseShadeNames: string[] = [
	"50", "100", "150", "200", "250",
	"300", "350", "400", "450", "500",
	"550", "600", "650", "700", "750",
	"800", "850", "900", "950"
];

export interface TailwindColorDS {
	title: string,
	name: string,
	shades: TailwindColorShadeDS[]
}

export interface TailwindColorShadeDS {
	shade: string,
	hex: string
}

export const tailwindColors: TailwindColorDS[] = tailwindColorsJson.colors;

export function getHexColor (baseColorName: string, shadeName: string): string {
	const color: TailwindColorDS = tailwindColors.find(c => c.name === baseColorName) || tailwindColors[0];
	const shade: TailwindColorShadeDS = color.shades.find(c => c.shade === shadeName) || color.shades[0];
	return shade.hex;
}
