import { Formik, Field, Form, useFormik } from "formik";
import "./App.css";
import * as yup from "yup";

function App() {
  const schema = yup.object().shape({
    email: yup.string().email("email must be a valid email!!!").required("Required field"),
    password: yup.string().min(5).required(),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")])
      .required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
    validationSchema: schema,
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
        <br />
        <br />
        <label>Password</label>
        <input name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>}
        <br />
        <br />
        <label>Confirm Password</label>
        <input name="passwordConfirm" onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
          <div>{formik.errors.passwordConfirm}</div>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>
        <hr />
        <code>{JSON.stringify(formik.values)}</code>
      </form>
    </div>
  );
}

export default App;
