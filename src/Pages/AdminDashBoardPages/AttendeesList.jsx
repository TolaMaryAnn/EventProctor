import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoMdMenu, IoMdClose, IoMdSend } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import {RiDeleteBinLine, RiArrowDropDownLine} from "react-icons/ri"
import {
  FaSearch,
  FaBell,
  FaUser,
  FaQuestionCircle,
  FaPlus,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function AttendeesList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      <div className=" h-screen  hidden md:block">
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

        <div className="flex justify-between bg-white px-6 py-2 ">
          <div className="flex flex-col text-white mr-6 w-1/7 ">
            <div className="text-purple-800 font-bold text-lg mt-10 px-10">
              Eventide
            </div>

            <div className="text-gray-600 font-bold text-lg mt-16 px-10">
              Home
            </div>
            <div className="text-black mt-16 border px-10 py-2 rounded-lg bg-purple-800 text-white">
              Attendees
            </div>
            <div
              className=" text-gray-600 font-bold text-lg px-10 "
              style={{ marginTop: "900px" }}
            >
              Help
            </div>
          </div>
          <div className="flex flex-col  w-1/7  mr-6">
            <div className="flex justify-center mt-6">
              <div className="grid grid-cols-2 " style={{ gap: "750px" }}>
                <div className="col-span-1 p-4">
                  <h2 className="text-4xl font-medium">Attendees</h2>
                  <div className="text-gray-600 text-lg mt-2 font-medium">
                    All attendants will be displayed here
                  </div>
                </div>

                <div className="col-span-1 p-4">
                  <button className="bg-purple-800 hover:bg-purple-600 text-white font-normal py-2 px-10 rounded ml-36">
                    Add invite
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between p-4 mt-6">
              
              <div className="flex-grow mr-4">
                
                <input
                  type="text"
                  placeholder="Search for attendees..."
                  className="w-8/12 px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-purple-800"
                />
              </div>
              <div className="flex items-center space-x-6 mr-96 px-6 py-2 font-semibold text-purple-800 border hover:text-white  hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <IoMdSend className="text-gray-600" size={25}/>
                <button className="">
                  Send Invite
                </button>
                <RiArrowDropDownLine className="text-gray-600" size={35}/>
              </div>
              <div className="flex items-center space-x-6 mt-4 px-10 py-2 font-semibold text-gray-600 border hover:text-white  hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-green-500">
                <IoFilterOutline className="text-gray-600 " size={25} />
                <button className="">
                  Apply Filter
                </button>
              </div>

            </div>
            <div className="p-4 mt-10 border rounded-lg">
              {/* Table Header */}
              <div className="flex justify-between p-2 border-b-2 text-lg text-gray-500 bg-blue-50">
                <div className="flex-1">Name</div>
                <div className="flex-1 ml-96">Email Address</div>
                <div className="flex-1 ml-60">Status</div>
              </div>

              <div className="flex justify-between p-2 border-b-2 text-lg text-gray-500 mt-6">
                <div className="flex-1">Jane Patrick</div>
                <div className="flex-1 " style={{ marginLeft: "26rem" }}>
                  janepatrick@gmail.com
                </div>
                <div className="flex-1 ml-72 text-purple-800">. Accepted</div>
                <div>
                  <RiDeleteBinLine className="text-gray-600 " size={25} />
                </div>
              </div>

              <div className="flex justify-between p-2 border-b-2 text-lg text-gray-500 mt-6">
                <div className="flex-1">Jane Patrick</div>
                <div className="flex-1 " style={{ marginLeft: "26rem" }}>
                  janepatrick@gmail.com
                </div>
                <div className="flex-1 ml-72 text-red-700">. Pending</div>
                <div>
                <RiDeleteBinLine className="text-gray-600 " size={25} />
                </div>
              </div>
              <div className="flex justify-between p-2 border-b-2 text-lg text-gray-500 mt-6">
                <div className="flex-1">Jane Patrick</div>
                <div className="flex-1 " style={{ marginLeft: "26rem" }}>
                  janepatrick@gmail.com
                </div>
                <div className="flex-1 ml-72 text-red-400">. Rejected</div>
                <div>
                <RiDeleteBinLine className="text-gray-600 " size={25} />
                </div>
              </div>
              <div className="flex justify-between p-2 border-b-2 text-lg text-gray-500 mt-6">
                <div className="flex-1">Jane Patrick</div>
                <div className="flex-1 " style={{ marginLeft: "26rem" }}>
                  janepatrick@gmail.com
                </div>
                <div className="flex-1 ml-72 text-purple-800">. Accepted</div>
                <div>
                <RiDeleteBinLine className="text-gray-600 " size={25} />
                </div>
              </div>

              <div className="flex justify-between p-2 border-b-2 text-lg text-gray-500 mt-6">
                <div className="flex-1">Jane Patrick</div>
                <div className="flex-1 " style={{ marginLeft: "26rem" }}>
                  janepatrick@gmail.com
                </div>
                <div className="flex-1 ml-72 text-red-700">. Pending</div>
                <div>
                <RiDeleteBinLine className="text-gray-600 " size={25} />
                </div>
              </div>
              <div className="flex justify-between p-2 border-b-2 text-lg text-gray-500 mt-6">
                <div className="flex-1">Jane Patrick</div>
                <div className="flex-1 " style={{ marginLeft: "26rem" }}>
                  janepatrick@gmail.com
                </div>
                <div className="flex-1 ml-72 text-red-400">. Rejected</div>
                <div>
                <RiDeleteBinLine className="text-gray-600 " size={25} />
                </div>
              </div>
              <div className="flex justify-between p-2 border-b-2 text-lg text-gray-500 mt-6">
                <div className="flex-1">Jane Patrick</div>
                <div className="flex-1 " style={{ marginLeft: "26rem" }}>
                  janepatrick@gmail.com
                </div>
                <div className="flex-1 ml-72 text-purple-800">. Accepted</div>
                <div>
                <RiDeleteBinLine className="text-gray-600 " size={25} />
                </div>
              </div>

              <div className="flex justify-between p-2 border-b-2 text-lg text-gray-500 mt-6">
                <div className="flex-1">Jane Patrick</div>
                <div className="flex-1 " style={{ marginLeft: "26rem" }}>
                  janepatrick@gmail.com
                </div>
                <div className="flex-1 ml-72 text-red-700">. Pending</div>
                <div>
                <RiDeleteBinLine className="text-gray-600 " size={25} />
                </div>
              </div>
              <div className="flex justify-between p-2 border-b-2 text-lg text-gray-500 mt-6">
                <div className="flex-1">Jane Patrick</div>
                <div className="flex-1 " style={{ marginLeft: "26rem" }}>
                  janepatrick@gmail.com
                </div>
                <div className="flex-1 ml-72 text-red-400">. Rejected</div>
                <div>
                <RiDeleteBinLine className="text-gray-600 " size={25} />
                </div>
              </div>
              <div className="flex justify-between p-2 border-b-2 text-lg text-gray-500 mt-6">
                <div className="flex-1">Jane Patrick</div>
                <div className="flex-1 " style={{ marginLeft: "26rem" }}>
                  janepatrick@gmail.com
                </div>
                <div className="flex-1 ml-72 text-red-700">. Pending</div>
                <div>
                <RiDeleteBinLine className="text-gray-600 " size={25} />
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={handlePrevious}
                  className="px-4 py-2 text-gray-500 focus:outline-none border"
                >
                  Previous
                </button>
                <div className="flex justify-center flex-grow">
                  {[...Array(totalPages).keys()].map((page) => (
                    <button
                      key={page + 1}
                      onClick={() => setCurrentPage(page + 1)}
                      className={`px-4 py-2 mx-1 ${
                        currentPage === page + 1 ? "bg-blue-50" : "bg-white"
                      } text-gray-500 rounded-lg text-xl hover:bg-purple-800 hover:text-white focus:outline-none`}
                    >
                      {page + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 text-gray-500 focus:outline-none border"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <nav className="relative flex items-center justify-between bg-white border-b-gray-200 border p-4">
          <img src={logo} alt="Logo" width={100} />
          <div className="absolute right-4 top-4 md:hidden">
            {isMenuOpen ? (
              <IoMdClose
                onClick={toggleMenu}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <IoMdMenu
                onClick={toggleMenu}
                className="text-2xl cursor-pointer"
              />
            )}
            {isMenuOpen && (
              <div className=" bg-white mt-2 p-6 rounded-lg shadow-lg ">
                <a
                  href="#"
                  className="block mt-2 text-purple-800 font-bold text-lg"
                >
                  Eventide
                </a>
                <a
                  href="#"
                  className="block mt-2 text-gray-600 font-bold text-lg mt-20"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block mt-2 text-black font-bold bg-purple-800 text-white py-2 px-4 rounded-lg mt-20"
                >
                  Attendees
                </a>
                <a
                  href="#"
                  className="block mt-2 text-gray-600 font-bold text-lg mt-72 mb-20"
                >
                  Help
                </a>
              </div>
            )}
          </div>
        </nav>
        <div className="p-4">
          <h2 className="text-3xl font-medium mb-4">Attendees</h2>
          <div className="text-gray-600 text-base mb-4 font-medium">
            All attendants will be displayed here
          </div>
          <div className="col-span-1 p-4">
            <div className="flex  mb-4">
              <label
                htmlFor="csvUpload"
                className=" cursor-pointer flex items-center px-4 py-2 font-normal text-base text-white bg-purple-800  hover:bg-blue-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FaPlus size={20} className="mr-2" />
                Add invite
              </label>
            </div>
          </div>
        </div>

        <div className="p-4">
          <input
            type="text"
            placeholder="Search for attendees..."
            className="w-full px-4 py-2 border mb-4 focus:outline-none focus:ring-2 focus:ring-purple-800 text-sm"
          />
         
          <div>
            <div className="flex items-center space-x-2 w-1/2 px-4 py-2 text-sm font-semibold text-gray-600 border hover:text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-green-500">
              <IoMdSend className="text-gray-600" size={20}/>
              <button className="">
                Send Invite
              </button>
              <RiArrowDropDownLine className="text-gray-600" size={20}/>
            </div>
            <div className="flex items-center space-x-2 w-1/2  mt-4 px-4 py-2 text-sm font-semibold text-gray-600 border hover:text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-green-500">
              <IoFilterOutline className="text-gray-600" />
              <button className="">
                Apply Filter
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded-lg overflow-x-auto">
          <div className="min-w-full inline-block">
            <div className="p-2 border-b-2 text-base text-gray-500 bg-blue-50 flex justify-between min-w-[700px]">
              <div className="w-1/3">Name</div>
              <div className="w-1/3 text-center">Email Address</div>
              <div className="w-1/3 text-center">Status</div>
              <div className="w-1/3 text-center">.</div>
            </div>
            <div className="  mt-8 p-2 border-b-2 text-base text-gray-500  flex justify-between min-w-[700px]">
              <div className="w-1/3">Jane Patrick</div>
              <div className="w-1/3 text-center">janepatrick@gmail.com</div>
              <div className="w-1/3 text-center text-purple-800">.Accepted</div>
              <div className="w-1/3 text-center"> <RiDeleteBinLine className="text-gray-600 " size={25} /></div>
            </div>

            <div className="  mt-8 p-2 border-b-2 text-base text-gray-500  flex justify-between min-w-[700px]">
              <div className="w-1/3">Jane Patrick</div>
              <div className="w-1/3 text-center">janepatrick@gmail.com</div>
              <div className="w-1/3 text-center text-red-700">.Pending</div>
              <div className="w-1/3 text-center"> <RiDeleteBinLine className="text-gray-600 " size={25} /></div>
            </div>
            <div className="  mt-8 p-2 border-b-2 text-base text-gray-500  flex justify-between min-w-[700px]">
              <div className="w-1/3">Jane Patrick</div>
              <div className="w-1/3 text-center">janepatrick@gmail.com</div>
              <div className="w-1/3 text-center text-red-400">.Rejected</div>
              <div className="w-1/3 text-center"> <RiDeleteBinLine className="text-gray-600 " size={25} /></div>
            </div>
            <div className="  mt-8 p-2 border-b-2 text-base text-gray-500  flex justify-between min-w-[700px]">
              <div className="w-1/3">Jane Patrick</div>
              <div className="w-1/3 text-center">janepatrick@gmail.com</div>
              <div className="w-1/3 text-center text-purple-800">.Accepted</div>
              <div className="w-1/3 text-center"> <RiDeleteBinLine className="text-gray-600 " size={25} /></div>
            </div>

            <div className="  mt-8 p-2 border-b-2 text-base text-gray-500  flex justify-between min-w-[700px]">
              <div className="w-1/3">Jane Patrick</div>
              <div className="w-1/3 text-center">janepatrick@gmail.com</div>
              <div className="w-1/3 text-center text-red-700">.Pending</div>
              <div className="w-1/3 text-center"> <RiDeleteBinLine className="text-gray-600 " size={25} /></div>
            </div>
            <div className="  mt-8 p-2 border-b-2 text-base text-gray-500  flex justify-between min-w-[700px]">
              <div className="w-1/3">Jane Patrick</div>
              <div className="w-1/3 text-center">janepatrick@gmail.com</div>
              <div className="w-1/3 text-center text-red-400">.Rejected</div>
              <div className="w-1/3 text-center"> <RiDeleteBinLine className="text-gray-600 " size={25} /></div>
            </div>
            <div className="  mt-8 p-2 border-b-2 text-base text-gray-500  flex justify-between min-w-[700px]">
              <div className="w-1/3">Jane Patrick</div>
              <div className="w-1/3 text-center">janepatrick@gmail.com</div>
              <div className="w-1/3 text-center text-purple-800">.Accepted</div>
              <div className="w-1/3 text-center"> <RiDeleteBinLine className="text-gray-600 " size={25} /></div>
            </div>

            <div className="  mt-8 p-2 border-b-2 text-base text-gray-500  flex justify-between min-w-[700px]">
              <div className="w-1/3">Jane Patrick</div>
              <div className="w-1/3 text-center">janepatrick@gmail.com</div>
              <div className="w-1/3 text-center text-red-700">.Pending</div>
              <div className="w-1/3 text-center"> <RiDeleteBinLine className="text-gray-600 " size={25} /></div>
            </div>
            <div className="  mt-8 p-2 border-b-2 text-base text-gray-500  flex justify-between min-w-[700px]">
              <div className="w-1/3">Jane Patrick</div>
              <div className="w-1/3 text-center">janepatrick@gmail.com</div>
              <div className="w-1/3 text-center text-red-400">.Rejected</div>
              <div className="w-1/3 text-center"> <RiDeleteBinLine className="text-gray-600 " size={25} /></div>
            </div>
            <div className="  mt-8 p-2 border-b-2 text-base text-gray-500  flex justify-between min-w-[700px]">
              <div className="w-1/3">Jane Patrick</div>
              <div className="w-1/3 text-center">janepatrick@gmail.com</div>
              <div className="w-1/3 text-center text-purple-800">.Accepted</div>
              <div className="w-1/3 text-center"> <RiDeleteBinLine className="text-gray-600 " size={25} /></div>
            </div>

            <div className="  mt-8 p-2 border-b-2 text-base text-gray-500  flex justify-between min-w-[700px]">
              <div className="w-1/3">Jane Patrick</div>
              <div className="w-1/3 text-center">janepatrick@gmail.com</div>
              <div className="w-1/3 text-center text-red-700">.Pending</div>
              <div className="w-1/3 text-center"> <RiDeleteBinLine className="text-gray-600 " size={25} /></div>
            </div>
            <div className="  mt-8 p-2 border-b-2 text-base text-gray-500  flex justify-between min-w-[700px]">
              <div className="w-1/3">Jane Patrick</div>
              <div className="w-1/3 text-center">janepatrick@gmail.com</div>
              <div className="w-1/3 text-center text-red-400">.Rejected</div>
              <div className="w-1/3 text-center"> <RiDeleteBinLine className="text-gray-600 " size={25} /></div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-8 ">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 text-gray-500 focus:outline-none"
            >
              Previous
            </button>

            <div className="flex justify-center">
              {[...Array(totalPages).keys()].map((page, index) => (
                <button
                  key={page + 1}
                  onClick={() => setCurrentPage(page + 1)}
                  className={`px-4 py-2 ${index !== 0 ? "ml-2" : ""} ${
                    currentPage === page + 1 ? "bg-blue-50" : "bg-white"
                  } text-gray-500 rounded-lg hover:bg-purple-800 hover:text-white focus:outline-none`}
                >
                  {page + 1}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="px-4 py-2 text-gray-500 focus:outline-none"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendeesList;
