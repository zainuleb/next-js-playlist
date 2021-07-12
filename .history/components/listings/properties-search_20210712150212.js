import Button from "../ui/button";
import classes from "./properties-search.module.css";

export default function PropertiesSearch(props) {
	return (
			<div className={classes.controls}>
			<form className={classes.form onSubmit=} >
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor="year">Year</label>
					<select id="year">
						<option>2020</option>
						<option>2021</option>
					</select>
				</div>
				<div className={classes.control}>
					<label htmlFor="month">Month</label>
					<select id="month">
						<option value="1">January</option>
						<option value="2">February</option>
						<option value="3">March</option>
						<option value="4">April</option>
						<option value="5">May</option>
						<option value="6">June</option>
						<option value="7">July</option>
						<option value="8">August</option>
						<option value="9">Septemer</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
				</div>
			</div>

			<Button>Find Properties</Button>
		</form>
	);
}
