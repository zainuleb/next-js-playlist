import { getPrivateListings } from "../helper/api-utils.js";
import PropertyList from "../components/listings/property-list";

const HomePage = (props) => {
	return (
		<>
			<h1>R-Estate Web App</h1>
			<div>
				<PropertyList properties={props.pvtListings} />
			</div>
		</>
	);
};
export default HomePage;

export const getStaticProps = async () => {
	const privateListings = await getPrivateListings();
	/* 	const publicListings = await getPublicListings();
	 */
	return {
		props: {
			pvtListings: privateListings,
		},
	};
};
