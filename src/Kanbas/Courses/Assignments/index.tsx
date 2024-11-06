import React, { useState } from "react";
import { FaGripVertical, FaRegClipboard, FaChevronDown, FaChevronRight, FaCheckCircle, FaEllipsisV, FaSearch, FaPlus, FaTrash, FaPencilAlt } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignmentForEdit } from "./reducer";

export default function Assignments() {
  const { cid } = useParams(); // Retrieve the course ID from the URL params
  const [isOpen, setIsOpen] = useState(true);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Filter assignments based on the course ID to get full details from assignments.json
  const filteredAssignments = assignments
    .filter((assignment: any) => assignment.course === cid) // First filter by course ID
    .map((assignment: any) => ({
      id: assignment._id,
      title: assignment.title,
      points: assignment.points,
      availableDate: assignment.availableDate, // Updated to use availableDate
      dueDate: assignment.dueDate, // Updated to use dueDate
      description: assignment.description,
    }));

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input type="text" className="form-control" placeholder="Search for Assignments..." />
        </div>

        {/* Only display for faculty */}
        {currentUser?.role === "FACULTY" && (
          <div>
            <button className="btn btn-light border me-2">
              <FaPlus className="me-2" /> Group
            </button>
            <Link to={`./Editor`} className="btn btn-danger">
              <FaPlus className="me-2" /> Assignment
            </Link>
          </div>
        )}
      </div>

      <div className="d-flex align-items-center justify-content-between bg-light p-3 border rounded">
        <div className="d-flex align-items-center">
          <FaGripVertical className="me-2 fs-4" />
          {isOpen ? (
            <FaChevronDown className="me-2" onClick={toggleDropdown} style={{ cursor: "pointer" }} />
          ) : (
            <FaChevronRight className="me-2" onClick={toggleDropdown} style={{ cursor: "pointer" }} />
          )}
          <h5 className="m-0" onClick={toggleDropdown} style={{ cursor: "pointer" }}>
            Assignments
          </h5>
        </div>

        <div className="d-flex align-items-center">
          <div className="rounded-pill bg-light border border-secondary d-flex align-items-center justify-content-center" style={{ width: "120px", height: "40px" }}>
            <span className="text-muted">40% of Total</span>
          </div>
          <FaPlus className="mx-3" />
          <FaEllipsisV className="text-muted fs-4" />
        </div>
      </div>

      {isOpen && (
        <div className="mt-3">
          <hr className="m-0 text-muted" style={{ border: "1px solid lightgrey" }} />
          
          {/* Render dynamic assignments for the current course */}
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment: any) => (
              <div key={assignment.id}>
                <div className="d-flex align-items-center justify-content-between border-start border-3 border-success p-3">
                  <div className="d-flex align-items-center">
                    <FaGripVertical className="me-2 fs-4" />
                    <FaRegClipboard className="text-success me-3 fs-4" />
                    <div>
                      <h6 className="m-0">{assignment.title}</h6>
                      <p className="text-muted m-0">
                        Start: {new Date(assignment.availableDate).toLocaleDateString()} | 
                        Due: {new Date(assignment.dueDate).toLocaleDateString()} | 
                        Points: {assignment.points}
                      </p>
                    </div>
                  </div>

                  {/* Show edit and delete buttons only for faculty */}
                  {currentUser?.role === "FACULTY" && (
                    <div className="d-flex align-items-center">
                      <FaPencilAlt
                        onClick={() => {
                          dispatch(setAssignmentForEdit(assignment)); 
                          navigate(`/Kanbas/Courses/${cid}/Assignments/${assignment.id}`);
                        }}
                        className="text-primary me-3 cursor-pointer"
                      />
                      <FaTrash
                        onClick={() => {
                          if (window.confirm("Are you sure you want to delete this assignment?")) {
                            dispatch(deleteAssignment(assignment.id));
                          }
                        }}
                        className="text-danger cursor-pointer"
                      />
                      <FaCheckCircle className="text-success me-2 fs-4" />
                      <FaEllipsisV className="text-muted fs-4" />
                    </div>
                  )}
                </div>
                <hr className="m-0 text-muted" style={{ border: "1px solid lightgrey" }} />
              </div>
            ))
          ) : (
            <div className="text-muted text-center mt-4">No assignments found for this course.</div>
          )}
        </div>
      )}
    </div>
  );
}
