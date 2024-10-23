import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControls";
import { BsGripVertical } from "react-icons/bs";
import { BsPlus } from 'react-icons/bs';
import { useParams } from "react-router";
import * as db from "../../Database"; // Import the modules and courses

export default function Modules() {
  const { cid } = useParams();
  
  // Debug: Check the extracted course ID
  console.log("Extracted course ID (cid):", cid);
  
  // Filter the modules based on the course ID
  const modules = db.modules.filter((module: any) => module.course === cid);

  // Debug: Check if the modules are correctly filtered
  console.log("Filtered modules for course:", modules);

  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                {module.name} {/* Display module name */}
              </div>
              <div className="d-flex align-items-center">
                <BsPlus className="ms-2 fs-3" />
                <LessonControlButtons />
              </div>
            </div>
            
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1" key={lesson._id}>
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name} {/* Display lesson name */}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
