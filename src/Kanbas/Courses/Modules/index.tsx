import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModulesControls";
import LessonControlButtons from "./LessonControls";
import { BsGripVertical } from "react-icons/bs";
import { FaClipboard } from "react-icons/fa";
export default function Modules() {
    return (
      <div>
        <ModulesControls /><br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        Week 1
        
      </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES
          <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          Introduction to the course
          <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          Learn what is Web Development <LessonControlButtons /></li>
        <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Creating a development environment <LessonControlButtons /></li>
        <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Creating a Web Application <LessonControlButtons /></li>
        <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Getting started with the 1st assignment <LessonControlButtons /></li>
<li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"> 
  <div className="d-flex align-items-center"> 
    <BsGripVertical className="me-2 fs-3" />
    <FaClipboard className="me-2 text-success fs-4" /> 
    <div>
      <span className="fw-bold">LESSON 1</span>
      <div className="text-muted ms-0">
        <span>Multiple Modules</span> | <span>Not available until March 6 at 12:00am</span> |
        <span> Due March 13 at 11:59pm</span> | <span>100 pts</span>
      </div>
    </div>
  </div>
  <div className="d-flex align-items-center"> 
    <LessonControlButtons />
  </div>
</li>
<li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"> 
  <div className="d-flex align-items-center"> 
    <BsGripVertical className="me-2 fs-3" />
    <FaClipboard className="me-2 text-success fs-4" /> 
    <div>
      <span className="fw-bold">LESSON 2</span>
      <div className="text-muted ms-0">
        <span>Multiple Modules</span> | <span>Not available until March 13 at 12:00am</span> |
        <span> Due March 20 at 11:59pm</span> | <span>100 pts</span>
      </div>
    </div>
  </div>
  <div className="d-flex align-items-center">
    <LessonControlButtons />
  </div>
</li>

      </ul>
    </li>
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" />
        Week 2 </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES <LessonControlButtons /></li>
          <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Learn how to create user interfaces with HTML <LessonControlButtons /></li>
          <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Keep working on assignment 1 <LessonControlButtons /></li>
          <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Deploy the assignment to Netlify <LessonControlButtons /></li>
<li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
  <div className="d-flex align-items-center">
    <BsGripVertical className="me-2 fs-3" />
    <FaClipboard className="me-2 text-success fs-4" />
    <div>
      <span className="fw-bold">LESSON 1</span>
      <div className="text-muted ms-0">
        <span>Multiple Modules</span> | <span>Not available until April 6 at 12:00am</span> |
        <span> Due April 13 at 11:59pm</span> | <span>100 pts</span>
      </div>
    </div>
  </div>
  <div className="d-flex align-items-center">
    <LessonControlButtons />
  </div>
</li>
<li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
  <div className="d-flex align-items-center"> 
    <BsGripVertical className="me-2 fs-3" />
    <FaClipboard className="me-2 text-success fs-4" />
    <div>
      <span className="fw-bold">LESSON 2</span>
      <div className="text-muted ms-0">
        <span>Multiple Modules</span> | <span>Not available until April 13 at 12:00am</span> |
        <span> Due April 20 at 11:59pm</span> | <span>100 pts</span>
      </div>
    </div>
  </div>
  <div className="d-flex align-items-center">
    <LessonControlButtons />
  </div>
</li>
      </ul>
    </li>
  </ul> </div>

  );}
  