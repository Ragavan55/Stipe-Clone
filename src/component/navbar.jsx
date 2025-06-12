import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Lucide icons are simple and Tailwind-compatible

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Products", "Solutions", "Developers", "Resources", "Pricing"];

  return (
    <header className="bg-transparent relative top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <p className="text-2xl font-bold cursor-pointer">stripe</p>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-black font-semibold">
          {menuItems.map((item) => (
            <a key={item} href="#" className="hover:text-gray-500 transition">{item}</a>
          ))}
          <a href="#" className="hover:text-gray-500">Sign in</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-black transition">
            Contact Sales
          </button>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white border-t border-gray-200">
          <nav className="flex flex-col gap-4 text-black font-semibold">
            {menuItems.map((item) => (
              <a key={item} href="#" className="hover:text-gray-500 transition">{item}</a>
            ))}
            <a href="#" className="hover:text-gray-500">Sign in</a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-black transition">
              Contact Sales
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
