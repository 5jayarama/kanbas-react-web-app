import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment, setAssignmentForEdit } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const assignmentToEdit = useSelector((state: any) => state.assignmentsReducer.assignmentToEdit);

  const [assignment, setAssignment] = useState({
    _id: "",
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    until: "",
  });

  // Fetch the assignment data to edit
  useEffect(() => {
    if (aid) {
      dispatch(setAssignmentForEdit(aid));
    }
  }, [aid, dispatch]);

  // Update local state with assignment data
  useEffect(() => {
    if (assignmentToEdit) {
      setAssignment({
        ...assignmentToEdit,
        availableFrom: assignmentToEdit.availableDate
          ? new Date(assignmentToEdit.availableDate).toISOString().slice(0, 16)
          : "",
        dueDate: assignmentToEdit.dueDate
          ? new Date(assignmentToEdit.dueDate).toISOString().slice(0, 16)
          : "",
        until: assignmentToEdit.until
          ? new Date(assignmentToEdit.until).toISOString().slice(0, 16)
          : "",
      });
    }
  }, [assignmentToEdit]);

  // Save changes
  const handleSave = () => {
    dispatch(
      updateAssignment({
        ...assignment,
        availableDate: new Date(assignment.availableFrom).toISOString(),
        dueDate: new Date(assignment.dueDate).toISOString(),
        until: assignment.until ? new Date(assignment.until).toISOString() : null,
      })
    );
  };

  return (
    <div className="container mt-4">
      <form>
        {/* Assignment Name */}
        <div className="mb-3">
          <label htmlFor="assignment-name" className="form-label">Assignment Name</label>
          <input
            type="text"
            id="assignment-name"
            className="form-control"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </div>

        {/* Assignment Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            className="form-control"
            rows={4}
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </div>

        {/* Points */}
        <div className="row mb-3 align-items-center">
          <label htmlFor="points" className="col-md-2 col-form-label text-md-end">Points</label>
          <div className="col-md-10">
            <input
              type="number"
              id="points"
              className="form-control"
              value={assignment.points}
              onChange={(e) =>
                setAssignment({ ...assignment, points: Number(e.target.value) })
              }
            />
          </div>
        </div>

        {/* Date Fields */}
        <div className="row align-items-center">
          <label className="col-md-2 col-form-label text-md-end">Dates</label>
          <div className="col-md-10">
            <fieldset className="border p-3" style={{ borderRadius: "5px" }}>
              <div className="mb-3">
                <label htmlFor="due-date" className="form-label">Due Date</label>
                <input
                  type="datetime-local"
                  id="due-date"
                  className="form-control"
                  value={assignment.dueDate}
                  onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="available-from" className="form-label">Start Date</label>
                  <input
                    type="datetime-local"
                    id="available-from"
                    className="form-control"
                    value={assignment.availableFrom}
                    onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="until" className="form-label">End Date</label>
                  <input
                    type="datetime-local"
                    id="until"
                    className="form-control"
                    value={assignment.until}
                    onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end mt-4">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger" onClick={handleSave}>
            Save
          </Link>
        </div>
      </form>
    </div>
  );
}
