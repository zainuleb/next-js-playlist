export const getPublicListings = () => {
	return DUMMY_LISTINGS.filter((listing) => listing.status == "public");
};
