import path from "path";
import fs from "fs/promises";

function ProductDetailPage(props) {
	const { loadedProduct } = props;

	return (
		<>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</>
	);
}

export async function getStaticProps(context) {
	const { params } = context;
	const propertyId = params.pid;

	const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

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
	return {
		paths: [
			{ params: { pid: "p1" } },
			{ params: { pid: "p2" } },
			{ params: { pid: "p3" } },
		],
	};
}

export default ProductDetailPage;
