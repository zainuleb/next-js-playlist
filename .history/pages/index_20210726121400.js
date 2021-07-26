import fs from "fs/promises";
import path from "path";

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
	const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
	const jsonData = await fs.readFile(filePath);

	const data = JSON.parse(JSON.stringify(jsonData));
	return {
		props: {
			properties: data.properties,
		},
	};
}

export default HomePage;
