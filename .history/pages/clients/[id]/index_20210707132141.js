import { useRouter } from "next/router";
function ClientProjectPage() {
	const router = useRouter();
	console.log(router.query);

	const clients = [
		{
			id: 1,
			name: "Ifeoma",
		},
		{
			id: 2,
			name: "Uriel",
		},
		{
			id: 3,
			name: "Tatiana",
		},
		{
			id: 4,
			name: "Lesley",
		},
		{
			id: 5,
			name: "Abbot",
		},
		{
			id: 6,
			name: "Miriam",
		},
		{
			id: 7,
			name: "Ashton",
		},
		{
			id: 8,
			name: "Joel",
		},
		{
			id: 9,
			name: "Xaviera",
		},
		{
			id: 10,
			name: "Arden",
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
