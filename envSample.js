import axios from "axios";

export const REACT_APP_BASE_URL = "http://localhost:3000/api/v1";

export const TECH_ICONS_CDN = "https://cdn.simpleicons.org/";

export const Logout = async () => {
  try {
    const res = await axios.post(REACT_APP_BASE_URL + "/logout", null, {
      withCredentials: true,
    });
    console.log(res.data);
  } catch (error) {
    console.log("error", error.message);
  }
};
