export default function Assignments() {
  return (
    <div id="wd-assignments">
      {/* Buttons */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <input
          id="wd-search-assignment"
          placeholder="Search for Assignments"
          style={{ flex: 1, marginRight: "10px", padding: "5px" }}
        />
        <button id="wd-add-assignment-group" style={{ marginRight: "5px" }}>
          + Group
        </button>
        <button id="wd-add-assignment">+ Assignment</button>
      </div>

      {/* Header for Assignments */}
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total{" "}
        <button style={{ marginLeft: "10px" }}>+</button>
      </h3>

      {/* Assignments */}
      <ul id="wd-assignment-list">
        {/* A1 */}
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A1 - ENV + HTML
          </a>
          <div>Multiple Modules | Not available until May 6 at 12:00am</div>
          <div>Due May 13 at 11:59pm | 100 pts</div>
        </li>

        {/* A2 */}
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/124"
          >
            A2 - CSS + BOOTSTRAP
          </a>
          <div>Multiple Modules | Not available until May 13 at 12:00am</div>
          <div>Due May 20 at 11:59pm | 100 pts</div>
        </li>

        {/* A3 */}
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/125"
          >
            A3 - JAVASCRIPT + REACT
          </a>
          <div>Multiple Modules | Not available until May 20 at 12:00am</div>
          <div>Due May 27 at 11:59pm | 100 pts</div>
        </li>
      </ul>
    </div>
  );
}
