import { useRouter } from "next/router";

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
		isNan(numYear) ||
		isNan(numMonth) ||
		numYear > 2021 ||
		numMonth < 1 ||
		numMonth > 12
	)
		return (
			<div>
				<h1>Filtered Properties</h1>
			</div>
		);
}
