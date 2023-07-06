import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import {
  validationRegistrationSchema,
  validate,
} from "../../helpers/Validation/ValidationRegistration";
import { ReactComponent as Close } from "../../images/icons/Close.svg";
import { Button } from "../../components/Button/Button";
import s from "./RegistrationForm.module.scss";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  // const [showText, setShowText] = useState(false);

  /*const signUp = () => {
    axios
      .post("http://talkling.us-east-1.elasticbeanstalk.com/register", {
        firstName: "Fred",
        lastName: "Flintstone",
        password: "123456",
        repassword: "123456",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };*/

  //formik.touched && formik.errors && setShowText(showText);

  //const toggleText = () => setShowText(!showText);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: validationRegistrationSchema,
    validate,
    /*onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },*/

    onSubmit: (values, obj) => {
      //alert(JSON.stringify(values, null, 2));
      const { name, email, password /*, repassword */ } = values;
      /*  axios
        .post("http://talkling.us-east-1.elasticbeanstalk.com/register", {
          name,
          email,
          password,
          //repassword,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
       */
      const credentials = { name, email, password };
      //signUp(credentials)
      dispatch(authOperations.signUp(credentials));
      obj.setSubmitting(false);
      localStorage.setItem("info", true);
      sessionStorage.setItem("auth-form", null);
      obj.resetForm();
    },
    /* onSubmit: (values, obj) => {
      const { name, email, password } = values;
      const credentials = { name, email, password };
     dispatch(authOperations.signUp(credentials));
      obj.setSubmitting(false);
      localStorage.setItem("info", true);
      sessionStorage.setItem("auth-form", null);
      obj.resetForm();
      },*/
  });

  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <div className={s.inputContainer}>
        <div
          className={s.inputField}
          style={{
            border:
              formik.touched.name && formik.errors.name && "1px solid #f85757",
            outline:
              formik.touched.name && !formik.errors.name && "1px solid #8B8E8F",
          }}
        >
          <span className={`${s.icon} ${s.username}`}></span>

          <input
            className={s.input}
            id="name"
            name="name"
            type="text"
            maxLength={100}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Username"
          />
        </div>
        {formik.touched.name &&
        formik.errors.name /* && setShowText(showText) */ ? (
          <p className={s.mistake}>
            {formik.errors.name} <Close /*onClick={toggleText} */ />
          </p>
        ) : null}
      </div>
      <div className={s.inputContainer}>
        <div
          className={s.inputField}
          style={{
            border:
              formik.touched.email &&
              formik.errors.email &&
              "1px solid #f85757",
            outline:
              formik.touched.email &&
              !formik.errors.email &&
              "1px solid #8B8E8F",
          }}
        >
          <span className={`${s.icon} ${s.email}`}></span>
          <input
            className={s.input}
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email.trim()}
            placeholder="Email"
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <span className={s.mistake}>
            {formik.errors.email} <Close />
          </span>
        ) : null}
      </div>
      <div className={s.inputContainer}>
        <div
          className={s.inputField}
          style={{
            border:
              formik.touched.password &&
              formik.errors.password &&
              "1px solid #f85757",
            outline:
              formik.touched.password &&
              !formik.errors.password &&
              "1px solid #8B8E8F",
          }}
        >
          <span className={`${s.icon} ${s.password}`}></span>
          <input
            className={s.input}
            id="password"
            name="password"
            type="password"
            minLength={5}
            maxLength={30}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password.trim()}
            placeholder="Password"
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <span className={s.mistake}>
            {formik.errors.password} <Close />
          </span>
        ) : null}
      </div>
      <div className={s.inputContainer}>
        <div
          className={s.inputField}
          style={{
            border:
              formik.touched.repassword &&
              formik.errors.repassword &&
              "1px solid #f85757",
            outline:
              formik.touched.repassword &&
              !formik.errors.repassword &&
              "1px solid #8B8E8F",
          }}
        >
          <span className={`${s.icon} ${s.password}`}></span>
          <input
            className={s.input}
            id="repassword"
            name="repassword"
            type="password"
            minLength={5}
            maxLength={30}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repassword.trim()}
            placeholder="Confirm"
          />
        </div>{" "}
        {formik.touched.repassword && formik.errors.repassword ? (
          <span className={s.mistake}>
            {formik.errors.repassword} <Close />
          </span>
        ) : null}
      </div>

      <div className={s.checkbox}>
        <input
          type="checkbox"
          id="agreement"
          className={s.customChecbox}
          name="agreement"
          value="yes"
        />
        <label htmlFor="agreement" className={s.checkLabel}>
          I agree to the terms of service
        </label>
      </div>
      {/*<button type="submit">Create Account</button>*/}

      {
        <Button
          type="submit"
          // disabled={!formik.isValid}
          style={{ backgroundColor: "#F6F244" }}
        >
          Create Account
        </Button>
      }
    </form>
  );
};
