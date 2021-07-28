export const getPrivateListings = async () => {
	await fetch(
		"https://restate-c63c7-default-rtdb.asia-southeast1.firebasedatabase.app/"
	);
};

export const getPrivateListings = async () => {
	return DUMMY_LISTINGS.filter((listing) => listing.status == "private");
};

export const getPublicListings = () => {
	return DUMMY_LISTINGS.filter((listing) => listing.status == "public");
};
