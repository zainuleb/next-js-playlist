import { useRouter } from "next/router";

function ClientProjectPage() {
	const router = useRouter();

	console.log(router.query);
	return (
		<div>
			<h1>Project of a Client</h1>
		</div>
	);
}

export default ClientProjectPage;
