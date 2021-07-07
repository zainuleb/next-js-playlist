import { useRouter } from "next/router";

function ClientProjectPage() {
	const router = useRouter();
	console.log(router.query);

	function loadProjectHandler() {
		router.push("/clients/Drake/projectA");
	}

	return (
		<div>
			<h1>Project of a Client</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
		</div>
	);
}

export default ClientProjectPage;
