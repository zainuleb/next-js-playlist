const AdminId = () => {
	return <div></div>;
};
export default AdminId;

export const getServerSideProps = async (context) => {
	const { params } = context;

	const adminId = params.aid;

	return {};
};
