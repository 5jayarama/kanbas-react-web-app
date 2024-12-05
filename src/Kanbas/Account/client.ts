import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const findMyCourses = async () => {
  try {
      const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
      return data;
  } catch (err: any) {
      // Check for 401 Unauthorized
      if (err.response?.status === 401) {
          if (err.response?.data?.message === "Unauthorized: User not logged in") {
              console.warn("User is not logged in.");
              return null; // You can redirect to the login page or handle it as needed
          }
      }
      console.error("Error fetching courses:", err);
      throw err; // Re-throw for other errors
  }
};
export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post( `${USERS_API}/signin`, credentials );
  return response.data;
};
export const updateUser = async (user: any) => {
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
  };
  export const profile = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
  };
  export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
  };
  export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
  };
  
  