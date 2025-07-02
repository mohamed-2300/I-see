import React, { useState, useEffect, useRef } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/i_see.png";

// Use 'path' consistently for all menu items
const NavbarMenu = [
  { id: 1, title: "Home", path: "#hero" },
  { id: 2, title: "Features", path: "#features" },
  { id: 3, title: "How It Works", path: "#works" },
  { id: 4, title: "About Us", path: "#about" },
  { id: 5, title: "Contact Us", path: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY <= 0);

      if (currentScrollY <= 0) {
        setShowNavbar(true); // Always show at the very top
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false); // Scrolling down, hide navbar
      } else {
        setShowNavbar(true); // Scrolling up, show navbar
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Classes for navbar background and transition
  const navBgClasses = atTop
    ? "bg-transparent"
    : "bg-white/70 backdrop-blur-md shadow";
  const navTransition =
    "transition-all duration-300 ease-in-out";

  return (
    <>
      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            key="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-0 left-0 w-full z-50 ${navBgClasses} ${navTransition}`}
          >
            <div className="container py-6 flex justify-between items-center">
              {/* Logo section */}
              <a href="#hero">
              <div className="w-28 flex justify-between items-center">
                <img src={Logo} alt="I See Logo" style={{ height: "50px" }} />
                <h1 className="font-bold text-2xl">I See</h1>
              </div></a>
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
                    <button className="primary-btn">
                     <a href="#subscribe"> Sign In</a></button>
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
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex"
          >
            <motion.div
              initial={false}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
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
          </motion.div>
        )}
      </AnimatePresence>
      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-[80px] lg:h-[96px]" />
    </>
  );
};

export default Navbar;