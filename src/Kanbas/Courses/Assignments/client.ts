import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${process.env.REACT_APP_API_URL}/api/courses`;

// Define the structure of an assignment
interface Assignment {
  _id: string;
  title: string;
  description?: string;
  course: string;
  dueDate?: string;
  availableDate?: string;
  availableUntilDate?: string;
  points?: number;
}
export const updateAssignment = async (courseId: string, assignmentId: string, assignment: any) => {
  const { data } = await axiosWithCredentials.put(
      `${COURSES_API}/${courseId}/assignments/${assignmentId}`,
      assignment
  );
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};