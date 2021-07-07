import Link from "next/link";

function HomePage() {
	return (
		<div>
			<h1>Home</h1>
			<ol>
				<li>
					<Link href="/clients/zain">Zain</Link>
				</li>
				<li>
					<Link href="/clients/eb">Ebad</Link>
				</li>
			</ol>
		</div>
	);
}

export default HomePage;
