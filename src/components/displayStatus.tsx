import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
	{
		value: 0,
		label: "order",
	},
	{
		value: 25,
		label: "cooking",
	},
	{
		value: 50,
		label: "completed",
	},
	{
		value: 75,
		label: "on the way",
	},
	{
		value: 100,
		label: "Delivered",
	},
];

function valuetext(value: number) {
	return `${value}`;
}

export default function DisplayStatus() {
	return (
		<Box sx={{ width: 500 }}>
			<Slider
				aria-label="Always visible"
				defaultValue={0}
				getAriaValueText={valuetext}
				step={20}
				marks={marks}
				valueLabelDisplay="off"
		
			/>
		</Box>
	);
}
