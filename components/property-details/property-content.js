import classes from "./property-content.module.css";

export default function PropertyContent(props) {
	return <section className={classes.content}>{props.children}</section>;
}
