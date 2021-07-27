
import * as yup from "yup";


const loginSchema = yup.object().shape({
    username: yup.string().required().min(5),
    password: yup.string().required().min(5),
    authentication: yup.string(),
})
export default loginSchema;