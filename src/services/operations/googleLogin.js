import axios from "axios";
import { toast } from "react-hot-toast";




const signInGoogle = (accessToken) => {
  
	const res = axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/googleSignIn`, {
		googleAccessToken: accessToken,
	});
  console.log(res)
    return res ; 
};

const signUpGoogle = (accessToken) => {
	const res = axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/googleSignUp`, {
		googleAccessToken: accessToken,
	});
  console.log(res)
    return res ; 
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
    toast.error("something went wrong please login again");
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

