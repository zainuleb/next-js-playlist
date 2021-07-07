import Link from "next/link";

function HomePage() {
	return (
		<div>
			<h1>Home</h1>
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

export default HomePage;
