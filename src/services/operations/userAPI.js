import axios from "axios";

export async function updateProfile(
  residentialAddress,
  country,
  city,
  instituteName,
  instituteAddress,
  instituteAreaPinCode,
  yearOfStudy
) {
  try {
    const response = await axios.post(
      PROFILE_UPDATE_API,
      {
        residentialAddress,
        country,
        city,
        instituteName,
        instituteAddress,
        instituteAreaPinCode,
        yearOfStudy,
      },
      { Authorization: `Bearer ${token}` }
    );
    console.log(response);
  } catch (err) {
    console.log(err);
    alert("Please try again");
    return res.status(400).json({
      message: "Something went wrong while updating user details",
      success: false,
    });
  }
}
