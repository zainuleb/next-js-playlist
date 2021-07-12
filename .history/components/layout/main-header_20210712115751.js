import Link from "next/link";

export default function MainHeader() {
	return (
		<header>
			<div>
				<Link href="/">Next Propertys</Link>
				<nav>
					<ul>
						<li href="/listings"></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
