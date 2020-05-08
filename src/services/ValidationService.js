import * as Yup from "yup";

// Login Page Validation Schema
export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().min(3).required(),
});

// Register Page Validation Schema
export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().min(3).required(),
  email: Yup.string().email().required(),
  phone: Yup.string().length(8).required(),
  username: Yup.string().min(3).required(),
});
