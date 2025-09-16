import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">🌱 FarmSense</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/upload" className="hover:text-gray-200">Upload</Link>
        <Link to="/about" className="hover:text-gray-200">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
