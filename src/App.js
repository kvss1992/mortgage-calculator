import React from 'react';

//  Material UI Exports
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//  Components
import MortgageDetails from './components/mortgageDetails';
import CalculationTable from './components/calculationTable';
import MortgageSummary from './components/mortgageSummary';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  container: {
    marginTop: 1
  },
  calculationTable: {
    marginTop: '2%'
  },
  tableName: {
    textAlign: 'center',
    paddingBottom: '1%',
    fontSize: 20,
    fontWeight: 'bold'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div"/>
          <div className="header">
            Canadian Mortgage Calculator
          </div>
          <div className="sub-header">
            <p>This calculator determines your mortgage payment and provides you with a mortgage payment schedule.</p>
            <p>
              The calculator also shows how much money and how many years you can save by making prepayments.
              To help determine whether or not you qualify for a home mortgage based on income and expenses, 
              visit the&nbsp;
              <a href="https://itools-ioutils.fcac-acfc.gc.ca/MQ-HQ/MQ-EAPH-eng.aspx">Mortgage Qualifier Tool</a>
            </p>
            <p>
              <b>Note:</b> As of July 9, 2012, the maximum amortization period for mortgages with less than a 20 percent down payment is <b>25 years.</b>
            </p>
          </div>
          <MortgageDetails />
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.calculationTable}>
              <div className={classes.tableName}>Calculation Summary</div>
              <CalculationTable />
            </Grid>
            <Grid item xs={12}>
              <MortgageSummary />
            </Grid>
          </Grid>
      </Container>
    </div>
  );
}

export default App;
