import firebase from "firebase/app";
import "firebase/firestore";

const WriteToCloudFirestore = () => {
	const sendData = () => {
		try {
			firebase.firestore().collection("users").doc("ad-16101").set({
				username: "Burhan",
				email: "burhan@gmail.com",
				password: "abdcd1234",
				phoneNum: "+923104333301",
				role: "ADMIN",
			});
		} catch (err) {
			console.log(err);
		}
	};

	return <></>;
};

export default WriteToCloudFirestore;
