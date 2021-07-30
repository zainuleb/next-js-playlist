import WriteToCloudFirestore from "../../components/cloudFirestore/Read";

const Admin = () => {
	return (
		<div className={styles.contaienr}>
			<WriteToCloudFirestore />
		</div>
	);
};

export default Admin;
