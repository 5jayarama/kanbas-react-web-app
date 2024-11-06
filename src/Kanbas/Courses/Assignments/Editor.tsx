import { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid } = useParams();
  
  const [assignment, setAssignment] = useState({
    name: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    dueDate: "",
    availableFrom: "",
    until: "",
  });

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
            value={assignment.name}
            onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
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

        {/* Assign Box */}
        <div className="row align-items-center">
          <label className="col-md-2 col-form-label text-md-end">Assign</label>
          <div className="col-md-10">
            <fieldset className="border p-3" style={{ borderRadius: "5px" }}>
              <div className="mb-3">
                <label htmlFor="due-date" className="form-label">Due</label>
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
                  <label htmlFor="available-from" className="form-label">Available From</label>
                  <input
                    type="datetime-local"
                    id="available-from"
                    className="form-control"
                    value={assignment.availableFrom}
                    onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="until" className="form-label">Available Until</label>
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
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">
            Save
          </Link>
        </div>
      </form>
    </div>
  );
}
