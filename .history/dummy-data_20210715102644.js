const DUMMY_LISTINGS = [
	{
		id: "e1",
		title: "House",
		description:
			"Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
		location: "Somestreet 25, 12345 San Somewhereo",
		date: "2021-05-12",
		image: "images/coding-event.jfif",
		forRent: true,
	},
	{
		id: "e2",
		title: "Banglow",
		description:
			"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
		location: "New Wall Street 5, 98765 New Work",
		date: "2021-05-30",
		image: "images/introvert-event.jpeg",
		forRent: true,
	},
	{
		id: "e3",
		title: "Apartment",
		description:
			"You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
		location: "My Street 12, 10115 Broke City",
		date: "2020-04-10",
		image: "images/extrovert-event.jfif",
		forRent: true,
	},
];

export function getRentListings() {
	return DUMMY_LISTINGS.filter((event) => event.forRent);
}

export function getAllListings() {
	return DUMMY_LISTINGS;
}

export function getFilteredListings(dateFilter) {
	const { year, month } = dateFilter;

	let filteredLISTINGS = DUMMY_LISTINGS.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredLISTINGS;
}

export function getListingById(id) {
	return DUMMY_LISTINGS.find((event) => event.id === id);
}
