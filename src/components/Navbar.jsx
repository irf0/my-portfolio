import React, { useEffect, useState } from "react";
import logo2 from "../assets/logo2.jpg";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
import { github } from "../assets";
import { linkedin } from "../assets";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex items-center justify-around">
      <div className="flex items-center p-4">
        <Link
          to={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo2} alt="logo" className="w-12 h-12 rounded-full mr-2" />
        </Link>
        <h2 className="font-extrabold">M Irfan</h2>
      </div>

      <div className="flex gap-5">
        <a href="https://github.com/irf0" target="_blank">
          <img src={github} alt="github" className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/dev-irfan/" target="_blank">
          <img src={linkedin} alt="github" className="w-6 h-6" />
        </a>
      </div>

      <div className="flex list-none sm:hidden">
        {navLinks.map((link) => (
          <ul>
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white font-semibold"
                  : "text-gray-700"
              }hover:text-white cursor-pointer py-2 px-4`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          </ul>
        ))}
      </div>
      <img
        src={menu}
        alt="menu"
        onClick={() => setToggleMenu(true)}
        className="lg:hidden xl:hidden"
      />
      {toggleMenu && (
        <div className="w-40 h-52 black-gradient rounded-xl absolute z-10 right-0 top-3">
          <div className="flex items-start justify-end">
            <AiOutlineClose
              onClick={() => setToggleMenu(false)}
              className="text-white mr-2 mt-1 text-lg"
            />
          </div>

          {/* //Mobile nav contents */}
          {navLinks.map((link) => (
            <ul className="flex items-center gap-4 text-white flex-col">
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white font-semibold"
                    : "text-gray-700"
                }hover:text-white cursor-pointer py-2 px-4`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            </ul>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
