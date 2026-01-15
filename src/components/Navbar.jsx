import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-semibold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          Krishna
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Experience", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white font-medium transition
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-yellow-400 after:transition-all
                hover:after:w-full hover:text-yellow-400"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

     
      {open && (
        <div className="md:hidden bg-black/90 px-6 pb-4 space-y-4">
          {["Home", "Experience", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-white font-medium hover:text-yellow-400"
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
