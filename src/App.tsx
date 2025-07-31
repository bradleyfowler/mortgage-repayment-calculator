import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <div>
        <h1>Mortgage Calculator</h1>
        <button>Clear All</button>
        <form>
          <Input name="amount" label="Mortgage Amount" type="text" />
          <Input name="term" label="Mortgage Term" type="text" />
          <Input name="rate" label="Interest Rate" type="text" />
          <fieldset>
            <legend>Mortgage Type</legend>
            <Input name="repayment" label="Repayment" type="radio" />
            <Input name="interest-only" label="Interest Only" type="radio" />
          </fieldset>
          <button>Calculate Repayments</button>
        </form>
        <section>
          <h1>Results shown here</h1>
          <p>
            Complete the form and click and &quot;calculate repayments&quot; to
            see what your monthly repayments would be.
          </p>
        </section>
        <section>
          <h1>Your Results</h1>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click &quot;calculate
            repayments&quot; again.
          </p>
          <p>Your monthly repayments</p>
          <p>£1797.74</p>
          <p>Total you&#39;ll repay over the term</p>
          <p>£539,322.94</p>
        </section>
      </div>
    </main>
  );
}

export default App;
