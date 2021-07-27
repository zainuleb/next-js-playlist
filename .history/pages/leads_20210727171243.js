import { useEffect } from "react";

const Leads = (props) => {
	useEffect(() => {
		fetch(
			"https://restate-c63c7-default-rtdb.asia-southeast1.firebasedatabase.app/leads"
		);
	}, []);

	return <ul></ul>;
};

export default Leads;
