import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup';

const Feedback = () => {
  const navigate = useNavigate()

  const onClickRegister = () => {
    navigate('/')
  }
  const onClickLogin = () => {
    navigate('/Login')
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
    email: Yup.string()
      .email('Invalid email address')
      .required('email is required'),
    phone: Yup.string()
      .required('A phone number is required')
      .matches(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/, 'Phone number is not valid'),
    subject: Yup.string()
      .min(2, 'Subject is too short')
      .max(30, 'Subject is too long')
      .required('Subject is required')
      .matches(/^[a-z]+$/, 'use small letters for Subject'),
    message: Yup.string()
      .min(10, 'Name is too short')
      .max(100, 'Name is too long')
      .required('message is required')
      .matches(/^[a-z]+$/, 'use small letters for message')
  });

  return (
    <div>
      <button onClick={onClickRegister} className='btn btn-primary m-2'>Register</button>
      <button onClick={onClickLogin} className='btn btn-primary m-2'>Login</button>

      <h1>Feedback Form</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className='w-50 mx-auto'>
            <div>
              <Field name="name" type="text" placeholder="Enter your Name" className="form-control mb-2" />
              {errors.name && touched.name ? (
                <div className='text-danger'>{errors.name}</div>
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
              <Field name="subject" type="text" placeholder="Enter your Subject" className="form-control mb-2" />
              {errors.subject && touched.subject ? (
                <div className='text-danger'>{errors.subject}</div>
              ) : null}
            </div>
            <div>
              <Field name="message" type="text" as="textarea" placeholder="Leave a comment here" className="form-control mb-2" style={{ height: '100px' }} />
              {errors.message && touched.message ? (
                <div className='text-danger'>{errors.message}</div>
              ) : null}
            </div>
            <button type='submit' className='btn btn-success'>submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Feedback
