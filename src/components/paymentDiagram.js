import React from 'react';

//  Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//  Components Imports
import PaymentHistoryDiagram from './paymentHistoryDiagram';
import InterestPaymentDiagram from './interestPaymentDiagram';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2)
  },
}));

export default function PaymentDiagram() {
  const classes = useStyles();
  return(
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <PaymentHistoryDiagram />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <InterestPaymentDiagram />
        </Paper>
      </Grid>
    </Grid>
  );
}