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
	console.log("This is", filePath);
	const data = JSON.stringify(jsonData);
	return {
		props: {
			properties: data,
		},
	};
}

export default HomePage;
