import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import PropertySummary from "../../components/property-details/property-summary";
import PropertyLogistics from "../../components/property-details/property-logistics";
import PropertyContent from "../../components/property-details/property-content";

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
		<>
			<PropertySummary title={property.title} />
			<PropertyLogistics
				date={property.date}
				address={property.location}
				image={property.image}
				imageAlt={property.title}
			/>
			<PropertyContent>
				<p>{property.description}</p>
			</PropertyContent>
		</>
	);
}
