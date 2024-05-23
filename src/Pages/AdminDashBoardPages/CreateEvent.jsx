import { useState } from 'react';
import { Bars } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../HomePage/Components/Navbar';
// import { IoMdMenu, IoMdClose } from 'react-icons/io';
// import { IoLocationOutline } from 'react-icons/io5';
// import { Link } from 'react-router-dom';
function CreateEvent() {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: '',
    time: '',
    venue: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log({ formData });
    fetch('https://eventproctor.onrender.com/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 'success') {
          toast(result.message);
          navigate('/');
        } else {
          toast(result.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log({ error });
        setLoading(false);
      });
  };

  return (
    <div>
      {/* desktop view */}
      <div className="bg-blue-50 pb-10 hidden md:block">
        <Navbar />

        <div className="px-52 mt-16">
          <div className="text-4xl font-medium">New Event</div>
          <div className="text-lg text-gray-600 mt-2 font-normal">
            Tell us about your event
          </div>
        </div>

        <div className=" mx-auto  mt-10" style={{ maxWidth: '80rem' }}>
          <div className="bg-white shadow-md rounded  pt-6 pb-8 mb-4  w-full">
            <div className="ml-10">
              <div className="text-3xl font-medium mt-4 ml-6">
                Basic Information
              </div>
              <div className="mt-6">
                <form className=" p-8 " onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="eventName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Event Name
                    </label>
                    <input
                      type="text"
                      id="eventName"
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter event name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="eventCategory"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Event Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        // placeholder="Enter event category"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="numberOfInvite"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Venue
                      </label>
                      <input
                        type="text"
                        id="venue"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Address of Venue"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="eventName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter event description..."
                    />
                  </div>
                  <div className=" w-full flex justify-center items-center">
                    {loading ? (
                      <Bars
                        height="40"
                        width="40"
                        color="#6B21A8FF"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                    ) : (
                      <button
                        type="submit"
                        className="mx-auto bg-purple-800 text-white p-3 rounded-md hover:bg-purple-600 ease-in-out transition-all"
                      >
                        Create Event
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" mx-auto  mt-10" style={{ maxWidth: '80rem' }}>
          <div className="bg-white shadow-md rounded  pt-6 pb-10 mb-4  w-full">
            <div className="ml-10">
              <div className="text-3xl font-medium mt-6">
                <div className="ml-10">
                  <div className="text-3xl font-medium mt-4 ml-6">
                    Mode of Attendance
                  </div>
                </div>
              </div>
              <div className="border text-max-w-4xl bg-blue-50 flex flex-col items-center justify-center max-w-md ml-96 mt-10 px-10 py-10">
                <div>
                  <IoLocationOutline className="text-purple-800 " size={25} />
                </div>
                <div className="text-2xl text-semibold mt-4">In Person</div>
                <div className="text-base text-gray-500 mt-2">
                  Attendees will be physically present
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className=" mx-auto  mt-10" style={{ maxWidth: '80rem' }}>
          <div className="bg-white shadow-md rounded  pt-6 pb-8 mb-4  w-full">
            <div className="ml-10">
              <div className="text-3xl font-medium mt-6 ml-6">
                Event Location
              </div>
              <div className="mt-6">
                <form className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="eventCategory"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Venue Name
                      </label>
                      <input
                        type="text"
                        id="venueName"
                        name="venueName"
                        value={formData.venueName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Address
                      </label>
                      <input
                        type=""
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter the venue address"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="text-3xl font-medium mt-6 ml-16">Event Date</div>
            <form className="ml-10 p-8 mt-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="startDate"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="startTime"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Start Time
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="endDate"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="endTime"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    End Time
                  </label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="confirmationDeadline"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Confirmation Deadline
                  </label>
                  <input
                    type="date"
                    id="confirmationDeadline"
                    name="confirmationDeadline"
                    value={formData.confirmationDeadline}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="deadlineTime"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Deadline Time
                  </label>
                  <input
                    type="time"
                    id="deadlineTime"
                    name="deadlineTime"
                    value={formData.deadlineTime}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="timeZone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Time Zone
                </label>
                <select
                  id="timeZone"
                  name="timeZone"
                  value={formData.timeZone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">(UTC +01:00) Africa/Lagos</option>
                  <option value="">(UTC +01:00) Africa/Lagos</option>
                  <option value="">(UTC +01:00) Africa/Lagos</option>
                  <option value="">(UTC +01:00) Africa/Lagos</option>
                  <option value="">(UTC +01:00) Africa/Lagos</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="flex mt-24" style={{ marginLeft: '1150px' }}>
          <div className="grid grid-cols-2 gap-4  justify-left items-left">
            <div className="col-span-1 p-4">
              <button className=" hover:bg-purple-800 hover:text-white text-gray-600 font-normal py-2 px-6 border-inherit border ">
                Cancel
              </button>
            </div>
            <div className="col-span-1 p-4">
              <Link to="/home">
                <button className="bg-purple-800 hover:bg-purple-600 text-white font-normal py-2 px-6 ">
                  Create Event
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
      {/* mobile view */}

      {/* <div className="md:hidden bg-blue-50 p-4">
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
              <div className=" bg-white mt-6 p-6 m shadow-lg ">
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
        <div className="mt-4">
          <div className="text-2xl font-medium">New Event</div>
          <div className="text-base text-gray-600 mt-2 font-normal">
            Tell us about your event
          </div>
        </div>
        <div className="bg-white shadow-md rounded pt-6 pb-8 mb-4 mt-10">
          <div className="px-4">
            <div className="text-2xl font-medium">Basic Information</div>
            <form className="mt-4">
              <div className="mb-4">
                <label
                  htmlFor="eventName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Event Name
                </label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter event name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="eventCategory"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Event Category
                </label>
                <input
                  type="text"
                  id="eventCategory"
                  name="eventCategory"
                  value={formData.eventCategory}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter event category"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numberOfInvite"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Number of Invite
                </label>
                <input
                  type="number"
                  id="numberOfInvite"
                  name="numberOfInvite"
                  value={formData.numberOfInvite}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter number of invitees"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="organizerName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Organizer's Name
                </label>
                <input
                  type="text"
                  id="organizerName"
                  name="organizerName"
                  value={formData.organizerName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter organizer's name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="organizerEmail"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Organizer's Email
                </label>
                <input
                  type="email"
                  id="organizerEmail"
                  name="organizerEmail"
                  value={formData.organizerEmail}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter organizer's email"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white shadow-md rounded pt-6 pb-10 mb-4 mt-4">
          <div className="px-4">
            <div className="text-2xl font-medium">Mode of Attendance</div>
            <div className="border bg-blue-50 flex flex-col items-center justify-center mt-4 px-4 py-6">
              <div>
                <IoLocationOutline className="text-purple-800 " size={20} />
              </div>
              <div className="text-xl font-semibold mt-2">In Person</div>
              <div className="text-base text-gray-500 mt-2">
                Attendees will be physically present
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded pt-6 pb-8 mb-4 mt-4">
          <div className="px-4">
            <div className="text-2xl font-medium">Event Location</div>
            <form className="mt-4">
              <div className="mb-4">
                <label
                  htmlFor="venueName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Venue Name
                </label>
                <input
                  type="text"
                  id="venueName"
                  name="venueName"
                  value={formData.venueName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter venue name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter the venue address"
                />
              </div>
            </form>
          </div>
          <div className="text-2xl font-medium mt-4 px-4">Event Date</div>
          <form className="p-4 mt-4">
            <div className="mb-4">
              <label
                htmlFor="startDate"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="startTime"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Start Time
              </label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="endDate"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="endTime"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                End Time
              </label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmationDeadline"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirmation Deadline
              </label>
              <input
                type="date"
                id="confirmationDeadline"
                name="confirmationDeadline"
                value={formData.confirmationDeadline}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="deadlineTime"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Deadline Time
              </label>
              <input
                type="time"
                id="deadlineTime"
                name="deadlineTime"
                value={formData.deadlineTime}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="timeZone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Time Zone
              </label>
              <select
                id="timeZone"
                name="timeZone"
                value={formData.timeZone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">(UTC +01:00) Africa/Lagos</option>
                <option value="">(UTC +01:00) Africa/Lagos</option>
                <option value="">(UTC +01:00) Africa/Lagos</option>
                <option value="">(UTC +01:00) Africa/Lagos</option>
                <option value="">(UTC +01:00) Africa/Lagos</option>
              </select>
            </div>
          </form>
        </div>
        <div className="flex flex-col mt-8 space-y-4">
          <Link to="/home">
            <button className="bg-purple-800 hover:bg-purple-600 text-white font-normal py-2 px-6">
              Create Event
            </button>
          </Link>
          <button className="hover:bg-purple-800 hover:text-white text-gray-600 font-normal py-2 px-6 border-inherit border">
            Learn More
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default CreateEvent;
