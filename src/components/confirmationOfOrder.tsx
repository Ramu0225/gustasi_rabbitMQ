import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useEffect } from "react";
import * as API from "../socket-api";

const useStyles = makeStyles({
	ordSec: {
		margin: "120px auto",
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "space-around",
	},
	btn: {
		display: "flex",
		justifyContent: "center",
	},
	card: {
		width: "30%",
		height: "150px",
		marginBottom: "30px",
	},
});
interface Orderitem {
	chefid: number;
	orderstatus: string;
	orderid: number;
	orderitems: Array<string>;
}

const OrederInfo = (): JSX.Element => {
	const [orderInfo, setOrderInfo] = useState<Array<Orderitem>>([]);

	useEffect(() => {
		const fetchOrder = async () => {
			try {
				const response = await fetch("http://localhost:5555/api/v1/order", {
					method: "GET",
				});
				const data = await response.json();
				//console.log("fetch", data);
				setOrderInfo(data);
			} catch (err) {
				console.log("error", err);
			}
		};
		fetchOrder();
		API.subscribe((result: Array<Orderitem>) => {
			//console.log("client", result);
			//console.log("clientorderinfo", orderInfo);
			setOrderInfo([...orderInfo, ...result]);
		});
	}, []);
	console.log("dataindb", orderInfo);
	const classes = useStyles();
	return (
		<section className={classes.ordSec}>
			{!!orderInfo.length &&
				orderInfo &&
				orderInfo?.map((item: any, idx) => (
					<Card
						className={classes.card}
						key={idx}
						sx={{ minWidth: 275, backgroundColor: "#41a52d" }}
					>
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								gutterBottom
							>
								Chef-ID:{item.chefid}
								order-ID:{item.orderid}
							</Typography>

							<Typography sx={{ mb: 1.5 }} color="text.secondary">
								{item.orderstatus}
							</Typography>
						</CardContent>
						<CardActions className={classes.btn}>
							<Button size="small" variant="contained">
								Approve
							</Button>
							<Button size="small" variant="contained">
								Completed
							</Button>
						</CardActions>
					</Card>
				))}
		</section>
	);
};
export default OrederInfo;
