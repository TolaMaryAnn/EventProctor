function ForgotPassword() {
  return (
    <div>
      {/* desktop screen */}
      <div className="items-center justify-center bg-blue-50 h-screen hidden md:flex">
        <div className="">
          <div className="max-w-3xl mx-auto ">
            <div className="bg-white shadow-md rounded  px-24 pt-6 pb-72 mb-4  w-full">
              <div className="">
                <div className="text-4xl font-bold ml-20">Forgot Password?</div>
                <div className="text-base mt-4 font-thin ml-32">
                  Request verification code
                </div>
              </div>

              <form className=" ">
                <div className="mb-4 mt-12">
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

                <div className="flex items-center justify-between mt-6 ">
                  <button
                    className="bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-48 rounded focus:outline-none focus:shadow-outline items-center"
                    type="button"
                  >
                    Send code
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* mobile screen */}
      <div className="md:hidden">
        <div className="max-w-md mx-auto w-full px-4 ">
          <div className="bg-white shadow-md rounded px-6 pb-72 py-8 mb-4">
            <div className="text-center ">
              <div className="text-3xl font-bold mb-4">Forgot Password?</div>
              <div className="text-sm font-thin mb-6">
                Request verification code
              </div>
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

              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Send code
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
