
import * as yup from "yup";

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const todayString = `${mm}/${dd}/${yyyy}`;
const classSchema = yup.object().shape({
    name: yup.string(),
    type: yup.string(),
    startTime: yup.string(),
    startDate: yup.date().min(todayString),
    duration: yup.number().min(5),
    intensity: yup.number().min(1).max(10),
    location: yup.string(),
    max: yup.number().min(1),
})
export default classSchema;