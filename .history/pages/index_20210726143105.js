import path from "path";
import fs from "fs/promises";

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

export async function getStaticProps(context) {
	console.log("Re-Generating");
	const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	if (data.properties === 0) {
		return { notFound: true };
	}

	return {
		props: {
			properties: data.properties ?? null,
		},
		revalidate: 10,
		notFound: true,
	};
}

export default HomePage;
