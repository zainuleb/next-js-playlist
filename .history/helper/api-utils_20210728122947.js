export const getPrivateListings = () => {
	return DUMMY_LISTINGS.filter((listing) => listing.status == "private");
};

export const getPublicListings = () => {
	return DUMMY_LISTINGS.filter((listing) => listing.status == "public");
};
