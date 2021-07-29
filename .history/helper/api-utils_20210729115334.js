export const getAllListings = async () => {
	const response = await fetch(
		"https://restate-c63c7-default-rtdb.asia-southeast1.firebasedatabase.app/"
	);
	const data = response.json();

	const listings = [];
	for (const key in data) {
		listings.push({
			id: key,
			...data[key],
		});
	}
	return listings;
};

export const getPrivateListings = async () => {
	const privateListings = await getAllListings();
	return privateListings.filter((listing) => {
		listing.status == "private";
	});
};

export const getPublicListings = async () => {
	const publicListings = await getAllListings();
	return publicListings.filter((listing) => {
		listing.status == "public";
	});
};
