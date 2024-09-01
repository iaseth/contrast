import './App.css';

import { red } from 'redicons';
import rediconsJson from './redicons.json';
import { ColorSquare } from './components';
import React from 'react';
import { getHexColor } from './data';



red.addIcons(rediconsJson.icons);

export default function App () {
	const [bgBaseColor, setBgBaseColor] = React.useState('zinc');
	const [bgBaseShade, setBgBaseShade] = React.useState('100');
	const bgHexColor = getHexColor(bgBaseColor, bgBaseShade);

	const [textBaseColor, setTextBaseColor] = React.useState('zinc');
	const [textBaseShade, setTextBaseShade] = React.useState('700');
	const textHexColor = getHexColor(textBaseColor, textBaseShade);

	const style = {
		backgroundColor: bgHexColor,
		color: textHexColor
	}

	return (
		<div className="min-h-screen" style={style}>
			<section className='max-w-sm mx-auto text-center py-12'>
				<h1 className='H4'>Foo</h1>
				<p>This is just some text.</p>

				<section className='px-4 py-6 grid grid-cols-4'>
					<ColorSquare baseColorName={bgBaseColor} shadeName={bgBaseShade} />
					<ColorSquare baseColorName={textBaseColor} shadeName={textBaseShade} />
				</section>
			</section>
		</div>
	);
}
