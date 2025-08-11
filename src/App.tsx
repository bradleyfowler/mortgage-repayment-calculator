import { useActionState } from "react";

import {
  calculateMortgagePayment,
  calculateTotalRepayment,
} from "./helpers/mortgageCalculator";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import RadioButtonGroup from "./components/RadioButtonGroup";

import "./App.css";

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
    <main>
      <div>
        <h1>Mortgage Calculator</h1>
        <button>Clear All</button>
        <form action={formAction}>
          <Input name="amount" label="Mortgage Amount" type="text" />
          <Input name="term" label="Mortgage Term" type="text" />
          <Input name="rate" label="Interest Rate" type="text" />
          <fieldset>
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
        {mortgagePayment && totalRepayment ? (
          <section>
            <h1>Your Results</h1>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              &quot;calculate repayments&quot; again.
            </p>
            <p>Your monthly repayments</p>
            <p>{mortgagePayment}</p>
            <p>Total you&#39;ll repay over the term</p>
            <p>{totalRepayment}</p>
          </section>
        ) : (
          <section>
            <h1>Results shown here</h1>
            <p>
              Complete the form and click and &quot;calculate repayments&quot;
              to see what your monthly repayments would be.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
