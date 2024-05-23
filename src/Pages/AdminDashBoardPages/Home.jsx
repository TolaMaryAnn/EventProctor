import React, { useState } from "react";
import logo from "../../assets/logo.png";
// MdEventSeat
// IoMdHome
// MdLocationPin
// IoHelpCircle
import { FaSearch, FaBell, FaUser, FaQuestionCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoMdMenu, IoMdClose } from "react-icons/io";
const Card = ({ title, count, description }) => {
  return (
    <div className="bg-white  shadow-md rounded-lg p-4 m-2">
      <h3 className="text-2xl font-normal text-gray-800">{title}</h3>
      <p className="text-xl font-light text-gray-800 mt-6">{count}</p>
      <div className="border-t border-gray-300 my-4"></div>
      <p className="text-purple-800 font-normal text-sm mt-16 mb-6">
        {description}
      </p>
    </div>
  );
};

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* desktop screen */}
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
            <div className="text-black mt-16 border px-10 py-2 rounded-lg bg-purple-800 text-white">
              Home
            </div>
            <div className="text-gray-600 font-bold text-lg mt-16 px-10">
              Attendees
            </div>
            <div
              className=" text-gray-600 font-bold text-lg px-10"
              style={{ marginTop: "620px" }}
            >
              Help
            </div>
          </div>
          <div className="flex flex-col  w-1/7 text-white mr-6"></div>

          <div className="flex flex-col text-lg flex-grow mx-6">
            <div className="text-black flex items-center">
              {/* First Row with Event Details */}
              <div className="flex  text-black mt-10 px-10 space-y-2flex items-center ">
                <div className="text-black  font-medium text-4xl flex items-center">
                  Eventide
                </div>
                <div className="flex items-center space-x-2">
                  <SlCalender className=" text-gray-600 ml-4" size={20} />
                  <div className="font-normal text-base ml-10 border px-4 rounded-2xl bg-blue-50 text-purple-800 ">
                    Active
                  </div>
                </div>
                <div className="text-gray-600 ml-6 font-normal text-lg">
                  12-05-2024
                </div>
                <div className="text-gray-600 ml-4 font-normal text-lg">
                  10:00am - 07:00pm WAT
                </div>
              </div>
            </div>
            <div>
              <div className="flex   py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
                  <Card
                    title="Number of Invites"
                    count="500"
                    description="Check out and make edits to the guest list."
                  />
                  <Card
                    title="Number of Attendees"
                    count="0"
                    description="Nudge your guests to remind them about your event."
                  />
                  <Card
                    title="Attendee confirmation"
                    count="25"
                    description="Send a unique QR code to your guests to give them access."
                  />
                  <Card
                    title="Emails Sent"
                    count="200"
                    description="CAdd people you want to attend to your invitation list"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="border-t border-gray-300 my-4"></div>
              <div>
                <div className="flex items-center p-4">
                  <span className="mr-2 text-gray-600 font-normal">
                    Design and customize a QR Code invite for your guests
                  </span>
                  <a
                    href="/get-started"
                    className="text-purple-800 hover:underline ml-80 font-bold "
                  >
                    Get started
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-300 my-4"></div>
              <div>
                <div className="flex items-center p-4">
                  <span className="mr-2 text-gray-600 font-normal">
                    Add and invite more guests to your event
                  </span>
                  <a
                    href="/get-started"
                    className="text-purple-800 hover:underline  font-bold "
                    style={{ marginLeft: "430px" }}
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/6 mb-32">
            <button className="text-black border py-2 bg-purple-800 text-white mt-10 ">
              Actions
            </button>
            <div className="border p-6 rounded bg-blue-50 mt-20">
              <div className="text-black font-medium text-2xl ">
                Event Details
              </div>

              <div className="mt-6">
                <div className="text-xl font-normal text-gray-700">
                  Event Name
                </div>
                <div className="text-base text-gray-600">Eventide</div>
              </div>

              <div className="mt-6">
                <div className="text-xl font-normal text-gray-700">
                  Event Category
                </div>
                <div className="text-base text-gray-600">Wedding</div>
              </div>

              <div className="mt-6">
                <div className="text-xl font-normal text-gray-700">
                  Mode of Attendance
                </div>
                <div className="text-base text-gray-600">In Person</div>
              </div>

              <div className="mt-6">
                <div className="text-xl font-normal text-gray-700">
                  Number of Invites
                </div>
                <div className="text-base text-gray-600">500</div>
              </div>

              <div className="mt-6">
                <div className="text-xl font-normal text-gray-700">
                  Confirmation Deadline
                </div>
                <div className="text-base text-gray-600">
                  01-05-2024 11:59pm WAT
                </div>
              </div>

              <div className="mt-6">
                <div className="text-xl font-normal text-gray-700">
                  Organizers Name
                </div>
                <div className="text-base text-gray-600">Annabel Joshua</div>
              </div>

              <div className="mt-6">
                <div className="text-xl font-normal text-gray-700">
                  Organizers Email
                </div>
                <div className="text-base text-gray-600">
                  annabeljoshua@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="block md:hidden">
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
        <div className="flex flex-col px-4">
          <div className="text-black mt-6">
            <div className="flex flex-col space-y-2">
              <div className="text-black font-medium text-3xl">Eventide</div>
              <div className="flex items-center space-x-2">
                <SlCalender className="text-gray-600" size={20} />
                <div className="font-normal text-sm border px-4 rounded-2xl bg-blue-50 text-purple-800">
                  Active
                </div>
              </div>
              <div className="text-gray-600 font-normal text-base">
                12-05-2024
              </div>
              <div className="text-gray-600 font-normal text-base">
                10:00am - 07:00pm WAT
              </div>
              <button className="text-black text-sm border py-2 bg-purple-800 text-white">
                Actions
              </button>
            </div>
            <div className="flex flex-col py-4">
              <div className="grid grid-cols-1 gap-4">
                <Card
                  title="Number of Invites"
                  count="500"
                  description="Check out and make edits to the guest list."
                />
                <Card
                  title="Number of Attendees"
                  count="0"
                  description="Nudge your guests to remind them about your event."
                />
                <Card
                  title="Attendee confirmation"
                  count="25"
                  description="Send a unique QR code to your guests to give them access."
                />
                <Card
                  title="Emails Sent"
                  count="200"
                  description="Add people you want to attend to your invitation list"
                />
              </div>
            </div>
            <div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex flex-col p-4">
                <span className="text-gray-600 text-base font-normal">
                  Design and customize a QR Code invite for your guests
                </span>
                <a
                  href="/get-started"
                  className="text-purple-800 hover:underline font-bold mt-2 text-sm"
                >
                  Get started
                </a>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex flex-col p-4">
                <span className="text-gray-600 font-normal">
                  Add and invite more guests to your event
                </span>
                <a
                  href="/get-started"
                  className="text-purple-800 hover:underline font-bold mt-2"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6 mb-20">
            <div className="border p-6 rounded bg-blue-50 mt-4">
              <div className="text-black font-medium text-xl">
                Event Details
              </div>
              <div className="mt-6">
                <div className="text-lg font-normal text-gray-700">
                  Event Name
                </div>
                <div className="text-sm text-gray-600">Eventide</div>
              </div>
              <div className="mt-6">
                <div className="text-lg font-normal text-gray-700">
                  Event Category
                </div>
                <div className="text-sm text-gray-600">Wedding</div>
              </div>
              <div className="mt-6">
                <div className="text-lg font-normal text-gray-700">
                  Mode of Attendance
                </div>
                <div className="text-sm text-gray-600">In Person</div>
              </div>
              <div className="mt-6">
                <div className="text-lg font-normal text-gray-700">
                  Number of Invites
                </div>
                <div className="text-sm text-gray-600">500</div>
              </div>
              <div className="mt-6">
                <div className="text-lg font-normal text-gray-700">
                  Confirmation Deadline
                </div>
                <div className="text-sm text-gray-600">
                  01-05-2024 11:59pm WAT
                </div>
              </div>
              <div className="mt-6">
                <div className="text-lg font-normal text-gray-700">
                  Organizers Name
                </div>
                <div className="text-sm text-gray-600">Annabel Joshua</div>
              </div>
              <div className="mt-6">
                <div className="text-lg font-normal text-gray-700">
                  Organizers Email
                </div>
                <div className="text-sm text-gray-600">
                  annabeljoshua@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
