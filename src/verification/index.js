
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
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const todayString = `${mm}/${dd}/${yyyy}`;
export const classSchema = yup.object().shape({
    name: yup.string().required(),
    type: yup.string().required(),
    startTime: yup.string().required(),
    startDate: yup.date().required().min(todayString),
    duration: yup.number().required().min(5),
    intensity: yup.number().required().min(1).max(10),
    location: yup.string().required(),
    max: yup.number().required().min(1),
})
