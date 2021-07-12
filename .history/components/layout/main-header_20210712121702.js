import Link from "next/link";
import classes from "./main-header.module.css";

export default function MainHeader() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link href="/">Next Properties</Link>
			</div>
			<nav className={classes.navigation}>
				<ul>
					<li>
						<Link href="/listings">Browse All properties</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
