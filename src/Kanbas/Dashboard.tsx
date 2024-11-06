import { Link } from "react-router-dom";
import { modifyEnrollment, retrieveEnrollments } from "./Courses/Enrollments/index";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const [displayCourses, setDisplayAllCourses] = useState(false);

  // Function to toggle enrollment state for a course
  const handleEnrollmentClick = async (courseId: string, isCurrentlyEnrolled: boolean) => {
    await dispatch(modifyEnrollment({ userId: currentUser._id, courseId, isEnrolled: isCurrentlyEnrolled }) as any);
    dispatch(retrieveEnrollments(currentUser._id) as any);  // Refresh enrollment data
  };

  // Fetch enrollments when component mounts or currentUser changes
  useEffect(() => {
    dispatch(retrieveEnrollments(currentUser._id) as any);
  }, [dispatch, currentUser._id]);

  // Count the number of courses the user is enrolled in
  const enrolledCoursesCount = courses.filter((course) =>
    enrollments.some(
      (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id
    )
  ).length;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Faculty Controls for Adding and Editing Courses */}
      {currentUser?.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      {/* Button to Toggle Between My Courses and All Courses for Students */}
      {currentUser?.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setDisplayAllCourses(!displayCourses)}
        >
          {displayCourses ? "My Courses" : "All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({enrolledCoursesCount})</h2>
      <hr />

      {/* Course List - Filters based on whether to show all or enrolled courses only */}
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(displayCourses ? courses : courses.filter((course) =>
            enrollments.some((enrollment: any) =>
              enrollment.user === currentUser._id && enrollment.course === course._id
            )
          )).map((course) => {
            const userEnrolledInCourse = enrollments.some((enrollment: any) =>
              enrollment.user === currentUser._id && enrollment.course === course._id
            );

            return (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden d-flex flex-column h-100">
                  <img 
                    src={course.image || "/images/reactjs.jpg"} // Display React.js image if no course image available
                    width="100%" 
                    height={160} 
                    alt={`${course.name} course`} 
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>

                    <div className="mt-auto">
                      <Link to={`/Kanbas/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">
                        <button className="btn btn-primary mb-2"> Go </button>
                      </Link>

                      {/* Faculty Actions: Edit and Delete */}
                      {currentUser?.role === "FACULTY" && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning float-end me-2"
                          >
                            Edit
                          </button>
                        </>
                      )}
                      {/* Student Actions: Enroll and Unenroll */}
                      {currentUser?.role === "STUDENT" && (
                        <>
                          {userEnrolledInCourse ? (
                            <button
                              className="btn btn-danger float-end"
                              onClick={() => handleEnrollmentClick(course._id, true)}
                            >
                              Unenroll
                            </button>
                          ) : displayCourses ? (
                            <button
                              className="btn btn-success float-end"
                              onClick={() => handleEnrollmentClick(course._id, false)}
                            >
                              Enroll
                            </button>
                          ) : null}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );})}</div>
      </div>
    </div>);}
