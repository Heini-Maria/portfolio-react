import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(60)
    .required()
    .matches(
      /^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*/,
      "name can only contain letters and characters - and ' ."
    ),
  email: Yup.string().email().required(),
  message: Yup.string().min(10).max(140).required(),
});
