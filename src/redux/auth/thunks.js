import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSignupError } from "helpers/TextError";

//axios.defaults.baseURL = "http://talkling.us-east-1.elasticbeanstalk.com";

/*const SIGN_UP_ENDPOINT = "/register";
const SIGN_IN_ENDPOINT = "api/users/login";
const SIGN_OUT_ENDPOINT = "api/users/logout";
const GET_USER_ENDPOINT = "api/users/current";*/

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

const signIn = createAsyncThunk("auth/logIn", async (credentials, thunkAPI) => {
  try {
    const res = await axios.post(
      "https://lang.talkling.online/login",
      credentials
    );

    token.set(res.data.token);

    localStorage.setItem("token", res.data.token);
    // localStorage.setItem("user", res.data.auth.isLogIn === true);
    //console.log("isLogIn", res.data.auth.isLogIn);
    console.log(res.data);
    alert("You are welcome");
    return res.data;
  } catch (error) {
    alert("Invalid email or password");
    return thunkAPI.rejectWithValue(error.message);
  }
});

const sendRequest = createAsyncThunk(
  "auth/sendRequest",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://lang.talkling.online/email-send",
        credentials
      );

      //token.set(res.data.token);

      //localStorage.setItem("token", res.data.token);
      //localStorage.setItem("email", res.data.user.email);
      console.log(res.data);
      alert("Your request has been sent");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://lang.talkling.online/update-password",
        credentials
      );

      token.set(res.data.token);
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      alert("Your password will be updated");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export {
  signUp,
  signIn,
  sendRequest,
  updatePassword,
  /*signOut, getUser*/
};
