"use client";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const menuItems = [
    { name: "Home", link: "#" },
    { name: "About us", link: "#" },
    { name: "Services", link: "#" },
  ];

  const languageDropdown = (
    <div className="relative">
      <button
        onClick={() => setLangOpen(!langOpen)}
        className="flex items-center text-sm cursor-pointer"
      >
        {selectedLang}
        <span className={`transition-transform duration-200 ${langOpen ? "rotate-180" : "rotate-0"}`}>
          ▼
        </span>
      </button>
      {langOpen && (
        <div className="absolute left-0 mt-2 w-20 bg-white shadow-lg border rounded cursor-pointer">
          {["EN", "TA"].map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setSelectedLang(lang);
                setLangOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-black hover:text-white"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center space-x-15 w-full">  
        <div className="text-3xl mb-2 font-bold">logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold">
          {menuItems.map((item) => (
            <a key={item.name} href={item.link} className="">
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Language & Contact Button */}
      <div className="hidden md:flex items-center space-x-12 relative">
        {languageDropdown}
        <button className="bg-black text-white px-9 py-2 rounded-2xl">Contact</button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 space-y-4">
          {menuItems.map((item) => (
            <a key={item.name} href={item.link} className="hover:bg-black hover:text-white  ">
              {item.name}
            </a>
          ))}
          {languageDropdown}
          <button className="bg-black text-white px-4 py-2 rounded-2xl">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
