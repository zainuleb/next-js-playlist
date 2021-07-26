function HomePage(props) {
	const { properties } = props;
	return (
		<ul>
			{properties.map((product) => (
				<li key={property.id}>{property.id}</li>
			))}
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
