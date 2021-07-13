import { useRouter } from "next/router";

import { getFilteredListings } from "../../dummy-data";
import PropertyList from "../../components/listings/property-list";
import ResultsTitle from "../../components/listings/results-title";
import Button from "../../components/ui/button";

export default function FilteredListings() {
	const router = useRouter();

	const filterData = router.query.slug;

	if (!filterData) {
		return <p className="center">Loading...</p>;
	}

	const filteredYear = filterData[0];
	const filteredMonth = filterData[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (isNaN(numYear) || isNaN(numMonth)) {
		return (
			<>
				<p>Invalid Filter Bitch</p>
				<div className="center">
					<Button link="listings">Show All Properties</Button>
				</div>
			</>
		);
	}

	const filteredProperties = getFilteredListings({
		year: numYear,
		month: numMonth,
	});
	console.log(filteredProperties);

	if (!filteredProperties || filteredProperties.length === 0) {
		return (
			<>
				<p>No Properties Found for the selected filter</p>
				<div className="center">
					<Button link="listings">Show All Properties</Button>
				</div>
			</>
		);
	}

	const date = new Date(numYear, numMonth - 1);

	return (
		<>
			<ResultsTitle />
			<PropertyList properties={filteredProperties} />
		</>
	);
}
