import Link from "next/link";
import classes from "./main-header.module.css";

export default function MainHeader() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link href="/">Next Propertys</Link>
				<nav className={classes.navigation}>
					<ul>
						<li href="/listings">Browse Properties</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
