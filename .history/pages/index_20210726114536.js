function HomePage(props) {
	const { properties } = props;
	return (
		<ul>
			{properties.map((property) => (
				<li key={property.id}>{property.title}</li>
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
