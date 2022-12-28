import React from 'react';
import TextInput from '../../common/inputs/TextInput';
import CheckBoxInput from '../../common/inputs/CheckBoxInput';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const LoginForm = ({ closeModal }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        remember: false,
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('the pattern is not correct')
          .required('please fill out this field')
          .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            'the pattern is not correct'
          ),
        password: Yup.string().required('please fill out this field'),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div className="space-y-6">
          <TextInput
            label="Your email"
            placeholder="name@company.com"
            name="email"
            type="text"
          />
          <TextInput
            label="Your password"
            placeholder="••••••••"
            name="password"
            type="password"
          />
          <div className="flex justify-between py-3">
            <CheckBoxInput label="Remember me" name="remember" />
            <Link
              to="not-built"
              className="text-sm text-blue-700 hover:underline"
              onClick={closeModal}
            >
              Lost Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500">
            Not registered?
            <Link
              to="not-built"
              className="text-blue-700 hover:underline"
              onClick={closeModal}
            >
              Create account
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
