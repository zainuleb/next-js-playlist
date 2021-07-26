function HomePage(props) {
	const { properties } = props;
	return (
		<ul>
			<li>Product 1</li>
			<li>Product 2</li>
			<li>Product 3</li>
		</ul>
	);
}

export async function getStaticProps() {
	return {
		props: {
			properties: [{ id: "p1", title: "Property 1" }],
		},
	};
}

export default HomePage;
