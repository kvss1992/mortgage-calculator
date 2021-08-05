import React from 'react';

//  Material UI Imports 
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//  Redux Import
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHeaderCell:{
    fontWeight: 'bold'
  }
});

function createData(name, terms, amortizationPeriod) {
  return { name, terms, amortizationPeriod };
}

export default function CalculationTable() {
  const classes = useStyles();

  const {tableTermsData, amortizationPeriod} = useSelector(state => state.paymentInput);

  const rows = [
    createData('Number of Payments', `${tableTermsData?.numberofPayments}`, `${amortizationPeriod?.numberofPayments}`),
    createData('Mortgage Payment', `$${tableTermsData?.mortgagePayments}`, `$${amortizationPeriod?.mortgagePayments}`),
    createData('Prepayment', `$${tableTermsData?.prePayments}`, `$${amortizationPeriod?.prePayments}`),
    createData('Principal Payments', `$${tableTermsData?.principalPayments}`, `$${amortizationPeriod?.principalPayments}`),
    createData('Interest Payments', `$${tableTermsData?.interestPayments}`, `$${amortizationPeriod?.interestPayments}`),
    createData('Total Cost', `$${tableTermsData?.totalCost}`, `$${amortizationPeriod?.totalCost}`),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Category</TableCell>
            <TableCell align="center" className={classes.tableHeaderCell}>Terms</TableCell>
            <TableCell align="center" className={classes.tableHeaderCell}>Amortization Period</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.terms}</TableCell>
              <TableCell align="center">{row.amortizationPeriod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
