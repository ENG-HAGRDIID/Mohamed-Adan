import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="bg-blue-600 p-4 text-white fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Voting App</h1>
          <nav>
            <Link to="/" className="mr-4 hover:underline">Home</Link>
            <Link to="/signin" className="mr-4 hover:underline">Sign In</Link>
            <Link to="/signup" className="mr-4 hover:underline">Sign Up</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
