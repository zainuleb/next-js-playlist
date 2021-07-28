import { useState, useEffect } from "react";
import useSWR from "swr";

const Leads = () => {
	const [leads, setLeads] = useState();
	/*	const [isLoading, setIsLoading] = useState(false);
	 */
	const { data, error } = useSWR(
		"https://restate-c63c7-default-rtdb.asia-southeast1.firebasedatabase.app/leads.json"
	);

	if (error) {
		return <p>Failed to Load</p>;
	}

	useEffect(() => {
		if (data) {
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

			setLeads(transformedLeads);
		}
	}, [data]);

	/* 	useEffect(() => {
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
				setLeads(transformedLeads);
				setIsLoading(false);
			});
	}, []);
 */
	if (error) {
		return <p>Failed to Load Data</p>;
	}

	if (!data || !leads) {
		return <p>No Data Yet!</p>;
	}

	if (!leads) {
		return <p>Loading...</p>;
	}

	return (
		<ul>
			{leads.map((lead) => (
				<li key={lead.id}>
					Name: {lead.username}
					<br />
					Property Id: {lead.pid}
					<br />
					Status: {lead.status}
					<br />
					Notes: {lead.note}
					<br />
				</li>
			))}
		</ul>
	);
};

export default Leads;
