import React from "react";
import { getAllListings } from "../../dummy-data";

export default function AllListings() {
	const listings = getAllListings();

	return (
		<div>
			<h1>All listings here</h1>
		</div>
	);
}
