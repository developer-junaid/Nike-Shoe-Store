import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: "#e0e0e0",
    width: "30%",
    marginBottom: 30,
    margin: "0 auto",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SummaryCard({ items, amount }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="elevation" elevation={8}>
      <CardContent>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Order Summary
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Total Items : <strong className="summary-text">{items}</strong>
        </Typography>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Total Amount : <strong className="summary-text">${amount}</strong>
        </Typography>
        {amount > 0 && (
          <Link className="hvr-grow about-button" to="/checkout">
            Proceed to Checkout
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
