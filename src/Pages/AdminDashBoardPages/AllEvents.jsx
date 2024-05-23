import { useState } from 'react';
import logo from '../../assets/logo.png';
import { IoFilterOutline } from 'react-icons/io5';
import {
  FaSearch,
  FaBell,
  FaUser,
  FaQuestionCircle,
  FaPlus,
} from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Bars } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import Navbar from '../../HomePage/Components/Navbar';
import { useNavigate } from 'react-router-dom';

function AllEvents() {
  const token = useSelector((state) => state.auth.token);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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

  useEffect(() => {
    fetch('https://eventproctor.onrender.com/events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 'success') {
          console.log({ events: result.data });
          setEvents(result.data);
          // toast(result.message);
        } else {
          toast(result.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log({ error });
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="bg-blue-50 h-screen hidden md:block">
        <Navbar />
        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-2  " style={{ gap: '1000px' }}>
            <div className="col-span-1 p-4">
              <h2 className="text-4xl font-medium">My Events</h2>
              <div className="text-gray-600 mt-2 text-normal">
                All your events will be displayed here
              </div>
            </div>

            <div className="col-span-1 p-4">
              <div className="flex  mb-4">
                <Link
                  to={'/createvent'}
                  htmlFor="csvUpload"
                  className=" cursor-pointer flex items-center px-4 py-2 font-normal text-lg text-white bg-purple-800  hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <FaPlus size={20} className="mr-2" />
                  Create Event
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <div className=" mx-auto  mt-10" style={{ maxWidth: '98rem' }}>
          <div className="bg-white shadow-md rounded  pt-6 pb-8 mb-4  w-full">
            <div className="mr-20">
              {/* <div
              style={{ marginLeft: "80rem" }}
              className="flex items-center space-x-2 mt-4 px-6 py-2 font-semibold text-gray-600 border hover:text-white  hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <IoFilterOutline className="text-gray-600 " size={25} />
              <button className="">Apply Filter</button>
            </div> */}
            </div>
            <div className="p-4 mt-10 border rounded-lg">
              {loading ? (
                <div className="w-full flex items-center justify-center">
                  <Bars
                    height="40"
                    width="40"
                    color="#6B21A8FF"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              ) : (
                <>
                  {/* Table Header */}
                  <table className="w-full">
                    <th className="bg-gray-200 text-gray-600 font-bold p-2 text-left">
                      Name
                    </th>
                    <th className="bg-gray-200 text-gray-600 font-bold p-2 text-left">
                      Status
                    </th>
                    <th className="bg-gray-200 text-gray-600 font-bold p-2 text-left">
                      Start Time
                    </th>
                    <th className="bg-gray-200 text-gray-600 font-bold p-2 text-left">
                      Venue
                    </th>
                    <th className="bg-gray-200 text-gray-600 font-bold p-2 text-left"></th>
                    {/* <div className="flex justify-between p-2 border-b-2 text-lg text-gray-500 bg-blue-50">
                    <div className="flex-1">Name</div>
                    <div className="flex-1 ml-60">status</div>
                    <div className="flex-1 ml-60">Start Time</div>
                    <div className="flex-1 ml-60">Venue</div>
                    <div className="flex-1 ml-60"></div>
                  </div> */}

                    {events.map((event, index) => (
                      <tr key={index} className="border-b-2">
                        <td className="px-2 py-4">{event.eventName}</td>
                        <td className="px-2 py-4">Active</td>
                        <td className="px-2 py-4">{event.time}</td>
                        <td className="px-2 py-4">{event.venue}</td>
                        <td className="flex items-center justify-center px-2 py-4">
                          <button
                            className="bg-purple-800 text-white text-xs p-2 rounded-md"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate('/addinvites');
                            }}
                          >
                            Add Invitees
                          </button>
                        </td>
                      </tr>
                    ))}
                  </table>

                  {/* <div className="flex items-center justify-between mt-10">
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
                            currentPage === page + 1 ? 'bg-blue-50' : 'bg-white'
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
                  </div> */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-blue-50    ">
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
                <a href="#" className="block mt-6 text-gray-600  text-lg mt-10">
                  Resources
                </a>
                <div className="flex items-center mt-32 ">
                  <FaQuestionCircle size={20} className="text-[#110F3E] mr-2" />
                  <FaBell size={20} className="text-[#110F3E] mr-4" />
                  <FaUser size={12} className="text-[#110F3E] mr-2" />
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="mt-10 px-6  py-16">
          <h2 className="text-3xl font-medium text-left">My Events</h2>
          <div className="text-gray-600 mt-2 text-normal text-base">
            All your events will be displayed here
          </div>
          <div className="flex ml-20 mt-6 mb-4">
            <label className="text-sm cursor-pointer bg-purple-800 hover:bg-purple-600 text-white font-normal py-2 px-6 rounded flex items-center px-4 py-2 font-normal text-lg text-white bg-purple-800 ml-10  hover:bg-blue-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <FaPlus size={10} className="mr-2" />
              Create Event
            </label>
          </div>
        </div>

        <div className=" mx-auto  mt-10" style={{ maxWidth: '98rem' }}>
          <div className="bg-white shadow-md rounded  pt-6 pb-8 mb-4  w-full">
            <div className="mt-4 mb-10 px-6">
              <div className="flex mb-6 items-center space-x-2 w-1/2  mt-4 px-4 py-2 text-sm font-semibold text-gray-600 border hover:text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-green-500">
                <IoFilterOutline className="text-gray-600" />
                <button className="">Apply Filter</button>
              </div>
            </div>

            <div className="p-4 border rounded-lg overflow-x-auto">
              <div className="min-w-full inline-block">
                <div className="p-2 border-b-2 text-base text-gray-500 bg-blue-50 flex justify-between min-w-[700px]">
                  <div className="w-1/3">Name</div>
                  <div className="w-1/3 text-center">Status</div>
                  <div className="w-1/3 text-center">Start Date</div>
                  <div className="w-1/3 text-center">Invite</div>
                  <div className="w-1/3 text-center">Response</div>
                </div>

                <div className="p-2 border-b-2 text-base text-gray-500 mt-10 flex justify-between min-w-[700px]">
                  <div className="w-1/3">Eventide</div>
                  <div className="w-1/3 text-center">Active</div>
                  <div className="w-1/3 text-center">12-05-2024</div>
                  <div className="w-1/3 text-center">500</div>
                  <div className="w-1/3 text-center">30</div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-8 ">
                <button
                  onClick={handlePrevious}
                  className="px-4 py-2 text-gray-500  focus:outline-none"
                >
                  Previous
                </button>

                <div className="flex justify-center">
                  {[...Array(totalPages).keys()].map((page, index) => (
                    <button
                      key={page + 1}
                      onClick={() => setCurrentPage(page + 1)}
                      className={`px-4 py-2 ${index !== 0 ? 'ml-2' : ''} ${
                        currentPage === page + 1 ? 'bg-blue-50' : 'bg-white'
                      } text-gray-500 rounded-lg hover:bg-purple-800 hover:text-white focus:outline-none`}
                    >
                      {page + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 ml-12 text-gray-500 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllEvents;
