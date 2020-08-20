import *as yup from 'yup'

const formSchema = yup.object().shape({
    firstname: yup
    .string()
    .min(2, 'First name must be at least 2 Characters in length.')
    .required('First name is required.'),
    lastname: yup
    .string()
    .min(2, 'Last name must be at least 2 characters in length.')
    .required('Last name is required'),
    email: yup
    .string()
    .email('Must be a valid email address')
    .required('Must include email address'),
    role: yup
    .string()
    .oneOf(['initial', 'rough', 'pr', 'paid'], 'You must select a role')
    .required('You must select a role'),
})

export default formSchema