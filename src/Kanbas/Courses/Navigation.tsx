import { Link, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "People"];
  return (
    <div>
      {links.map((link) => (
        <div
          id="wd-courses-navigation"
          className="wd list-group fs-5 rounded-0"
        >
          <Link
            to={link}
            className={`list-group-item border border-0
            ${pathname.includes(link) ? "active" : "text-danger"}`}
          >
            {link}
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}
