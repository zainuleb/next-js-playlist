import Link from "next/link";
import classes from "./main-header.module.css";

export default function MainHeader() {
	return (
		<header>
			<div>
				<Link href="/">Next Propertys</Link>
				<nav>
					<ul>
						<li href="/listings">Browse Properties</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
