import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { RiImageAddLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaQuestionCircle,
  FaCloudUploadAlt,
} from "react-icons/fa";

function AddInvites() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file);
      // Handle the file upload logic here
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("US");
  return (
    <div>
      <div className=" h-screen hidden md:block">
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
              style={{ marginTop: "700px" }}
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
              </div>
            </div>

            <div className="p-4">
              <div className="flex  mb-4">
                <label
                  htmlFor="csvUpload"
                  className=" cursor-pointer flex items-center px-4 py-2 font-normal text-lg text-white bg-purple-800  hover:bg-blue-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <FaCloudUploadAlt className="mr-2" />
                  Bulk Upload
                </label>
                <input
                  type="file"
                  id="csvUpload"
                  accept=".csv"
                  className="hidden"
                />
              </div>

              <div className="flex flex-col">
                <div className="mb-2 text-base text-purple-800 ">
                  Upload .CSV file
                </div>
                <input
                  type="file"
                  id="csvUpload"
                  accept=".csv"
                  className="hidden"
                />
              </div>
            </div>

            <div className="text-3xl font-normal text-gray-700 mt-6">
              Attendee Details
            </div>
            <div className="mt-6">
              <div className=" flex ">
                {/* Upload Image Icon */}
                <label
                  htmlFor="imageUpload"
                  className="cursor-pointer rounded-lg border bg-blue-50  p-2"
                >
                  <RiImageAddLine
                    size={80}
                    className=" hover:text-purple-800"
                  />
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="mb-2  text-base text-purple-800 ">
                Image upload
              </div>
              <input
                type="file"
                id="image upload"
                accept="image"
                className="hidden"
              />
            </div>
            <div className="  mt-10 ">
              <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* First Name */}
                <div className="flex flex-col ">
                  <label
                    className="block text-gray-700 text-lg font-normal mb-2"
                    htmlFor="firstname"
                  >
                    First Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter First name"
                  />
                </div>
                {/* Last Name */}
                <div className="flex flex-col">
                  <label
                    className="block text-gray-700 text-lg font-normal mb-2"
                    htmlFor="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Enter Last Name"
                  />
                </div>
                {/* Email Address */}
                <div className="flex flex-col mt-6">
                  <label
                    className="block text-gray-700 text-lg font-normal mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                {/* Phone Number */}
                <div className="flex flex-col mt-6">
                  <label
                    className="block text-gray-700 text-lg font-normal mb-2"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <div className="flex">
                    <select
                      className=" border rounded-l w-1/1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option value="US">USA</option>
                      <option value="NG">Nigeria</option>
                    </select>
                    <input
                      className="shadow appearance-none border rounded-r w-2/14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phoneNumber"
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="flex mt-24" style={{ marginLeft: "1050px" }}>
              <div className="grid grid-cols-2 gap-4  justify-left items-left">
                <div className="col-span-1 p-4">
                  <button className=" hover:bg-purple-800 hover:text-white text-gray-600 font-normal py-2 px-6 border-inherit border ">
                    Cancel
                  </button>
                </div>
                <div className="col-span-1 p-4">
                  <button className="bg-purple-800 hover:bg-purple-600 text-white font-normal py-2 px-6 ">
                    Save
                  </button>
                </div>
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
        <div className="text-black mt-6">
          <div className=" space-y-2 px-6">
            <div className="text-black font-medium text-3xl">Add invites</div>
            <div className="text-gray-600 text-base mt-2 font-medium">
              All attendants will be displayed here
            </div>

            <div className="">
              <div className="flex mt-10  mb-4">
                <label
                  htmlFor="csvUpload"
                  className=" cursor-pointer flex items-center px-4 py-2 font-normal text-lg text-white bg-purple-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <FaCloudUploadAlt className="mr-2" />
                  Bulk Upload
                </label>
                <input
                  type="file"
                  id="csvUpload"
                  accept=".csv"
                  className="hidden"
                />
              </div>

              <div className="flex flex-col">
                <div className="mb-2 text-base text-purple-800 ">
                  Upload .CSV file
                </div>
                <input
                  type="file"
                  id="csvUpload"
                  accept=".csv"
                  className="hidden"
                />
              </div>
            </div>

            <div className="text-2xl font-normal text-gray-700 mt-12">
              Attendee Details
            </div>
          </div>
          <div className="mt-6 px-6">
            <div className=" flex ">
              {/* Upload Image Icon */}
              <label
                htmlFor="imageUpload"
                className="cursor-pointer rounded-lg border bg-blue-50  p-2"
              >
                <RiImageAddLine size={50} className=" hover:text-purple-800" />
              </label>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="flex flex-col px-6 ">
            <div className="mb-2  text-sm text-purple-800 ">Image upload</div>
            <input
              type="file"
              id="image upload"
              accept="image"
              className="hidden"
            />
          </div>
          <div className="px-4">
            <form className="mt-4">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none text-xs border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter First name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded text-xs  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter Last name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  className="shadow appearance-none border rounded text-xs  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number
                </label>
                <div className="flex">
                  <select
                    className=" border rounded-l w-1/1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="US">USA</option>
                    <option value="NG">Nigeria</option>
                  </select>
                  <input
                    className="shadow appearance-none border text-xs rounded-r w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phoneNumber"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="flex mt-10" style={{ marginLeft: "100px" }}>
              <div className="grid grid-cols-2 gap-4  justify-left items-left">
                <div className="col-span-1 p-4">
                  <button className=" hover:bg-purple-800 hover:text-white text-sm text-gray-600 font-normal py-2 px-6 border-inherit border ">
                    Cancel
                  </button>
                </div>
                <div className="col-span-1 p-4 mb-20">
                  <button className="bg-purple-800 hover:bg-purple-600 text-sm text-white font-normal py-2 px-6 ">
                    Save
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AddInvites;
