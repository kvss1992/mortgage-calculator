import React, {useState} from 'react';

//  Material UI Export
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const prepaymentFrequencyDropDownMenuOptions = {
    '1': 'One Time',
    'Y': 'Each year',
    'SameAsRegPay': 'Same as regular payment'
}

export default function MortgageCalculatorPrePaymentInputs(){
  const classes = useStyles();

  //  states
  const[prepaymentAmount, setPrepaymentAmount] = useState("0.00");
  const[prepaymentFrequency, setPrepaymentFrequency] = useState("1");

  return(
    <React.Fragment>
      <div className="mortgage-calculator-header" style={{fontSize: 20, marginBottom: '5%'}}>
        <b>Prepayment Plan</b>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          key="Prepayment Amount"
          id="standard-number"
          label="Prepayment Amount:"
          defaultValue={parseInt(prepaymentAmount.replace(".", ""))}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={e=> setPrepaymentAmount(e.target.value)}
        />
        <br />

        <InputLabel shrink id="demo-simple-select-placeholder-label-label" >
            Prepayment Frequency:
        </InputLabel>
        <Select
          key="prepaymentFrequency"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={prepaymentFrequency}
          onChange={e=> setPrepaymentFrequency(e.target.value)}
        >
          {
            Object.entries(prepaymentFrequencyDropDownMenuOptions).map(([key, value]) => {
              return (
                <MenuItem value={key}>{value}</MenuItem>
              )
            })
          }
        </Select>
        <br />

        <TextField
          id="standard-number"
          label="Start With Payment:"
          defaultValue="1"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />
        
      </form>
    </React.Fragment>
  );
}