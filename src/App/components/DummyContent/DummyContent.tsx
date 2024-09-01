


export const DUMMY_CONTENT_PROPS = [
	'aboutApp', 'aboutMe', 'lorem', 'dummy'
];

interface DummyContentProps {
	content: string
}

export default function DummyContent ({
	content
}: DummyContentProps) {
	function getContent () {
		switch (content) {
			case "aboutApp":
				return (
					<>
						<h1>Contrast</h1>
						<p>This is just some dummy content.</p>
					</>
				);
			case "aboutMe":
				return (
					<>
						<h1>Ankur Seth</h1>
						<p>This is just some dummy content.</p>
					</>
				);
			case "lorem":
				return (
					<>
						<h1>Lorem Ipsum</h1>
						<p>This is just some dummy content.</p>
					</>
				);
			default:
				return (
					<>
						<h1>Dummy Content</h1>
						<p>This is just some dummy content.</p>
					</>
				);
		}
	}

	return (
		<article className="px-6 py-6 max-w-xl mx-auto text-left">
			{getContent()}
		</article>
	);
}
