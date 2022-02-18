
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    display: "flex",
    justifyContent:"center",
  }
});

const OrederInfo = (): JSX.Element => {
  const classes = useStyles();
	return (
		<Card sx={{ minWidth: 275, backgroundColor: "#41a52d" }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Word of the Day
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					adjective
				</Typography>
				<Typography variant="body2">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
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
	);
}
export default OrederInfo;