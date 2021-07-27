const AdminId = (props) => {
	return <h1>{props.id}</h1>;
};
export default AdminId;

export const getServerSideProps = async (context) => {
	const { params } = context;

	const adminId = params.aid;

	return {
		props: {
			id: "adminid-" + adminId,
		},
	};
};
