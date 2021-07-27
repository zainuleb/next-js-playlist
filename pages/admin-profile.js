import React from "react";

const AdminProfile = (props) => {
	return <h1>{props.username}</h1>;
};

export default AdminProfile;

export const getServerSideProps = async (context) => {
	const { params, req, res } = context;
	console.log("server side code");
	return {
		props: {
			username: "Maz",
		},
	};
};
