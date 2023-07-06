import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSignupError } from "../../helpers/TextError";

//axios.defaults.baseURL = "http://talkling.us-east-1.elasticbeanstalk.com";

const SIGN_UP_ENDPOINT = "/register";
const SIGN_IN_ENDPOINT = "api/users/login";
const SIGN_OUT_ENDPOINT = "api/users/logout";
const GET_USER_ENDPOINT = "api/users/current";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://talkling.us-east-1.elasticbeanstalk.com/register",
        credentials
      );
      alert("Super! Check your mail and confirm registration.");
      return res.data;
    } catch (error) {
      alert(getSignupError(error.response.status));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
