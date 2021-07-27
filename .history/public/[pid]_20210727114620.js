import React from "react";

function ProductDetailPage() {
	return (
		<>
			<h1>Title</h1>
			<p>Description</p>
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

export default ProductDetailPage;
