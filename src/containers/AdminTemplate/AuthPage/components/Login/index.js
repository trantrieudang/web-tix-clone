import { unwrapResult } from '@reduxjs/toolkit';
import { login } from '../userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import { Redirect } from "react-router-dom";

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values, history) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      console.log(unwrapResult(resultAction));
      console.log(props);
      <Redirect to='/' />;
      // close dialog
      // const { closeDialog } = props;
      // if (closeDialog) {
      //   closeDialog();
      // }
    } catch (error) {
      console.log('Failed to login:', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
