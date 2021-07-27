import { useState, useEffect } from "react";

const Leads = (props) => {
	const [leads, setLeads] = useState();
	const [isLoading, setisLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			"https://restate-c63c7-default-rtdb.asia-southeast1.firebasedatabase.app/leads.json"
		)
			.then((response) => response.json())
			.then((data) => {
				const transformedLeads = [];

				for (const key in data) {
					transformedLeads.push({
						id: key,
						username: data[key].username,
						pid: data[key].pid,
						status: data[key].status,
						note: data[key].note,
					});
				}
				setLeads();
				setIsLoading(false);
			});
	}, []);

	return <ul></ul>;
};

export default Leads;
