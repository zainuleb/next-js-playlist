import { useState,useEffect } from "react";

const Leads = (props) => {

    const [leads, setLeads] = useState()
    const [isLoading, setisLoading] = useState(false)

	useEffect(() => {
		fetch(
			"https://restate-c63c7-default-rtdb.asia-southeast1.firebasedatabase.app/leads.json"
		).then((response)=>response.json()).then(data=>);
	}, []);

	return <ul></ul>;
};

export default Leads;
