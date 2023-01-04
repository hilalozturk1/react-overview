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
          gender: "male",
          hobies: [],
          country: "tr",
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" placeholder="Jane" onChange={handleChange} />
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" placeholder="Doe" onChange={handleChange} />
            <hr />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="jane@acme.com" type="email" onChange={handleChange} />
            <br />
            <hr />
            Male
            <input
              name="gender"
              value="male"
              onChange={handleChange}
              type="radio"
              checked={values.gender === "male"}
            />
            Female
            <input
              name="gender"
              value="female"
              onChange={handleChange}
              type="radio"
              checked={values.gender === "female"}
            />
            <br />
            football
            <input type="checkbox" name="hobies" value="football" onChange={handleChange} />
            voleyball
            <input type="checkbox" name="hobies" value="voleyball" onChange={handleChange} />
            <br />
            <select name="country" onChange={handleChange}>
              <option value="tr">TR</option>
              <option value="uk">UK</option>
            </select>
            <br />
            <button type="submit">Submit</button>
            <hr />
            <code>{JSON.stringify(values)}</code>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
