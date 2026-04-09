import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">ICCK Tampere</h1>

      <div className="space-x-6">
        <Link className="hover:text-yellow-300 transition" to="/">Home</Link>
        <Link className="hover:text-yellow-300 transition" to="/about">About</Link>
        <Link className="hover:text-yellow-300 transition" to="/events">Events</Link>
        <Link className="hover:text-yellow-300 transition" to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;