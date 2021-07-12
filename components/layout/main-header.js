import Link from "next/link";
import classes from "./main-header.module.css";

export default function MainHeader() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link href="/">R-Estate</Link>
			</div>
			<nav className={classes.navigation}>
				<ul>
					<li>
						<Link href="/listings">Browse All Properties</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
