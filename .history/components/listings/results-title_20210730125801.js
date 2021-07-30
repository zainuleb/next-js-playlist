import Button from "../ui/button";
import classes from "./results-title.module.css";

function ResultsTitle(props) {
	const { date } = props;

	const humanReadableDate = new Date(date.year, date.month).toLocaleDateString(
		"en-US",
		{
			month: "long",
			year: "numeric",
		}
	);

	return (
		<section className={classes.title}>
			<h1>Properties listed in {humanReadableDate}</h1>
			<Button link="/listings">Show all Properties</Button>
		</section>
	);
}

export default ResultsTitle;
