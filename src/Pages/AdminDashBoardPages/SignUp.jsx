import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaQuestionCircle,
  FaPlus,
} from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
function SignUp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* desktop view */}
      <div className="bg-blue-50 h-screen hidden md:block">
        <nav className="flex flex-col bg-[#110F3E] hidden md:block bg-white border-b-gray-200 border">
          <div className="flex items-center justify-between flex-wrap bg-white px-6 py-2">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <img src={logo} alt="Logo" width={180} />
            </div>

            <div className="flex items-center text-lg">
              <div className="mr-24 font-bold">All Events</div>
              <div className="font-normal">Resources</div>
              <div className="relative  border-2 border-gray-200 ml-24">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FaSearch className="text-black" />
                </span>
                <input
                  className="block pl-10 pr-3 py-2 w-80 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg border-gray-300"
                  type="text"
                  placeholder="Search for events"
                />
              </div>
            </div>

            <div className="flex items-center">
              <FaQuestionCircle size={25} className="text-[#110F3E] mr-8" />
              <FaBell size={25} className="text-[#110F3E] mr-20" />
              <FaUser size={25} className="text-[#110F3E] mr-2" />
            </div>
          </div>
        </nav>
        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-2 " style={{ gap: "1000px" }}>
            <div className="col-span-1 p-4">
              <h2 className="text-4xl font-medium">My Events</h2>
            </div>

            <div className="col-span-1 p-4">
              <Link to="/createvent">
                <div className="flex  mb-4">
                  <label
                    htmlFor="csvUpload"
                    className=" cursor-pointer flex items-center px-4 py-2 font-normal text-lg text-white bg-purple-800  hover:bg-blue-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <FaPlus size={20} className="mr-2" />
                    Create Event
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" mx-auto  mt-10" style={{ maxWidth: "91rem" }}>
          <div className="bg-white shadow-md rounded  pt-6 pb-8 mb-4  w-full">
            <div className="ml-10">
              <div className="text-5xl font-medium mt-6">
                Launch an Event easily
              </div>
              <div className="mt-6 text-normal text-left tracking-wide text-gray-600">
                Engage in in-person and virtual event attendees with a rich{" "}
                <br />
                interactive interface designed to delight. Engage in in-person
                and <br />
                virtual event attendees with a rich interactive interface
                designed <br />
                to delight. Engage in in-person and virtual event attendees with
                a <br />
                rich interactive interface designed to delight.
              </div>
              <div className="flex mt-24 ">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 p-4">
                    <button className="bg-purple-800 hover:bg-purple-600 text-white font-normal py-2 px-6 ">
                      Create Event
                    </button>
                  </div>

                  <div className="col-span-1 p-4">
                    <button className=" hover:bg-purple-800 hover:text-white text-gray-600 font-normal py-2 px-6 border-inherit border ">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="md:hidden ">
        <div className="md:hidden p-4 ">
          <nav className="relative flex items-center justify-between bg-white  border p-4">
            <img src={logo} alt="Logo" width={100} />
            <div className="relative  mr-10  border-2 border-gray-200">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaSearch className="text-black" />
              </span>
              <input
                className="block pl-10 pr-3 py-2 w-32 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm border-gray-300"
                type="text"
                placeholder="Search for events"
              />
            </div>
            <div className="absolute right-4 top-6 md:hidden">
              {isMenuOpen ? (
                <IoMdClose
                  onClick={toggleMenu}
                  className="text-2xl ml-32 bg-white cursor-pointer"
                />
              ) : (
                <IoMdMenu
                  onClick={toggleMenu}
                  className="text-2xl cursor-pointer"
                />
              )}
              {isMenuOpen && (
                <div className=" bg-white mt-6 p-6 rounded-lg shadow-lg ">
                  <a href="#" className="block mt-2 text-gray-600  text-lg">
                    All Events
                  </a>
                  <a
                    href="#"
                    className="block mt-6 text-gray-600  text-lg mt-10"
                  >
                    Resources
                  </a>
                  <div className="flex items-center mt-32 ">
                    <FaQuestionCircle
                      size={20}
                      className="text-[#110F3E] mr-2"
                    />
                    <FaBell size={20} className="text-[#110F3E] mr-4" />
                    <FaUser size={12} className="text-[#110F3E] mr-2" />
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="mt-6 bg-blue-50 px-6 py-10">
            <h2 className="text-3xl font-medium text-left">My Events</h2>
            <div className="text-right ml-20 mt-4">
              <Link to="/createvent">
                <div className="flex  mb-4">
                  <label className="text-sm cursor-pointer bg-purple-800 hover:bg-purple-600 text-white font-normal py-2 px-6 rounded flex items-center px-4 py-2 font-normal text-lg text-white bg-purple-800 ml-10  hover:bg-blue-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <FaPlus size={10} className="mr-2" />
                    Create Event
                  </label>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded pt-6 pb-8 mb-4 mt-6 mb-10">
            <div className="text-center px-4">
              <div className="text-3xl font-medium text-left mt-6">
                Launch an Event easily
              </div>
              <div className="mt-6 text-base text-left tracking-wide text-gray-600">
                Engage in in-person and virtual event attendees with a rich
                interactive interface designed to delight. Engage in in-person
                and virtual event attendees with a rich interactive interface
                designed to delight. Engage in in-person and virtual event
                attendees with a rich interactive interface designed to delight.
              </div>
              <div className="flex flex-col mt-8 space-y-4">
                <button className="bg-purple-800 hover:bg-purple-600 text-white font-normal py-2 px-6">
                  Create Event
                </button>
                <button className="hover:bg-purple-800 hover:text-white text-gray-600 font-normal py-2 px-6 border-inherit border">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
