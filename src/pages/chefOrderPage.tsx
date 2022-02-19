import { makeStyles } from "@mui/styles";
import OrederInfo from "../components/confirmationOfOrder";
import * as React from "react";

const useStyles = makeStyles({
	orderCard: {
		width: "30%",
		backgroundColor: "#696b8a",
	},
	display: {
		height: "100px",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
  displayStatus: {
    
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	columnItem: {
		width: "80%",
	
		display: "flex",
	
		alignItems: "center",
		justifyContent: "space-around",
	},
});
const ChefOrderPage = (): JSX.Element => {
  
	const classes = useStyles();
	return (
		<div className={classes.columnItem}>
			
				<OrederInfo />
		
		</div>
	);
};
export default ChefOrderPage;
