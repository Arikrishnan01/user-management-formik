import * as yup from 'yup';

export const bookSchema = yup.object().shape({
    firstname: yup
     .string()
     .required("Why not fill the firstname🥳"),
    lastname: yup
     .string()
     .required("Why not fill the lastname🥳"),
    gender: yup
     .string()
     .required("Why not fill the gender🥳"),
    age: yup
     .string()
     .min(2,"give amount above 2 digit")
     .max(7,"give amount below 7 digit")
     .required("Why not fill the price🥳"),
    address: yup
     .string()
     .required("Why not fill the address🥳"),
})