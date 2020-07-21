import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "30%",
    top: 10,
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
    <Card className={classes.root} variant="body2">
      <CardContent>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Order Summary
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Total Items : {items}
        </Typography>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Total Amount : ${amount}
        </Typography>
        <Link className="hvr-grow about-button" to="/about">
          Proceed to Checkout
        </Link>
      </CardContent>
    </Card>
  );
}
