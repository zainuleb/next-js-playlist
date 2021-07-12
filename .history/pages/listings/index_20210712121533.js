import React from "react";
import { getAllListings } from "../../dummy-data";
import PropertyList from "../../components/listings/property-list";

export default function AllListings() {
	const listings = getAllListings();

	return (
		<div>
			<h1>All listings here</h1>
			<PropertyList properties={listings} />
		</div>
	);
}
