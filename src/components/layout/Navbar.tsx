
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

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
        <button aria-label="Search" className="transition-colors hover:text-dark w-4 h-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </button>

        <button aria-label="Account" className="transition-colors hover:text-dark w-4 h-4">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </button>

        <button aria-label="Shopping bag" className="transition-colors hover:text-dark w-4 h-4">
          <FontAwesomeIcon icon={faBagShopping} size="lg" />
        </button>
      </div>
    </nav>
  );
}
