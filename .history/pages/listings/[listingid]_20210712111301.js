import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import PropertySummary from "../../components/property-details/property-summary";

export default function ListingDetail() {
	const router = useRouter();

	let { listingid } = router.query;

	if (!listingid) {
		return <p>No Property Id</p>;
	}

	const property = getEventById(listingid);

	if (!property) {
		return <p>No Property</p>;
	}

	return (
		<div>
			<h1>Property Details Here</h1>
		</div>
	);
}
