interface MortgageDetails {
  mortgageAmount: number;
  intertestRate: number;
  mortgageTerm: number;
  repaymentType: "interest-only" | "repayment";
}

export function calculateMortgagePayment({
  mortgageAmount,
  intertestRate,
  mortgageTerm,
  repaymentType,
}: MortgageDetails): number {
  const monthlyInterestRate = intertestRate / 100 / 12;
  const totalPayments = mortgageTerm * 12;

  return repaymentType === "interest-only"
    ? parseFloat((mortgageAmount * monthlyInterestRate).toFixed(2))
    : parseFloat(
        (
          (mortgageAmount *
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, totalPayments)) /
          (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
        ).toFixed(2)
      );
}
