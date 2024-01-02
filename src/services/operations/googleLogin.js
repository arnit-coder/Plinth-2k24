import axios from "axios";
import { toast } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

export const signinGoogle = async (accessToken, navigate, user) => {
  try {
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
    navigate("/");
    toast.success("Signed in successfully");
  } catch (err) {
    // toast.error("something went wrong please login again");
  }
};
export const signupGoogle = async (accessToken, navigate, user) => {
  try {
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
    navigate("/");
    toast.success("Signed up successfully");
  } catch (err) {
    console.log(err);
    toast.error("Error signup");
  }
};
