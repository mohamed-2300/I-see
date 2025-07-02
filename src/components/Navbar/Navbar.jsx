import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Logo from "../../assets/i_see.png";

// Use 'path' consistently for all menu items
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    path: "#",
  },
  {
    id: 3,
    title: "How It Works",
    path: "#",
  },
  {
    id: 4,
    title: "About Us",
    path: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "#",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="w-28 flex justify-between items-center">
          <img src={Logo} alt="I See Logo" style={{ height: "50px" }} />
          <h1 className="font-bold text-2xl">I See</h1>
        </div>
        {/* Desktop Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <li>
              <button className="primary-btn">Sign In</button>
            </li>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="focus:outline-none"
          >
            <IoMdMenu className="text-4xl" />
          </button>
        </div>
      </motion.div>
      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white w-3/4 max-w-xs h-full p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <img src={Logo} alt="I See Logo" style={{ height: "40px" }} />
                <span className="font-bold text-xl">I See</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="focus:outline-none"
              >
                <IoMdClose className="text-3xl" />
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.path}
                    className="block py-2 px-3 hover:text-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <li>
                <button className="primary-btn w-full" onClick={() => setMobileMenuOpen(false)}>
                  Sign In
                </button>
              </li>
            </ul>
          </motion.div>
          {/* Click outside to close */}
          <div
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={-1}
            aria-hidden="true"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;