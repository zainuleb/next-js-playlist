import { getPublicListings, getListingById } from "../../helper/api-utils.js";
import PropertySummary from "../../components/property-details/property-summary";
import PropertyLogistics from "../../components/property-details/property-logistics";
import PropertyContent from "../../components/property-details/property-content";

const ListingDetail = (props) => {
	const property = props.selectedListing;
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

export async function getStaticProps(context) {
	const listingId = context.params;
	const listing = await getListingById(listingId);
	return {
		props: {
			selectedListing: listing,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const listings = await getPublicListings();

	const paths = listings.map((listing) => ({
		params: { listingid: listing.id },
	}));

	return {
		paths,
		fallback: false,
	};
}

export default ListingDetail;
