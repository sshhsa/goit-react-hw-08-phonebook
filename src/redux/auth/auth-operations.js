import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = '';

const register = createAsyncThunk('auth/register', async authDataRegister => {
  try {
    const { data } = await axios.post('users/signup', authDataRegister);
    return data;
  } catch (error) {
    console.log(error);
  }
});
