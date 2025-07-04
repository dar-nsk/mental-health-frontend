import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div>
          <h1 className="text-teal-600 font-bold text-2xl">WISDOM WAVE</h1>
          <span className="text-sm text-gray-500">Your happy place!</span>
        </div>
        <ul className="flex gap-8">
          <li><Link to="/" className="text-gray-800 font-semibold hover:text-teal-600">Home</Link></li>
          <li><a href="#contact" className="text-gray-800 font-semibold hover:text-teal-600">Contact us</a></li>
          <li><a href="#about" className="text-gray-800 font-semibold hover:text-teal-600">About us</a></li>
          
        </ul>
        <div className="flex gap-2">
          <Link to="/auth">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded">Login</button>
          </Link>
          <Link to="/auth">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded">Sign Up</button>
          </Link>

        </div>
      </nav>
    </header>
  );
}
