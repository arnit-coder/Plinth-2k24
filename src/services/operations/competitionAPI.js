import axios from "axios";
import { competitionEndpoints } from "../apis";
import { toast } from "react-hot-toast";

const {
  CREATE_COMPETITION_API,
  UPDATE_COMPETITION_API,
  DELETE_COMPETITION_API,
  GET_ALL_COMPETITION_API,
} = competitionEndpoints;

export const CreateCompetition = async (body, token) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await axios.post(CREATE_COMPETITION_API, body, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Competition Created!");
    toast.dismiss(toastId);
    return response;
  } catch (err) {
    console.log(err);
    console.log("Error while Creating Competition in Frontend!");
  }
  toast.dismiss(toastId);
};

export const GetAllCompetition = async () => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await axios.get(GET_ALL_COMPETITION_API);
    console.log("Competition Fetched!");
    toast.dismiss(toastId);
    return response;
  } catch (err) {
    console.log(err);
    console.log("Error while fetching Competition in Frontend!");
  }
  toast.dismiss(toastId);
};

export const UpdateCompetition = async (body, token) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await axios.post(UPDATE_COMPETITION_API, body, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Competition Updated!");
    toast.dismiss(toastId);
    return response;
  } catch (err) {
    console.log(err);
    console.log("Error while Updating Competition in Frontend!");
  }
  toast.dismiss(toastId);
};

export const DeleteCompetition = async (competitionId, token) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await axios.post(DELETE_COMPETITION_API, competitionId, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Competition deleted!");
    return response;
  } catch (error) {
    console.log("DELETE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
};
