import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex justify-center">
          <li className="mr-6">
            <Link href="#features">
              <a className="hover:text-gray-300">Features</a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="#testimonials">
              <a className="hover:text-gray-300">Testimonials</a>
            </Link>
          </li>
          <li>
            <Link href="#footer">
              <a className="hover:text-gray-300">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
