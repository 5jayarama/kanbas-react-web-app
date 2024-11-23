import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControls";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client"; // Import modules client

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  // Remove module
  const removeModule = async (moduleId: string) => {
    try {
      await modulesClient.deleteModule(moduleId); // Call deleteModule client function
      dispatch(deleteModule(moduleId)); // Dispatch the module ID to remove it from the state
    } catch (error) {
      console.error("Error removing module:", error);
    }
  };

  // Create module
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  // Fetch modules
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div className="wd-modules">
      {/* Show ModulesControls only if the user is FACULTY */}
      {currentUser?.role === "FACULTY" && (
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={createModuleForCourse}
        />
      )}
      <br />
      <br />
      <br />
      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => (
          <li
            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            key={module._id}
          >
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing ? (
                  module.name // Display module name if not editing
                ) : (
                  <input
                    className="form-control w-75 d-inline-block"
                    value={module.name}
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                        dispatch(updateModule({ ...module, editing: false })); // Set editing to false on Enter
                      }
                    }}
                  />
                )}
              </div>
              <div className="d-flex align-items-center">
                {currentUser?.role === "FACULTY" && (
                  <>
                    <FaPencil
                      onClick={() => dispatch(editModule(module._id))}
                      className="text-primary me-2 cursor-pointer"
                    />
                    <FaTrash
                      onClick={() => removeModule(module._id)} // Call removeModule when trash icon is clicked
                      className="text-danger me-2 cursor-pointer"
                    />
                    <span className="me-2">
                      <GreenCheckmark />
                    </span>
                    <BsPlus className="fs-4 me-2" />
                  </>
                )}
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>

            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li
                    className="wd-lesson list-group-item p-3 ps-1"
                    key={lesson._id}
                  >
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
