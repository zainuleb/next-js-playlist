import Link from "next/link";

function ClientPage() {
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
			<h1>Clients Page</h1>
			<ul>
				{clients.map((client) => (
					<li key={client.id}>
						<Link href={`/clients/${client.id}`}>{client.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ClientPage;
