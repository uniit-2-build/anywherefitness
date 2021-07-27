import * as yup from "yup";

const signUpSchema = yup.object().shape({
    username: yup.string().required().min(5),
    password: yup.string().required().min(5),
    confirmPassword: yup
        .string()
        .required()
        .oneOf([yup.ref('password'), null], 'Passwords must match'), // verifies that the password is the same as confirm field
    email: yup.string().email().required().min(5),
})
export default signUpSchema;