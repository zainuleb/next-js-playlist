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

	const protpertyId = params.id;
}

export default ProductDetailPage;
