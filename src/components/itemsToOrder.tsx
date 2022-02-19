import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles({
	itemTable: {
		backgroundColor: "rgb(214, 90, 32)",
		color: "rgb(87, 71, 53)",
	},
});

function createData(
	idx: number,
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number
) {
	return { idx, name, calories, fat, carbs, protein };
}

const rows = [
	createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData(3, "Eclair", 262, 16.0, 24, 6.0),
	createData(4, "Cupcake", 305, 3.7, 67, 4.3),
	createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ItemsTable() {
	const [foodItems, setFoodItems] = useState<Array<string>>(["ice"]);
	const classes = useStyles();

	const addToEat = (item: string) => {
		setFoodItems([...foodItems, item]);
	};

	useEffect(() => {
		let i = 0;
		const id = setInterval(() => {
			i = i + 1;
			orderFood();
			if (i === 50) {
				clearInterval(id);
			}
		}, 1);
	}, []);

	const orderFood = () => {
		const data = {
			orderitems: foodItems,
			chefid: 131,
			orderstatus: "oredered",
		};
		try {
			fetch("http://localhost:5555/api/v1/registerOrder", {
				method: "POST",
				body: JSON.stringify(data),
				headers: { "Content-Type": "application/json" },
			});
		} catch (err) {
			console.log("error", err);
		}
	};

	return (
		<div className={classes.itemTable}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 750 }} aria-label="simple table">
					<TableHead className={classes.itemTable}>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
							<TableCell align="right">Calories</TableCell>
							<TableCell align="right">Fat&nbsp;(g)</TableCell>
							<TableCell align="right">Carbs&nbsp;(g)</TableCell>
							<TableCell align="right">Protein&nbsp;(g)</TableCell>
							<TableCell align="right">Order</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className={classes.itemTable}>
						{rows.map((row) => (
							<TableRow
								key={row.idx}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.calories}</TableCell>
								<TableCell align="right">{row.fat}</TableCell>
								<TableCell align="right">{row.carbs}</TableCell>
								<TableCell align="right">{row.protein}</TableCell>
								<TableCell>
									<Button
										variant="contained"
										onClick={() => addToEat(row.name)}
									>
										AddToEat
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<Button variant="contained" onClick={() => orderFood()}>
					Order-Food
				</Button>
			</TableContainer>
		</div>
	);
}
