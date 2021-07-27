
import * as yup from "yup";

export const signUpSchema = yup.object().shape({
    username: yup.string().required().min(5),
    password: yup.string().required().min(5),
    confirmPassword: yup
        .string()
        .required()
        .oneOf([yup.ref('password'), null], 'Passwords must match'), // verifies that the password is the same as confirm field
    email: yup.string().email().required().min(5),
})

export const loginSchema = yup.object().shape({
    username: yup.string().required().min(5),
    password: yup.string().required().min(5),
    authentication: yup.string(),
})

export const classSchema = yup.object().shape({
    name: yup.string().required(),
    type: yup.string().required(),
    start: yup.date().required(),
    duration: yup.number().required(),
    intensity: yup.number().required().min(1).max(10),
    location: yup.string().required(),
    max: yup.number().required(),
})
