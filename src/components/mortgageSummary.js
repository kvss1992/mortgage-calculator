import React from 'react';

//  Redux Imports
import { useSelector } from 'react-redux';

//  Material UI Imports
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root:{
    fontWeight:800,
    fontSize:20
  }
}));

export default function MortgageSummary() {
  const classes = useStyles();
  const {tableTermsData, amortizationPeriod} = useSelector(state => state.paymentInput);
  return(
    <React.Fragment>
      <div className={classes.root}>
        Mortgage Summary
      </div>
      <div>
        <p>Over the 25-year amortization period, you will:</p>
        <ul>
          <li>have made <b>{amortizationPeriod?.numberofPayments}</b> monthly (12x per year) payments of <b>${amortizationPeriod?.mortgagePayments}</b></li>
          <li>have paid <b>${amortizationPeriod?.principalPayments}</b> in principal, <b>${amortizationPeriod?.interestPayments}</b> in interest, 
          for a total of <b>${amortizationPeriod?.totalCost}</b>.</li>
        </ul>
      </div>
      <div>
        <p>Over the 5-year term, you will:</p>
        <ul>
          <li>have made <b>{tableTermsData?.numberofPayments}</b> monthly (12x per year) payments of <b>${tableTermsData?.mortgagePayments}</b>.</li>
          <li>have paid <b>${tableTermsData?.principalPayments}</b> in principal, <b>${tableTermsData?.interestPayments}</b> in interest, for a total of 
           <b> ${tableTermsData?.totalCost}</b>.</li>
        </ul>
      </div>
      <div>
        <p>At the end of your 5-year term, you will:</p>
        <ul>
          <li>have a balance of <b>${tableTermsData?.totalBalance}</b>.</li>
        </ul>
      </div>
    </React.Fragment>   
  )
}