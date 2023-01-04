import { Formik, Field, Form } from "formik";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" placeholder="Jane" onChange={handleChange} />

            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" placeholder="Doe" onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input name="email" placeholder="jane@acme.com" type="email" onChange={handleChange} />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
