import "./App.css";

function App() {
  return (
    <main>
      <div>
        <h1>Mortgage Calculator</h1>
        <button>Clear All</button>
        <form>
          <label htmlFor="amount">Mortgage Amount</label>
          <input type="text" name="amount" />
          <label htmlFor="term">Mortgage Term</label>
          <input type="text" name="term" />
          <label htmlFor="rate">Interest Rate</label>
          <input type="text" name="rate" />
          <fieldset>
            <legend>Mortgage Type</legend>
            <input type="radio" name="repayment" />
            <label htmlFor="repayment">Repayment</label>
            <input type="radio" name="interest-only" />
            <label htmlFor="interest-only">Interest Only</label>
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
