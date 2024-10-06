import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
<div id="wd-dashboard">
  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
  <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
  <div id="wd-dashboard-courses" className="row">
    <div className="row row-cols-1 row-cols-md-5 g-4">
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img
              src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"
              width="100%"
              height={160}
              alt="ReactJS logo"
            />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
          <img
              src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"
              width="100%"
              height={160}
              alt="ReactJS logo"
            />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">CS5678 Bootstrap</h5>
              <p className="wd-dashboard-course-title card-text">
                Frontend Framework Basics
              </p>
              <button className="btn btn-secondary" disabled> Go </button>
            </div>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
          <img
              src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"
              width="100%"
              height={160}
              alt="ReactJS logo"
            />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">CS1010 HTML</h5>
              <p className="wd-dashboard-course-title card-text">
                Web Development Foundations
              </p>
              <button className="btn btn-secondary" disabled> Go </button>
            </div>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
          <img
              src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"
              width="100%"
              height={160}
              alt="ReactJS logo"
            />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">CS1122 JavaScript</h5>
              <p className="wd-dashboard-course-title card-text">
                Advanced JavaScript Concepts
              </p>
              <button className="btn btn-secondary" disabled> Go </button>
            </div>
          </div>
        </div>
    </div>
  </div></div>

  );
}
