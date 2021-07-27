const AdminId = (props) => {
	return <div></div>;
};
export default AdminId;

export const getServerSideProps = async (context) => {
	const { params } = context;

	const adminId = params.aid;

	return {
		props: {
			id: "adminid-" + adminid,
		},
	};
};
