export const getAllListings = async () => {
	const response = await fetch(
		"https://restate-c63c7-default-rtdb.asia-southeast1.firebasedatabase.app/listings.json"
	);
	const data = await response.json();

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
	return privateListings.filter((listing) => listing.status == "private");
};

export const getPublicListings = async () => {
	const publicListings = await getAllListings();
	return publicListings.filter((listing) => listing.status == "public");
};

export const getListingById = async (id) => {
	const listings = await getAllListings();
	return listings.find((listing) => listing.id == id.listingid);
};

export const getFilteredListings = async (dateFilter) => {
	const { year, month } = dateFilter;

	const allListings = await getAllListings();

	let filteredLISTINGS = DUMMY_LISTINGS.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredLISTINGS;
};
