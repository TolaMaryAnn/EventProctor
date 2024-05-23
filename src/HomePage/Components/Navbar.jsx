import { FaBell, FaQuestionCircle, FaUser } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { useSelector } from 'react-redux';
import { CiLogout } from 'react-icons/ci';

import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    localStorage.clear();
  };

  return (
    <nav className="flex flex-col md:block bg-white border-b-gray-200 border">
      <div className="flex items-center justify-between flex-wrap bg-white px-6 py-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to={'/'}>
            <img src={logo} alt="Logo" width={180} />
          </Link>
        </div>

        <div className="flex items-center text-lg">
          {/* <Link to={'/'} className="mr-24 font-bold">
            All Events
          </Link> */}
          {/* <div className="font-normal">Resources</div> */}
          {/* <div className="relative  border-2 border-gray-200 ml-24">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FaSearch className="text-black" />
            </span>
            <input
              className="block pl-10 pr-3 py-2 w-80 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg border-gray-300"
              type="text"
              placeholder="Search for events"
            />
          </div> */}
        </div>

        <div className="flex items-center">
          <FaQuestionCircle size={25} className="text-[#110F3E] mr-8" />
          <FaBell size={25} className="text-[#110F3E] mr-20" />
          {isAuthenticated ? (
            <span className="cursor-pointer" onClick={handleLogout}>
              <CiLogout size={25} className="text-[#110F3E] mr-2" />
            </span>
          ) : (
            <FaUser size={25} className="text-[#110F3E] mr-2" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
