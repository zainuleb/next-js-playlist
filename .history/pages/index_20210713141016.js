import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<div>
				<h1>R-Estate Web App</h1>
			</div>
			<div>
				<Link href="/about">About Page</Link>
			</div>
		</>
	);
}
