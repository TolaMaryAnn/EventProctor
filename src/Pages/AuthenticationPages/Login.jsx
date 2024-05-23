import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      {/* desktop screen */}
      <div className=" items-center justify-center bg-blue-50 h-screen hidden md:flex">
        <div className="">
          <div className="max-w-3xl mx-auto ">
            <div className="bg-white shadow-md rounded px-24 pt-6 pb-8 mb-4  w-full">
              <div className="">
                <div className="text-4xl font-bold ml-12">
                  Log in to your account
                </div>
                <div className="text-base mt-4 font-thin ml-24">
                  Welcome back!! Please enter your details.
                </div>
              </div>
              <form className=" ">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
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

                <div className="mb-4 relative">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
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
                <div className="mb-4">
                  <label className="flex items-center text-purple-800 font-bold">
                    Forgot password?
                  </label>
                </div>
                <div className="flex items-center justify-between ">
                  <button
                    className="bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-48 rounded focus:outline-none focus:shadow-outline items-center"
                    type="button"
                  >
                    Sign in
                  </button>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <div className="border-t border-gray-400 w-16 mx-4"></div>
                  <div className="text-gray-400 mx-2">or</div>
                  <div className="border-t border-gray-400 w-16 mx-4"></div>
                </div>
                <div className="mt-4">
                  <div className="relative">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="address"
                      type="text"
                      placeholder="Sign up with Google"
                    />
                    <span className="absolute inset-y-0 left-96 pl-3 flex items-center">
                      <FcGoogle className="h-5 w-5 text-gray-400" />
                    </span>
                  </div>
                </div>

                <div className="mt-4 ml-24">
                  <label className="flex items-center">
                    <span className="ml-2 text-sm">
                      Don't have an account?
                      <span className="text-purple-800 font-bold">
                        {" "}
                        sign up
                      </span>
                    </span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="md:hidden">
        <div className="max-w-md mx-auto w-full px-4">
          <div className="bg-white shadow-md rounded px-6 py-8 mb-4">
            <div className="text-3xl font-bold mb-4 text-center">
              Log in to your account
            </div>
            <div className="text-sm font-thin mb-6 text-center">
              Welcome back!! Please enter your details.
            </div>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
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

              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
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
              <div className="mb-4">
                <label className="flex items-center ">
                  <span className="ml-2 text-sm text-purple-800 font-bold">
                    Forgot password?
                  </span>
                </label>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Sign in
                </button>
              </div>
              <div className="flex items-center justify-center mt-4">
                <div className="border-t border-gray-400 w-16 mx-4"></div>
                <div className="text-gray-400 mx-2">or</div>
                <div className="border-t border-gray-400 w-16 mx-4"></div>
              </div>
              <div className="mt-4 relative">
                <input
                  id="address"
                  type="text"
                  placeholder="Sign up with Google"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <span className="absolute inset-y-0 left-60 pl-3 flex items-center">
                  <FcGoogle className="h-5 w-5 text-gray-400" />
                </span>
              </div>
            </form>
          </div>
          <div className="text-sm text-center text-gray-700 mb-6">
            Don't an account?{" "}
            <span className="text-purple-800 font-bold">Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
