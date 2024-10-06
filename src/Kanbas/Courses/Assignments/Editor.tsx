import Select from 'react-select';
import { useState } from 'react';
export default function AssignmentEditor() {
  return (
    <div className="container mt-4">
      <form>
        <div className="mb-4">
          <label htmlFor="assignment-name" className="form-label">Assignment Name</label>
          <input
            type="text"
            id="assignment-name"
            className="form-control"
            defaultValue="A1"
          />
        </div>

        <div className="mb-4">
          <textarea
            id="description"
            className="form-control"
            style={{ height: '310px' }} 
            defaultValue={`The assignment is available online.\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n\n- Your full name and section\n- Links to each of the lab assignments\n- Link to the Kanbas application\n- Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`}
          />
        </div>

{/* Points */}
<div className="row justify-content-end">
  <div className="col-md-10"> 
    <div className="d-flex align-items-start mb-3">
      <label htmlFor="points" className="form-label me-2" 
             style={{ width: '25%', textAlign: 'right' }}> 
        Points
      </label>
      <input 
        type="number" 
        id="points" 
        className="form-control" 
        style={{ width: '75%' }} 
        defaultValue={100} 
      />
    </div>
  </div>
</div>


{/* Assignment Group */}
<div className="row justify-content-end">
  <div className="col-md-10"> 
    <div className="d-flex align-items-start mb-3">
      <label htmlFor="assignment-group" className="form-label me-2" 
             style={{ width: '25%', textAlign: 'right' }}> 
        Assignment Group
      </label>
      <select id="assignment-group" className="form-select" 
              style={{ width: '75%' }}> 
        <option>ASSIGNMENTS</option>
      </select>
    </div>
  </div>
</div>

{/* Display Grade As */}
<div className="row justify-content-end">
  <div className="col-md-10">
    <div className="d-flex align-items-start mb-3">
      <label htmlFor="display-grade" className="form-label me-2" 
             style={{ width: '25%', textAlign: 'right' }}> 
        Display Grade as
      </label>
      <select id="display-grade" className="form-select" 
              style={{ width: '75%' }}> 
        <option>Percentage</option>
      </select>
    </div>
  </div>
</div>

{/* Submission Type + Online Entry Options (First Box) */}
<div className="row justify-content-end">
  <div className="col-md-10">
    <div className="d-flex align-items-start">
      <label htmlFor="submission-type" className="form-label me-2" 
             style={{ width: '25%', textAlign: 'right' }}> 
        Submission Type
      </label>
      <fieldset className="border p-4" style={{ width: '75%' }}> 
        <select id="submission-type" className="form-select mb-3">
          <option>Online</option>
        </select>
        <fieldset className="border p-3">
          <legend className="fs-6">Online Entry Options</legend>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="website-url" defaultChecked />
            <label className="form-check-label" htmlFor="website-url">Website URL</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="text-entry" />
            <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="media-recordings" />
            <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="student-annotation" />
            <label className="form-check-label" htmlFor="student-annotation">Student Annotation</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="file-uploads" />
            <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
          </div>
        </fieldset>
      </fieldset>
    </div>
  </div>
</div>

<div className="row justify-content-end mt-4">
  <div className="col-md-10">
    <div className="d-flex align-items-start">
      <label htmlFor="assign-to" className="form-label me-2" 
             style={{ width: '25%', textAlign: 'right' }}> 
        Assign
      </label>
      <fieldset className="border p-4" style={{ width: '75%' }}> 
        <label htmlFor="assign-to-select" className="form-label">Assign to</label>
        <Select
          id="assign-to-select"
          isMulti
          options={[
            { value: 'Everyone', label: 'Everyone' },
          ]}
          defaultValue={{ value: 'Everyone', label: 'Everyone' }}
          className="mb-3"
        />
        {/* Due Date */}
        <label htmlFor="due-date" className="form-label">Due</label>
        <input type="datetime-local" id="due-date" className="form-control mb-3" defaultValue="2024-05-13T23:59" />
        {/* Available From/Until */}
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="available-from" className="form-label">Available from</label>
            <input type="datetime-local" id="available-from" className="form-control mb-3" defaultValue="2024-05-06T00:00" />
          </div>
          <div className="col-md-6">
            <label htmlFor="until" className="form-label">Until</label>
            <input type="datetime-local" id="until" className="form-control mb-3" />
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</div>


        {/* Buttons */}
        <div className="float-end mt-4">
          <button type="button" className="btn btn-secondary me-2">Cancel</button>
          <button type="submit" className="btn btn-success">Save</button>
        </div>
      </form>
    </div>
  );
}
