
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-2 shadow-md">
      <div className="text-lg font-semibold">Farié</div>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}