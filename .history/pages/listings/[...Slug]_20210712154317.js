import { useRouter } from "next/router";

export default function FilteredListings() {
	const router = useRouter();

	let { filterData } = router.query;

	console.log({ filterData });

	return (
		<div>
			<h1>Filtered Properties</h1>
		</div>
	);
}
