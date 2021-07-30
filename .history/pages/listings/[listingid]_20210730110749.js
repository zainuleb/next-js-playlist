import { getAllListings, getListingById } from "../../helper/api-utils.js";
import PropertySummary from "../../components/property-details/property-summary";
import PropertyLogistics from "../../components/property-details/property-logistics";
import PropertyContent from "../../components/property-details/property-content";

const ListingDetail = (props) => {
	const property = props.selectedListing;
	/* 
	if (!listingid) {
		return <p>No Property Id</p>;
	}

	const property = getListingById(listingid);*/

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
	console.log("This is Listing ID", listingId);
	const listing = getListingById(listingId);
	console.log("This is listing", listingId);
	return {
		props: {
			selectedListing: listing,
		},
	};
}

export async function getStaticPaths() {
	const listings = await getAllListings();

	const path = listings.map((listing) => ({
		params: { listingid: listing.id },
	}));

	console.log("Paths:", path);

	return {
		paths: path,
		fallback: "blocking",
	};
}

export default ListingDetail;
