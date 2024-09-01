import './App.css';

import { red } from 'redicons';
import rediconsJson from './redicons.json';
import { ColorSelector, ColorSquare, DummyContent, Header, HeaderButton } from './components';
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

	const style = {
		backgroundColor: bgHexColor,
		color: textHexColor
	}

	return (
		<div className="min-h-screen relative select-none" style={style} onClick={nextContent}>
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
