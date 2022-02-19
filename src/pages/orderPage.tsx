import { makeStyles } from "@mui/styles";
import ItemsTable from "../components/itemsToOrder";
import * as React from "react";
import DisplayStatus from "../components/displayStatus";
const useStyles = makeStyles({
	orderCard: {
		width: "30%",
		backgroundColor: "#696b8a",
	},
	display: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "center",
	},
	displayStatus: {
		
    display: "flex",
    alignContent: "center",
    justifyContent:"center"
	},
	columnItem: {
    width: "80%",
    height:"650px",
		display: "flex",
		flexDirection: "column",
		alignContent: "center",
		justifyContent: "space-around",
  },
  
});
const  OrderPage =():JSX.Element => {
  const classes = useStyles();
  return (
		<div className={classes.columnItem}>
			<div className={classes.displayStatus}>
				<DisplayStatus />
			</div>
			<div className={classes.display}>
				<div>
					<ItemsTable />
				</div>
			</div>
		</div>
	);
  
}
export default OrderPage;