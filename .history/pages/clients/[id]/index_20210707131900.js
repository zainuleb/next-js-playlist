import { useRouter } from "next/router";
function ClientProjectPage() {
	const router = useRouter();

	console.log(router.query);
	return (
		<div>
			<h1>Project of a Client</h1>
			<ol>
				<li>
					<Link href="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link href="/clients">Clients</Link>
				</li>
			</ol>
		</div>
	);
}

export default ClientProjectPage;
