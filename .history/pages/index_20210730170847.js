import { getPrivateListings, getPublicListings } from "../helper/api-utils.js";

import PropertyList from "../components/listings/property-list";

const HomePage = async (props) => {
	return (
		<>
			<h1>R-Estate Web App</h1>
			<div>
				<h1>Private Properties</h1>
				<PropertyList properties={props.pvtListings} />
			</div>
			<div>
				<h1>Public Properties</h1>
				<PropertyList properties={props.pubListings} />
			</div>
		</>
	);
};
export default HomePage;

export const getStaticProps = async () => {
	const privateListings = await getPrivateListings();
	const publicListings = await getPublicListings();

	return {
		props: {
			pvtListings: privateListings,
			pubListings: publicListings,
		},
		revalidate: 1800,
	};
};
