import React from 'react';

//  Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

//  Redux Imports
import {useSelector, useDispatch } from 'react-redux';

//  Action Imports
import { 
  setMortgageAmount,
  setMortageAmortizationInYears,
  setInterestRate,
  setPaymentFrequency,
  setTerms
} from '../actions/mortgageCalculatorPaymentInputSlice';

//  Utils Import
import {
  termsDropDownMenuOptions,
  paymentFrequencyDropDownMenuOptions,
  mortgageAmortizationInMonthsDropDownMenuOptions,
  mortgageAmortizationInYearsDropDownMenuOptions
} from "../utils/paymentInputUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '27ch',
    },
  },
}));

export default function MortgageCalculatorPaymentInputs(){
  const classes = useStyles();
  const {
    mortgageAmount,
    mortageAmortizationInYears,
    interestRate,
    paymentFrequency,
    terms
  } = useSelector(state => state.paymentInput);

  //  Dispatcher
  const dispatch = useDispatch();
  return(
    <React.Fragment> 
      <div className="mortgage-calculator-header" style={{fontSize: 20, marginBottom: '5%'}}>
        <b>Payment Plan</b>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-number"
          label="Mortgage Amount"
          defaultValue={mortgageAmount && parseInt(mortgageAmount.replace(',', ''))}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={e => dispatch(setMortgageAmount(e.target.value))}
        />
        <br />

        <InputLabel 
          shrink 
          id="demo-simple-select-placeholder-label-label"
        >
          Amortization Period:
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mortageAmortizationInYears}
          onChange={e => dispatch(setMortageAmortizationInYears(e.target.value))}
          defaultValue=""
        >
          {
            Object.entries(mortgageAmortizationInYearsDropDownMenuOptions).map(([key, value]) => {
              return (
                <MenuItem value={key}>{value}</MenuItem>
              )
            })
          }
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue=""
        >
          {
            Object.entries(mortgageAmortizationInMonthsDropDownMenuOptions).map(([key, value]) => {
              return (
                <MenuItem value={key}>{value}</MenuItem>
              )
            })
          }
        </Select>
        <br />
        <TextField
          id="standard-number"
          label="Interest Rate"
          defaultValue={(Math.round(interestRate * 100) /100).toFixed(2)}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={e=> dispatch(setInterestRate(e.target.value))}
        />
        <br />
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Payment Frequency
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={paymentFrequency}
          onChange={e=> dispatch(setPaymentFrequency(e.target.value))}
          defaultValue=""
        >
          {
            Object.entries(paymentFrequencyDropDownMenuOptions).map(([key, value]) => {
              return (
                <MenuItem value={key}>{value}</MenuItem>
              )
            })
          }
        </Select>
        <br />
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Terms 
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Terms"
          id="demo-simple-select"
          value={terms}
          onChange={e=> dispatch(setTerms(e.target.value))}
          defaultValue=""
        >
          {
            Object.entries(termsDropDownMenuOptions).map(([key, value]) => {
              return (
                <MenuItem value={key}>{value}</MenuItem>
              )
            })
          }
        </Select>
        <br />
      </form>
    </React.Fragment>
  );
}