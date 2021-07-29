import { getPrivateListings, getPublicListings } from "../helper/api-utils.js";

const HomePage = () => {
	return (
		<>
			<h1>R-Estate Web App</h1>
		</>
	);
};
export default HomePage;

export const getStaticProps = async () => {
	const privateListings = await getPrivateListings();
	const publicListings = await getPublicListings();

	return {
		props: {},
	};
};
