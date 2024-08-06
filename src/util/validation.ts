import * as Yup from 'yup';
import { FormikErrors } from 'formik';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong format')
    .required('Please, fill this field'),
  password: Yup.string()
    .min(3, 'password must have at least 3 symbols')
    .required('Please, fill this field'),
});

const validateForm = async (values: {
  email: string;
  password: string;
}): Promise<FormikErrors<typeof values>> => {
  try {
    await validationSchema.validate(values, { abortEarly: false });
    return {};
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      const formErrors: FormikErrors<typeof values> = {};
      error.inner.forEach((err) => {
        if(err.path !== undefined) {
          // @ts-ignore
          formErrors[err.path] = err.message;
        }
      });
      return formErrors;
    } else {
      throw error;
    }
  }
};

export default validateForm;
