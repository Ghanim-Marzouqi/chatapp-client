import * as Yup from "yup";

// Login Page Validation Schema
export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required().min(3),
});

// Register Page Validation Schema
export const registerValidationSchema = Yup.object().shape({
  username: Yup.string().required().min(3),
  phone: Yup.string()
    .required()
    .length(8)
    .matches(new RegExp(/^[79]\d{7}$/)),
  email: Yup.string().required().email(),
  name: Yup.string().required().min(3),
});
