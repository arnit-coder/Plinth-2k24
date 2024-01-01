import axios from "axios";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import UserContext from "../../ContextApi/UserContext";
import { jwtDecode } from "jwt-decode";

const signInGoogle = async (accessToken,navigate, user) => {
  const res = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/auth/googleSignIn`,
    {
      googleAccessToken: accessToken,
    }
  );

  localStorage.setItem("token", JSON.stringify(res.data.token));
  const decoded = jwtDecode(res.data.token);
  user.setUser(decoded);
  console.log(res);
  return res;
};

const signUpGoogle = async (accessToken, navigate, user) => {
  const res = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/auth/googleSignUp`,
    {
      googleAccessToken: accessToken,
    }
  );
  localStorage.setItem("token", JSON.stringify(res.data.token));
  const decoded = jwtDecode(res.data.token);
  user.setUser(decoded);
  console.log(res);
  return res;
};

export const signinGoogle = async (accessToken) => {
  try {
    // login user
    const response = await signInGoogle(accessToken);
    console.log(response);
    if (response) {
      toast.success("Logged in successfully");
    }
  } catch (err) {
    // toast.error("something went wrong please login again");
  }
};
export const signupGoogle = async (accessToken) => {
  try {
    // signup user
    const { data } = await signUpGoogle(accessToken);
    console.log(data);
    // navigate("/");
    toast.success("Signed up successfully");
  } catch (err) {
    console.log(err);
    toast.error("Error signup");
  }
};
