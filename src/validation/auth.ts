import * as yup from "yup"
const AuthValidation= yup.object().shape({
  email: yup
    .string()
    .required("Please enter email")
    .matches(
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@gmail\.com$/,
      "Invalid email format"
    ),
  password: yup
    .string()
    .required("Please enter password")
    .min(7, "Password is too short")
    .matches(
      /^[^\u00C0-\u017F]+$/,
      "Invalid password format"
    ),
    fullname:yup
    .string()
    .required("Please enter your Name")
});
export {AuthValidation};