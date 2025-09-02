import { useActionState } from "react";
import illustrationEmpty from "./assets/images/illustration-empty.svg";

import {
  calculateMortgagePayment,
  calculateTotalRepayment,
} from "./helpers/mortgageCalculator";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import RadioButtonGroup from "./components/RadioButtonGroup";

import "./App.css";
import Link from "./components/Link/Link";

function App() {
  function calculateMortgageAction(_, formData) {
    const amount = formData.get("amount");
    const term = formData.get("term");
    const rate = formData.get("rate");
    const repayment = formData.getAll("mortgage-type");

    return {
      amount,
      term,
      rate,
      repayment: repayment[0],
    };
  }

  const [formState, formAction] = useActionState(calculateMortgageAction, null);

  const mortgagePayment = formState
    ? calculateMortgagePayment({
        mortgageAmount: formState.amount,
        intertestRate: formState.rate,
        mortgageTerm: formState.term,
        repaymentType: formState.repayment,
      })
    : null;

  const totalRepayment =
    formState && mortgagePayment
      ? calculateTotalRepayment(mortgagePayment, formState.term)
      : null;

  return (
    <main className="form-results-wrapper">
      <div className="form-container">
        <div className="heading-container">
          <h1>Mortgage Calculator</h1>
          <Link />
        </div>
        <form action={formAction}>
          <Input name="amount" label="Mortgage Amount" type="text" />
          <div className="input-row">
            <Input name="term" label="Mortgage Term" type="text" />
            <Input name="rate" label="Interest Rate" type="text" />
          </div>
          <fieldset className="mortgage-type-fieldset">
            <legend>Mortgage Type</legend>
            <RadioButtonGroup
              options={[
                {
                  name: "mortgage-type",
                  label: "Repayment",
                  value: "repayment",
                },
                {
                  name: "mortgage-type",
                  label: "Interest Only",
                  value: "interest-only",
                },
              ]}
            />
          </fieldset>
          <Button label="Calculate Repayments" />
        </form>
      </div>
      <section className="results-placeholder">
        {mortgagePayment && totalRepayment ? (
          <>
            <h1>Your Results</h1>
            <p className="results-text">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              &quot;calculate repayments&quot; again.
            </p>
            <div className="results-details-section">
              <p className="monthly-payments-label">Your monthly repayments</p>
              <p className="monthly-payment">£{mortgagePayment}</p>
              <p className="total-payments-label">
                Total you&#39;ll repay over the term
              </p>
              <p className="total-payments">£{totalRepayment}</p>
            </div>
          </>
        ) : (
          <>
            <img
              src={illustrationEmpty}
              alt="Illustration of a calculator with currency symbols and money"
            />
            <h1>Results shown here</h1>
            <p>
              Complete the form and click and &quot;calculate repayments&quot;
              to see what your monthly repayments would be.
            </p>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
