import { useRef } from "react";

import Button from "../ui/button";
import classes from "./properties-search.module.css";

export default function PropertiesSearch(props) {
	const yearInputRef = useRef();
	const monthInputRef = useRef();

	function submitHandler(e) {
		e.preventDefault();

		const selectedYear = yearInputRef.current;
		const selectedMonth = MonthInputRef.current;
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor="year">Year</label>
					<select id="year" ref={yearInputRef}>
						<option>2020</option>
						<option>2021</option>
					</select>
				</div>
				<div className={classes.control}>
					<label htmlFor="month">Month</label>
					<select id="month" ref={monthInputRef}>
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
