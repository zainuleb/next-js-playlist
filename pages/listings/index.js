import React from "react";
import { useRouter } from "next/router";
import { getAllListings } from "../../dummy-data";
import PropertyList from "../../components/listings/property-list";
import PropertiesSearch from "../../components/listings/properties-search";

export default function AllListings() {
	const router = useRouter();

	const listings = getAllListings();

	function findEventsHandler(year, month) {
		const fullPath = `/listings/${year}/${month}`;
		router.push(fullPath);
	}

	return (
		<>
			<PropertiesSearch onSearch={findEventsHandler} />
			<PropertyList properties={listings} />
		</>
	);
}
