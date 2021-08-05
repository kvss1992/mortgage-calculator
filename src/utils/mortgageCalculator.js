/* eslint-disable */
export default function calculateMortage(mortageAmount, mortageAmortizationInYears, interestRate, paymentFrequency, terms) {

  //  START - Initialize all the variables
  let periodsPerYear = 0;
  let adjustDateBy = 0;
  let adjustDateByStr = "";
  let totalNumberofPayments = 0;
  let interestRatePerPayment = 0;
  let monthlyInterestRate = 0;
  let mortgagePayment = 0;
  let totalCostofLoan = 0;
  let interestPaidforTerm = 0;
  let termsNumberOfPayments = 0;
  let termsTotalCostOfLoanPlusInterest = 0;
  let termsInterestPayment= 0;
  let termsTotalCostOfLoan  = 0; 
  let interestPaid;
  let termsPrincipalPayments;
  //  END - Initialize all the variables

  // START- Cleaning things up
  const cleanedMortageAmount = mortageAmount.replace(",", "");
  const ma = parseInt(cleanedMortageAmount, 10);
  // END- Cleaning things up

  const mortageAmortizationInMonths = mortageAmortizationInYears * 12;
  let mortageAmortizationConvertedToYears = Math.floor(mortageAmortizationInMonths) / 12;
  let mortageAmortizationConvertedToMonths = +(mortageAmortizationInMonths % 12).toFixed(0);


  /*
   Payment Frequency:
   This is used to determine the number of payments per year.
   Annually: 1 (once per year)
   Semi-Annually: 2 (twice per year)
   Quarterly: 4 times per year
   Bi-Monthly: 6 times per year
   Monthly: 12 times per year
   Semi-Monthly: 24 times per year (2 times per month)
   Bi-Weekly: 26 times per year (once every two weeks)
   Weekly: 52 times per year (once a week)
   Acc Bi-Weekly: 26 times per year, but payment is 1/2 a normal monthly payment
   Acc Weekly: 52 times per year, but payment is 1/4 a normal monthly payment
   */

  if (paymentFrequency === "Annually") {
    periodsPerYear = 1;
    adjustDateBy = 1;
    adjustDateByStr = "year";
    termsNumberOfPayments = periodsPerYear * terms
  }
  if (paymentFrequency === "Semi-Annually") {
    periodsPerYear = 2;
    adjustDateBy = 6;
    adjustDateByStr = "months";
    termsNumberOfPayments = periodsPerYear * terms
  }
  if (paymentFrequency === "Quarterly") {
    periodsPerYear = 4;
    adjustDateBy = 3;
    adjustDateByStr = "months";
    termsNumberOfPayments = periodsPerYear * terms
  }
  if (paymentFrequency === "Bi-Monthly") {
    periodsPerYear = 6;
    adjustDateBy = 2;
    adjustDateByStr = "months";
    termsNumberOfPayments = periodsPerYear * terms
  }
  if (paymentFrequency === "Monthly") {
    periodsPerYear = 12;
    adjustDateBy = 1;
    adjustDateByStr = "month";
    termsNumberOfPayments = periodsPerYear * terms
  }
  if (paymentFrequency === "Semi-Monthly") {
    periodsPerYear = 24;
    adjustDateBy = 1 / 2;
    adjustDateByStr = "month";
    termsNumberOfPayments = periodsPerYear * terms
  }
  if (paymentFrequency === "Bi-Weekly") {
    periodsPerYear = 26;
    adjustDateBy = 2;
    adjustDateByStr = "weeks";
    termsNumberOfPayments = periodsPerYear * terms
  }
  if (paymentFrequency === "Weekly") {
    periodsPerYear = 52;
    adjustDateBy = 1;
    adjustDateByStr = "week";
    termsNumberOfPayments = periodsPerYear * terms
  }
  if (paymentFrequency === "Acc. Bi-Weekly") {
    periodsPerYear = 26;
    adjustDateBy = 2;
    adjustDateByStr = "weeks";
    termsNumberOfPayments = periodsPerYear * terms
  }
  if (paymentFrequency === "Acc. Weekly") {
    periodsPerYear = 52;
    adjustDateBy = 1;
    adjustDateByStr = "week";
    termsNumberOfPayments = periodsPerYear * terms
  }

  // calculate Total Number of Payments (this may need to be reworked for accelerated schedule)
  totalNumberofPayments = (periodsPerYear * mortageAmortizationInMonths) / 12;

  /*
   Converting a Semi-Annual Rate to a Monthly Rate
   If the nominal interest rate is R (expressed as a decimal rather than percent), then the monthly interest rate is
   (1 + R/2)1/6 - 1.
   For example, if the annual interest rate is R = 0.066 (6.6%), then the monthly rate is
   (1 + 0.033)1/6 - 1 = 0.00542587 (equivalently 0.542587%).
   */
  // calculate Interest Rate for each Payment
  interestRatePerPayment = +((Math.pow(1 + interestRate / 100 / 2, 1 / 6) - 1) * (12 / periodsPerYear)).toFixed(6);
  monthlyInterestRate = +(Math.pow(1 + interestRate / 100 / 2, 1 / 6) - 1).toFixed(6);

  /*
   Calculating Monthly Payments and Total Interest
   If the monthly interest rate is i (as a decimal), 
   the number of years N, and the principal P,
   then the monthly payment is given by the equation

   Monthly Payment = Pi(1+i)12N/[(1+i)12N - 1].
   
   For example, suppose you borrow $100,000 for 20 years at a nominal annual rate of 6.6%. 
   Your three variables are P = 100000, N = 20, and i = 0.00542587. 
   Your monthly payments are $100000(0.00542587)(1.00542587)240/[(1.00542587)240 - 1]
   = (542.587)(3.664488)/(2.664488)
   = $746.22.
   The total interest paid is the difference between the sum of all the monthly payments and the amount borrowed. 
   For example, if you pay $746.22 a month for 20 years and the amount borrowed is $100,000, 
   then the total interest is $746.22(240) - $100,000 = $79,092.80.
   */

  mortgagePayment = -PMT(monthlyInterestRate, mortageAmortizationInMonths, mortageAmount, 0, 0) / (periodsPerYear / 12);

  totalCostofLoan = (mortgagePayment * mortageAmortizationInMonths) / (12 / periodsPerYear);

  //  Then based on the Monthly Mortgage Payment - calculate the Mortgage Payments and Total Cost of Loan
  //  (depending on the selection of payment frequency)
  if (paymentFrequency === "Acc. Bi-Weekly") {
    mortgagePayment = -PMT( monthlyInterestRate, mortageAmortizationInMonths, mortageAmount, 0, 0) / 2;
    totalCostofLoan = ((mortgagePayment * 26) / 12) * mortageAmortizationInMonths;
  } else if (paymentFrequency === "Acc. Weekly") {
    mortgagePayment = -PMT( monthlyInterestRate, mortageAmortizationInMonths, mortageAmount, 0, 0) / 4;
    totalCostofLoan = ((mortgagePayment * 26) / 12) * mortageAmortizationInMonths;
  }

  // Calculate Interest Paid for Term
  interestPaidforTerm = totalCostofLoan - ma;

  // Fix for Interest rate = 0
  if (interestRate <= 0) {
    mortgagePayment = ma / mortageAmortizationInMonths;
    totalCostofLoan = mortgagePayment;
    interestPaidforTerm = 0;
  }

  interestPaid = ma * interestRatePerPayment;
  termsTotalCostOfLoanPlusInterest = interestPaid * mortageAmortizationInMonths;
  termsInterestPayment= termsTotalCostOfLoanPlusInterest - ma;
  termsTotalCostOfLoan  = termsNumberOfPayments * mortgagePayment; 

  termsPrincipalPayments = termsTotalCostOfLoan - termsInterestPayment;

  let totalBalanceOverTerms = ma - termsPrincipalPayments.toFixed(2);


  //  Constructing the objects to sent back to the reducers
  const termsOfLoan = {
    numberofPayments: termsNumberOfPayments,
    mortgagePayments: `${mortgagePayment.toFixed(2)}`,
    prePayments: "0.00",
    principalPayments: termsPrincipalPayments.toFixed(2),
    interestPayments: termsInterestPayment.toFixed(2),
    totalCost: termsTotalCostOfLoan.toFixed(2),
    totalBalance: totalBalanceOverTerms
  }

  const amortizationPeriodOfLoan = {
    numberofPayments: totalNumberofPayments,
    mortgagePayments: `${mortgagePayment.toFixed(2)}`,
    prePayments: "0.00",
    principalPayments: ma.toFixed(2),
    interestPayments: interestPaidforTerm.toFixed(2),
    totalCost: totalCostofLoan.toFixed(2)
  }

  return {
    termsOfLoan, 
    amortizationPeriodOfLoan
  }
}

function PMT(ir, np, presentValue, fv, type) {
  //  clean presentValue from comma's
  const cleanedPV = presentValue.replace(",", "");
  const pv = parseInt(cleanedPV, 10);

  /*
   * ir   - interest rate per month
   * np   - number of periods (months)
   * pv   - present value
   * fv   - future value
   * type - when the payments are due:
   *        0: end of the period, e.g. end of month (default)
   *        1: beginning of period
  */
  let pmt = 0;
  let pvif = 0;

  fv || (fv = 0);
  type || (type = 0);

  if (ir === 0) return -(pv + fv) / np;

  pvif = Math.pow(1 + ir, np);
  pmt = (-ir * pv * (pvif + fv)) / (pvif - 1);

  if (type === 1) pmt /= 1 + ir;
  return pmt;
}
