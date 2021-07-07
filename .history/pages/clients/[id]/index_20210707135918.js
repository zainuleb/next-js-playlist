import { useRouter } from "next/router";
import Link from "next/link";

function ClientProjectPage() {
	const router = useRouter();
	console.log(router.query);

	const clients = [
		{
			id: "Drake",
			name: "Chelsae",
		},
		{
			id: "Cary",
			name: "Dwight",
		},
		{
			id: "Gavrielle",
			name: "Cherice",
		},
		{
			id: "Chauncey",
			name: "Shandy",
		},
	];

	return (
		<div>
			<h1>Project of a Client</h1>
			<ol>
				<li>
					<Link href="/clients/ebad">Portfolio</Link>
				</li>
				<li>
					<Link href="/clients/ebad">Clients</Link>
				</li>
			</ol>
		</div>
	);
}

export default ClientProjectPage;
