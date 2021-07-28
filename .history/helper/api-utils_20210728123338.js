export const getPrivateListings = async () => {
	const response = await fetch(
		"https://restate-c63c7-default-rtdb.asia-southeast1.firebasedatabase.app/"
	);

	const data = response.json();
};

export const getPrivateListings = async () => {
	return DUMMY_LISTINGS.filter((listing) => listing.status == "private");
};

export const getPublicListings = () => {
	return DUMMY_LISTINGS.filter((listing) => listing.status == "public");
};
