import React from 'react';

//  Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//  Components Imports
import MortgageCalculatorInputs from './mortgageCalculatorPaymentInputs';
import MortgageCalculatorPrepaymentInputs from './mortgageCalculatorPrepaymentInputs';
import CalculateButton from './calculateButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2)
  },
}));


export default function MortgageDetails(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <MortgageCalculatorInputs />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <MortgageCalculatorPrepaymentInputs />
          </Paper>
        </Grid>
        <CalculateButton />
      </Grid>
    </div>
  );
}