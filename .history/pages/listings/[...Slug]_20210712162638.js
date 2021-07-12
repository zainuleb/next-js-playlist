import { useRouter } from "next/router";
import { getFilteredListings } from "../../dummy-data";

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

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2021 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return <p>Invalid Filter Bitch</p>;
	}

	const filteredProperties = getFilteredListings({
		year: numYear,
		month: numMonth,
	});

	if (!filteredProperties || filteredProperties === 0) {
		return <p>No Properties Found for the given filter</p>;
	}

	return (
		<div>
			<h1>Filtered Properties</h1>
		</div>
	);
}
