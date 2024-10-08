import { useState } from "react";
import { FaGripVertical, FaRegClipboard, FaChevronDown, FaChevronRight, FaCheckCircle, FaEllipsisV, FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Assignments() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignments..."
          />
        </div>
        
        <div>
          <button className="btn btn-light border me-2">
            <FaPlus className="me-2" /> Group
          </button>
          <Link to="./Editor" className="btn btn-danger">
            <FaPlus className="me-2" /> Assignment
          </Link>
        </div>
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
          <div className="d-flex align-items-center justify-content-between border-start border-3 border-success p-3">
            <div className="d-flex align-items-center">
              <FaGripVertical className="me-2 fs-4" />
              <FaRegClipboard className="text-success me-3 fs-4" />
              <div>
                <h6 className="m-0">A1</h6>
                <p className="text-muted m-0">
                  Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
                </p>
              </div>
            </div>
            <div>
              <FaCheckCircle className="text-success me-2 fs-4" />
              <FaEllipsisV className="text-muted fs-4" />
            </div>
          </div>
          <hr className="m-0 text-muted" style={{ border: "1px solid lightgrey" }} />

          <div className="d-flex align-items-center justify-content-between border-start border-3 border-success p-3">
            <div className="d-flex align-items-center">
              <FaGripVertical className="me-2 fs-4" />
              <FaRegClipboard className="text-success me-3 fs-4" />
              <div>
                <h6 className="m-0">A2</h6>
                <p className="text-muted m-0">
                  Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts
                </p>
              </div>
            </div>
            <div>
              <FaCheckCircle className="text-success me-2 fs-4" />
              <FaEllipsisV className="text-muted fs-4" />
            </div>
          </div>
          <hr className="m-0 text-muted" style={{ border: "1px solid lightgrey" }} />

          <div className="d-flex align-items-center justify-content-between border-start border-3 border-success p-3">
            <div className="d-flex align-items-center">
              <FaGripVertical className="me-2 fs-4" />
              <FaRegClipboard className="text-success me-3 fs-4" />
              <div>
                <h6 className="m-0">A3</h6>
                <p className="text-muted m-0">
                  Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts
                </p>
              </div>
            </div>
            <div>
              <FaCheckCircle className="text-success me-2 fs-4" />
              <FaEllipsisV className="text-muted fs-4" />
            </div>
          </div>
          <hr className="m-0 text-muted" style={{ border: "1px solid lightgrey" }} />
        </div>
      )}
    </div>
  );
}
