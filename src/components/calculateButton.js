import React from 'react';
//  Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//  Redux Import
import { useDispatch } from 'react-redux';

//  Actions Import
import { mortgageCalculation } from '../actions/mortgageCalculatorPaymentInputSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CalculateButton(){
  const classes = useStyles();

  //  Dispatcher
  const dispatch = useDispatch();
  return(
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={() => dispatch(mortgageCalculation())}>
        Calculate...
      </Button>
    </div>
  );

}