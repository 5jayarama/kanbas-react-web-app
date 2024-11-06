import courseData from "../../Database/courses.json";
import moduleData from "../../Database/modules.json";
import userData from "../../Database/users.json";
import assignmentData from "../../Database/assignments.json";
import initialEnrollments from "../../Database/enrollments.json";

const enrollments = [...initialEnrollments];

export const getUserEnrollments = async (userId: string) => 
  enrollments.filter((record) => record.user === userId);

export const addEnrollment = async (userId: string, courseId: string) => {
  const newEnrollment = { _id: `${Date.now()}`, user: userId, course: courseId };
  enrollments.push(newEnrollment);
  return newEnrollment;
};

export const removeEnrollment = async (userId: string, courseId: string) => {
  const targetIndex = enrollments.findIndex(
    (record) => record.user === userId && record.course === courseId
  );
  if (targetIndex > -1) enrollments.splice(targetIndex, 1);
  return { user: userId, course: courseId };
};

export { courseData as courses, moduleData as modules, userData as users, assignmentData as assignments, enrollments };
