import './App.css';

import { red } from 'redicons';
import rediconsJson from './redicons.json';


red.addIcons(rediconsJson.icons);

export default function App () {

	return (
		<div className="min-h-screen">
			<section className='text-center py-12'>
				<h1 className='H4'>Foo</h1>
				<p>This is just some text.</p>
			</section>
		</div>
	);
}
