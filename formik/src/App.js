import { Formik, Field, Form, useFormik } from "formik";
import "./App.css";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "male",
      hobies: [],
      country: "tr",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" placeholder="Jane" onChange={formik.handleChange} />
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" placeholder="Doe" onChange={formik.handleChange} />
        <hr />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={formik.handleChange}
        />
        <br />
        <hr />
        Male
        <input
          name="gender"
          value="male"
          onChange={formik.handleChange}
          type="radio"
          checked={formik.values.gender === "male"}
        />
        Female
        <input
          name="gender"
          value="female"
          onChange={formik.handleChange}
          type="radio"
          checked={formik.values.gender === "female"}
        />
        <br />
        football
        <input type="checkbox" name="hobies" value="football" onChange={formik.handleChange} />
        voleyball
        <input type="checkbox" name="hobies" value="voleyball" onChange={formik.handleChange} />
        <br />
        <select name="country" onChange={formik.handleChange}>
          <option value="tr">TR</option>
          <option value="uk">UK</option>
        </select>
        <br />
        <button type="submit">Submit</button>
        <hr />
        <code>{JSON.stringify(formik.values)}</code>
      </form>
    </div>
  );
}

export default App;
