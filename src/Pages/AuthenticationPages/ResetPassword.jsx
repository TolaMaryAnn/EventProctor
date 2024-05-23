import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      {/* desktop screen */}
      <div className=" items-center justify-center bg-blue-50 h-screen hidden md:flex ">
        <div className="">
          <div className="max-w-3xl mx-auto ">
            <div className="bg-white shadow-md rounded px-24 pt-6 pb-72 mb-4  w-full">
              <div className="">
                <div className="text-4xl font-bold ml-20">Reset Password</div>
                <div className="text-base mt-4 font-thin ml-36">
                  Set new password
                </div>
              </div>
              <form className=" mt-6">
                <div className="mb-4 relative">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Enter new password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                    id="password"
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="*********"
                    required
                  />
                  {showPassword ? (
                    <FaEye
                      className="absolute top-8 right-0 mt-2 mr-4 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <RiEyeCloseFill
                      className="absolute top-8 right-0 mt-2 mr-4 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>

                <div className="mb-4 relative">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Comfirm password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                    id="password"
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="*********"
                    required
                  />
                  {showPassword ? (
                    <FaEye
                      className="absolute top-8 right-0 mt-2 mr-4 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <RiEyeCloseFill
                      className="absolute top-8 right-0 mt-2 mr-4 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>

                <div className="flex items-center justify-between ">
                  <button
                    className="bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-48 rounded focus:outline-none focus:shadow-outline items-center"
                    type="button"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="md:hidden">
        <div className="max-w-md mx-auto w-full px-4">
          <div className="bg-white shadow-md rounded px-6 pb-72 py-8 mb-4">
            <div className="text-3xl font-bold mb-4 text-center">
              Reset Password
            </div>
            <div className="text-sm font-thin mb-6 text-center">
              Set a new password
            </div>
            <form>
              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Enter new password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                  id="password"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="*********"
                  required
                />
                {showPassword ? (
                  <FaEye
                    className="absolute top-8 right-0 mt-2 mr-4 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <RiEyeCloseFill
                    className="absolute top-8 right-0 mt-2 mr-4 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>

              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Confirm password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                  id="password"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="*********"
                  required
                />
                {showPassword ? (
                  <FaEye
                    className="absolute top-8 right-0 mt-2 mr-4 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <RiEyeCloseFill
                    className="absolute top-8 right-0 mt-2 mr-4 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
