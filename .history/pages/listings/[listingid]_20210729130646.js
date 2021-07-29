import { useRouter } from "next/router";
import { getListingById } from "../../helper/api-utils.js";
import PropertySummary from "../../components/property-details/property-summary";
import PropertyLogistics from "../../components/property-details/property-logistics";
import PropertyContent from "../../components/property-details/property-content";

const ListingDetail = () => {
	const router = useRouter();

	let { listingid } = router.query;

	if (!listingid) {
		return <p>No Property Id</p>;
	}

	const property = getListingById(listingid);

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
};

export const getStaticProps = async (context) => {
	const listingId = context.params.listingId;
};

export default ListingDetail;
