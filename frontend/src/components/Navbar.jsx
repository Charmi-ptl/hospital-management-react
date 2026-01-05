import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // to highlight active link

  const linkClasses = (path) =>
    `hover:text-gray-200 transition-colors ${
      location.pathname === path ? "font-bold underline" : ""
    }`;

  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo / Brand */}
      <Link to="/" className="font-bold text-xl flex items-center gap-2">
        🏥 CityCare
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <Link to="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link to="/doctors" className={linkClasses("/doctors")}>
          Doctors
        </Link>
        <Link to="/appointments" className={linkClasses("/appointments")}>
          Appointments
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
