export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "200px" }}>
      <h2>Course Status</h2>
      
      {/* Publish/Unpublish Buttons */}
      <div style={{ marginBottom: "10px" }}>
        <button style={{ marginRight: "5px" }}>Unpublish</button>
        <button>Publish</button>
      </div>
      
      {/* Other Actions */}
      <div>
        <button style={{ display: "block", width: "100%", marginBottom: "5px" }}>Import Existing Content</button>
        <button style={{ display: "block", width: "100%", marginBottom: "5px" }}>Import from Commons</button>
        <button style={{ display: "block", width: "100%", marginBottom: "5px" }}>Choose Home Page</button>
        <button style={{ display: "block", width: "100%", marginBottom: "5px" }}>View Course Stream</button>
        <button style={{ display: "block", width: "100%", marginBottom: "5px" }}>New Announcement</button>
        <button style={{ display: "block", width: "100%", marginBottom: "5px" }}>New Analytics</button>
        <button style={{ display: "block", width: "100%" }}>View Course Notifications</button>
      </div>
    </div>
  );
}
