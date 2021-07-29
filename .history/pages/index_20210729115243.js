import { getPrivateListings, getPublicListingsn } from "../helper/api-utils.js";
import PropertyList from "../components/listings/property-list";

const HomePage = (props) => {
	return (
		<>
			<h1>R-Estate Web App</h1>
			<div>console.log(props)</div>
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
		},
	};
};
