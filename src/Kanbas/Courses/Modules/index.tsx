export default function Modules() {
  return (
    <div id="wd-modules-container">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
        <button id="wd-collapse-all">Collapse All</button>
        <button id="wd-view-progress">View Progress</button>
      </div>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">MODULE CONTENT</span>
              <ul className="wd-content">
                <li className="wd-content-item">Lecture: What is the Internet?</li>
                <li className="wd-content-item">Reading: History of the Web</li>
                <li className="wd-content-item">Quiz: Basics of Web Development</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Understand HTML structure</li>
                <li className="wd-content-item">Introduction to CSS styling</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">MODULE CONTENT</span>
              <ul className="wd-content">
                <li className="wd-content-item">Lecture: HTML Basics</li>
                <li className="wd-content-item">Lab: Create Your First Webpage</li>
                <li className="wd-content-item">Assignment: Build a Personal Website</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Understand JavaScript basics</li>
                <li className="wd-content-item">Write interactive web applications</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">MODULE CONTENT</span>
              <ul className="wd-content">
                <li className="wd-content-item">Lecture: JavaScript Fundamentals</li>
                <li className="wd-content-item">Lab: Adding Interactivity with JS</li>
                <li className="wd-content-item">Quiz: JavaScript Basics</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
