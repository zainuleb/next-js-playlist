import React from "react";

const AdminProfile = (props) => {
	return (
		<h1>
			{props.username}
			{props.surname}
		</h1>
	);
};

export default AdminProfile;

export const getServerSideProps = async (context) => {
	return {
		props: {
			username: "Maz",
			surname: " har",
		},
	};
};
