import Property from "./property";
import classes from "./property-list.module.css";

export default function PropertyList(props) {
	const { properties } = props;

	return (
		<ul className={classes.list}>
			{properties.map((property) => (
				<Property
					id={property.id}
					title={property.title}
					image={property.image}
					date={property.date}
					location={property.location}
				/>
			))}
		</ul>
	);
}
