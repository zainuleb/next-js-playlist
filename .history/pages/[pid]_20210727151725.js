import path from "path";
import fs from "fs/promises";

function PropertyDetailPage(props) {
	const { loadedProperty } = props;

	if (!loadedProperty) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<h1>{loadedProperty.title}</h1>
			<p>{loadedProperty.description}</p>
		</>
	);
}

async function getData() {
	const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	return data;
}
export async function getStaticProps(context) {
	const { params } = context;
	const propertyId = params.pid;

	const data = await getData();

	const property = data.properties.find(
		(property) => property.id === propertyId
	);

	return {
		props: {
			loadedProperty: property,
		},
	};
}

export async function getStaticPaths() {
	const data = await getData();

	const ids = data.properties.map((property) => property.id);

	const pathswithParams = ids.map((id) => ({ params: { pid: id } }));

	return {
		paths: pathswithParams,
		fallback: false,
	};
}

export default PropertyDetailPage;
