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

const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://lang.talkling.online/register",
        //"http://talkling.us-east-1.elasticbeanstalk.com/register",
        /* "http://talkling.us-east-1.elasticbeanstalk.com/register",*/
        credentials
      );
      // token.set(token);
      alert("Super! Check your mail and confirm registration.");
      return res.data;
    } catch (error) {
      alert(getSignupError(error.response.status));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const signIn = createAsyncThunk("auth/logIn", async (credentials, thunkAPI) => {
  try {
    const res = await axios.post(
      "https://lang.talkling.online/login",
      credentials
    );
    token.set(res.data.token);
    alert("You are welcome");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { signUp, signIn /*signOut, getUser*/ };
