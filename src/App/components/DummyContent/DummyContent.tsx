


export const DUMMY_CONTENT_PROPS = [
	'lorem', 'dummy'
];

interface DummyContentProps {
	content: string
}

export default function DummyContent ({
	content
}: DummyContentProps) {
	function getContent () {
		switch (content) {
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
		<article className="px-4 py-6 max-w-xl mx-auto">
			{getContent()}
		</article>
	);
}
