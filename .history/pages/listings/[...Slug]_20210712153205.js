import { useRouter } from "next/router";

export default function FilteredListings() {
	const router = useRouter();

	const filterData = router.query.slug;
	return (
		<div>
			<h1>Filtered Properties</h1>
		</div>
	);
}
