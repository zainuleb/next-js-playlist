import React from "react";
import { useRouter } from "next/router";
import { getPublicListings } from "../../helper/api-utils";
import PropertyList from "../../components/listings/property-list";
import PropertiesSearch from "../../components/listings/properties-search";

export default function AllListings(props) {
	const router = useRouter();

	const { listings } = props;

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

export async function getStaticProps() {
	const listings = await getPublicListings();

	return {
		props: {
			listings,
		},
		revalidate: 60,
	};
}
