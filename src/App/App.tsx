import './App.css';

import { red } from 'redicons';
import rediconsJson from './redicons.json';
import { ColorSquare, DummyContent } from './components';
import React from 'react';
import { getHexColor } from './data';
import { DUMMY_CONTENT_PROPS } from './components/DummyContent/DummyContent';



red.addIcons(rediconsJson.icons);

export default function App () {
	const [contentIndex, setContentIndex] = React.useState(0);
	const content = DUMMY_CONTENT_PROPS[contentIndex];
	const nextContent = () => setContentIndex(x => (x+1) % DUMMY_CONTENT_PROPS.length);

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
		<div className="min-h-screen select-none" style={style} onClick={nextContent}>
			<section className='py-48'>
				<DummyContent content={content} />

				<section className='px-4 py-6 grid grid-cols-4'>
					<ColorSquare baseColorName={bgBaseColor} shadeName={bgBaseShade} />
					<ColorSquare baseColorName={textBaseColor} shadeName={textBaseShade} />
				</section>
			</section>
		</div>
	);
}
