
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-soft-pink px-6 py-4 shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-semibold text-black">
        Farié
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-8">
        <li>
          <a href="#" className="border-b-2 border-purple pb-1 text-purple">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-dark transition-colors hover:text-purple">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className="text-dark transition-colors hover:text-purple">
            Collections
          </a>
        </li>
        <li>
          <a href="#" className="text-dark transition-colors hover:text-purple">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-dark transition-colors hover:text-purple">
            Contact
          </a>
        </li>
      </ul>

      {/* Action Icons */}
      <div className="flex items-center gap-6 text-purple">
        <button aria-label="Search">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </button>

        <button aria-label="Account">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </button>

        <button aria-label="Shopping bag">
          <FontAwesomeIcon icon={faBagShopping} size="lg" />
        </button>
      </div>
    </nav>
  );
}
