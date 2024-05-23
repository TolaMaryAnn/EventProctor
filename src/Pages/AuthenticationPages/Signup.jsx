import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseFill } from 'react-icons/ri';
// import { useMutation } from '@tanstack/react-query';
import { Bars } from 'react-loader-spinner';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [countryCode] = useState('US');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const { isPending, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () => {
  //     fetch('https://eventproctor.onrender.com/users').then((res) =>
  //       res.json()
  //     ).then(result => {
  //       console.log({result})
  //     });
  //   },
  // });

  // const mutation = useMutation(async (newUser) => {
  //   setLoading(true);
  //   console.log({ newUser });
  //   const response = await fetch('https://eventproctor.onrender.com/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newUser),
  //   });

  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }

  //   return response.json();
  // });

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log({ formData });
    // mutation.mutate(formData);
    fetch('https://eventproctor.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log({ result });
        setLoading(false);
      })
      .catch((error) => {
        console.log({ error });
        setLoading(false);
      });
  };

  return (
    <div>
      {/* desktop screen */}
      <div className=" items-center justify-center bg-blue-50 h-screen hidden md:flex">
        <div className="">
          <div className="max-w-3xl mx-auto  ">
            <div className="bg-white shadow-md rounded px-24 pt-6 pb-8 mb-4  w-full">
              <div className="">
                <div className="text-4xl font-bold ml-24">
                  Create your account
                </div>
                <div className="text-base mt-4 font-thin ml-28">
                  New user? Please enter your details
                </div>
              </div>
              <form className=" " onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    First Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Last Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <div className="flex">
                    <select
                      className=" border rounded-l w-1/1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={countryCode}
                      onChange={handleChange}
                    >
                      <option value="US">USA</option>
                      <option value="NG">Nigeria</option>
                    </select>
                    <input
                      className="shadow appearance-none border rounded-r w-2/14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phoneNumber"
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 relative">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                    id="password"
                    onChange={handleChange}
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
                  <label className="flex items-center">
                    <span className="ml-2 text-sm">
                      By signing in you agree with our
                      <span className="text-purple-800 font-bold">
                        {' '}
                        terms of services{' '}
                      </span>
                      and{' '}
                      <span className="text-purple-800 font-bold">
                        privacy policy
                      </span>
                    </span>
                  </label>
                </div>
                <div className="flex items-center justify-center ">
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
                      className="bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-64 rounded focus:outline-none focus:shadow-outline items-center"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  )}
                </div>
                <div className="flex items-center justify-center mt-4">
                  <div className="border-t border-gray-400 w-16 mx-4"></div>
                  <div className="text-gray-400 mx-2">or</div>
                  <div className="border-t border-gray-400 w-16 mx-4"></div>
                </div>
                {/* <div className="mt-4">
                  <div className="relative">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="address"
                      type="text"
                      placeholder="Sign up with Google"
                    />
                    <span
                      className="absolute inset-y-0  pl-3 flex items-center"
                      style={{ marginLeft: '520px' }}
                    >
                      <FcGoogle className="h-5 w-5 text-gray-400" />
                    </span>
                  </div>
                </div> */}

                <div className="mt-4 ml-44">
                  <label className="flex items-center">
                    <span className="ml-2 text-sm">
                      Already have an account?
                      <a href="/login" className="text-purple-800 font-bold">
                        {' '}
                        sign in
                      </a>
                    </span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile screen */}
      {/* <div className="md:hidden">
        <div className="max-w-md mx-auto w-full px-4">
          <div className="bg-white shadow-md rounded px-6 py-8 mb-4">
            <div className="text-3xl font-bold mb-4 text-center">
              Create your account
            </div>
            <div className="text-base font-thin mb-6 text-center">
              New user? Please enter your details
            </div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
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
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="Enter your address"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                    className="shadow appearance-none border rounded-r w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phoneNumber"
                    type="text"
                    value={formData.phoneNumber}
                    onChange={handleSubmit}
                  />
                </div>
              </div>

              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                  id="password"
                  onChange={handleChange}
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
                <label className="flex items-center">
                  <span className="ml-2 text-sm">
                    By signing in you agree with our
                    <span className="text-purple-800 font-bold">
                      {' '}
                      terms of services{' '}
                    </span>
                    and{' '}
                    <span className="text-purple-800 font-bold">
                      privacy policy
                    </span>
                  </span>
                </label>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Sign Up
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
            Already have an account?{' '}
            <span className="text-purple-800 font-bold">Sign in</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Signup;
