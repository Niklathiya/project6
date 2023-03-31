import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate()

  const onClickRegister = () => {
    navigate('/')
  }
  const onClickFeedback = () => {
    navigate('/Feedback')
  }

  const onSubmit = (value) => {
    console.log("value++", value)
  }

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('email is required'),
    password: Yup.string()
      .required('A password is required')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'password not valid use capital,small,special characters and number'),
  });

  return (
    <div>
      <button onClick={onClickRegister} className='btn btn-primary m-2'>Register</button>
      <button onClick={onClickFeedback} className='btn btn-primary m-2'>Feedback</button>

      <h1>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className='w-50 mx-auto'>
            <div>
              <Field name="email" type="text" placeholder="Enter your Email address" className="form-control mb-2" />
              {errors.email && touched.email ? (
                <div className='text-danger'>{errors.email}</div>
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

export default Login
