import { useRouter } from "next/router";
import Link from "next/link";

function ClientProjectPage() {
	const router = useRouter();
	console.log(router.query);

	const clients = [
		{
			id: 1,
			name: "Bernelle Keely",
		},
		{
			id: 2,
			name: "Margo Tonry",
		},
		{
			id: 3,
			name: "Kessia Wiltshier",
		},
		{
			id: 4,
			name: "Yasmin Offa",
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
