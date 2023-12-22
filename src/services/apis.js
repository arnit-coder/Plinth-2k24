
const BASE_URL = process.env.REACT_APP_BACKEND_URL

// AUTH ENDPOINTS
export const authEndpoints = {
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  LOGIN_NUMBER_API: BASE_URL + "/auth/loginWithNumber",
  SENDOTP_API: BASE_URL + "/auth/sendOtp",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  SIGNUP_GOOGLE_API: BASE_URL + "/auth/googleSignUp",
  LOGIN_GOOGLE_API: BASE_URL + "/auth/googleSignIn",
}

// USER ENDPOINTS
export const userEndpoints = {
  PROFILE_UPDATE_API: BASE_URL + "/user/updateDashboard"
}

// TEAM ENDPOINTS
export const teamEndpoints = {
  CREATE_TEAM_API: BASE_URL + "/team/createTeam",
  DELETE_TEAM_API: BASE_URL + "/team/deleteTeam",
  GET_ALL_TEAM_API: BASE_URL + "/team/getAllTeam",
}

// COMPETITION ENDPOINTS
export const competitionEndpoints = {
  CREATE_COMPETITION_API: BASE_URL + "/compete/createCompetition",
  UPDATE_COMPETITION_API: BASE_URL + "/compete/updateCompetition",
  DELETE_COMPETITION_API: BASE_URL + "/compete/deleteCompetition",
  GET_ALL_COMPETITION_API: BASE_URL + "/compete/getAllCompetition",
}