import firebase from "firebase/app";
import "firebase/firestore";
import initFirebase from "../../firebase/initFirebase";
initFirebase();

const WriteToCloudFirestore = () => {
	const sendData = async () => {
		try {
			await firebase
				.firestore()
				.collection("users")
				.doc("ad-16101")
				.set({
					username: "Burhan",
					email: "burhan@gmail.com",
					password: "abdcd1234",
					phoneNum: "+923104333301",
					role: "ADMIN",
					listingsId: ["e1", "e2"],
					logId: ["l1", "l2"],
					leadId: ["L1", "L2"],
				})
				.then(alert("User Added"));
		} catch (err) {
			console.log(err);
			alert(err);
		}
	};

	return (
		<>
			<button onClick={sendData}>Add Agent</button>
		</>
	);
};

export default WriteToCloudFirestore;
