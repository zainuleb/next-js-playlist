import React from "react";
import { getAllListings } from "../../dummy-data";
import PropertyList from "../../components/listings/property-list";
import PropertiesSearch from "../../components/listings/properties-search";

export default function AllListings() {
	const listings = getAllListings();

	return (
		<>
			<PropertiesSearch />
			<PropertyList properties={listings} />
		</>
	);
}
