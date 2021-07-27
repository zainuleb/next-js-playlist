import React from "react";

export default const AdminProfile = (props) => {
	return <h1>{props.username}</h1>;
};



export const getServerSideProps = async (context) => {
	return {
		props: {
			username: "Maz",
		},
	};
};
