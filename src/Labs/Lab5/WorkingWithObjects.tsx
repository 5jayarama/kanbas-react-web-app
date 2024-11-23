import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "CS101",
    name: "ReactJS Basics",
    description: "Introduction to ReactJS",
    course: "Full Stack Development",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* Assignment Section */}
      <h4>Modifying Assignment Properties</h4>
      <input
        className="form-control mb-2"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        className="btn btn-primary me-2"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control mb-2"
        type="number"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <a
        className="btn btn-primary me-2"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <div>
        <input
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <a
          className="btn btn-primary"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completed
        </a>
      </div>
      <hr />

      {/* Module Section */}
      <h4>Modifying Module Properties</h4>
      <input
        className="form-control mb-2"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        className="btn btn-success me-2"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Module Name
      </a>
      <input
        className="form-control mb-2"
        defaultValue={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />
      <a
        className="btn btn-success"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>
      <hr />

      {/* Retrieve Module */}
      <h4>Retrieving Module</h4>
      <a
        className="btn btn-info me-2"
        href={`${MODULE_API_URL}`}
        id="wd-retrieve-module"
      >
        Get Module
      </a>
      <a
        className="btn btn-info"
        href={`${MODULE_API_URL}/name`}
        id="wd-retrieve-module-name"
      >
        Get Module Name
      </a>
    </div>
  );
}
