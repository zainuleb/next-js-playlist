import React from "react";

const AdminProfile = (props) => {
	return <h1>{props.username}</h1>;
};

export default AdminProfile;

export const getServerSideProps = async (context) => {
	const { params } = context;
	return {
		props: {
			username: "Maz",
		},
	};
};
