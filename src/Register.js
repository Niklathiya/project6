import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup';

const Register = () => {

  const navigate = useNavigate()

  const onClickLogin = () => {
    navigate('/Login')
  }
  const onClickFeedback = () => {
    navigate('/Feedback')
  }

  const onSubmit = (value) => {
    console.log("value++", value)
  }

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name is too short')
      .max(15, 'Name is too long')
      .required('name is required')
      .matches(/^[a-z]+$/, 'use small letters for name'),
    lname: Yup.string()
      .min(2, 'Name is too short')
      .max(15, 'Name is too long')
      .required('name is required')
      .matches(/^[a-z]+$/, 'use small letters for name'),
    email: Yup.string()
      .email('Invalid email address')
      .required('email is required'),
    phone: Yup.string()
      .required('A phone number is required')
      .matches(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/, 'Phone number is not valid'),
    password: Yup.string()
      .required('A password is required')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'password not valid use capital,small,special characters and number'), 
  });

  return (
    <div>
      <button onClick={onClickLogin} className='btn btn-primary m-2'>Login</button>
      <button onClick={onClickFeedback} className='btn btn-primary m-2'>Feedback</button>

      <h1>Register</h1>
      <Formik
        initialValues={{
          name: '',
          lname: '',
          email: '',
          phone: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className='w-50 mx-auto'>
            <div>
              <Field name="name" type="text" placeholder="Enter your First name" className="form-control mb-2" />
              {errors.name && touched.name ? (
                <div className='text-danger'>{errors.name}</div>
              ) : null}
            </div>
            <div>
              <Field name="lname" type="text" placeholder="Enter your Last name" className="form-control mb-2" />
              {errors.lname && touched.lname ? (
                <div className='text-danger'>{errors.lname}</div>
              ) : null}
            </div>
            <div>
              <Field name="email" type="text" placeholder="Enter your Email address" className="form-control mb-2" />
              {errors.email && touched.email ? (
                <div className='text-danger'>{errors.email}</div>
              ) : null}
            </div>
            <div>
              <Field name="phone" type="text" placeholder="Enter your Phone number" className="form-control mb-2" />
              {errors.phone && touched.phone ? (
                <div className='text-danger'>{errors.phone}</div>
              ) : null}
            </div>
            <div>
              <Field name="password" type="text" placeholder="Enter your Password" className="form-control mb-2" />
              {errors.password && touched.password ? (
                <div className='text-danger'>{errors.password}</div>
              ) : null}
            </div>
            <button type='submit' className='btn btn-success'>submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register
