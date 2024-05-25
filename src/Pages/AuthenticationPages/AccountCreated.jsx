import Ac from '../../assets/AC.png';

function AccountCreated() {
  return (
    <div>
      {/* desktop screen */}
      <div className="items-center justify-center bg-blue-50 h-screen hidden md:flex">
        <div className="">
          <div className="max-w-3xl mx-auto ">
            <div className="bg-white shadow-md rounded px-24 pt-6 pb-8 mb-4  w-full">
              <div className="">
                <div className="text-4xl font-bold ml-12">
                  Your account is created
                </div>
                <div className="text-base mt-4 font-thin ml-28">
                  Verify your email to activate account
                </div>
              </div>
              <div className="mt-16 mb-16 ml-20">
                <img src={Ac} />
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

                <div className="mt-6 mb-4">
                  <label className="flex items-center">
                    <div>
                      {' '}
                      Click on the link sent to your email address{' '}
                      <span className=" text-purple-800 font-bold">
                        Anniemay@gmail.com
                      </span>
                    </div>
                  </label>
                </div>
                <div className="flex items-center justify-between ">
                  <button
                    className="bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-48 rounded focus:outline-none focus:shadow-outline items-center"
                    type="button"
                  >
                    Resend email
                  </button>
                </div>

                <div className="mt-10 ml-32">
                  <label className="flex items-center">
                    <span className="ml-2 text-sm">
                      Need help?
                      <span className="text-purple-800 font-bold">
                        {' '}
                        Contact support
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
            <div className="text-center ">
              <div className="text-3xl font-bold mb-4">
                Your account is created
              </div>
              <div className="text-sm font-thin mb-6">
                Verify your email to activate account
              </div>
            </div>
            <div className="mt-10 mb-8 ">
              <img src={Ac} />
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

              <div className="mb-4">
                <label className="flex items-center ">
                  <div className="text-center ">
                    {' '}
                    Click on the link sent to your email address{' '}
                    <span className=" text-purple-800 font-bold">
                      Anniemay@gmail.com
                    </span>
                  </div>
                </label>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Resend email
                </button>
              </div>
            </form>
          </div>
          <div className="text-sm text-center text-gray-700 mb-6">
            Need help?
            <span className="text-purple-800 font-bold"> Contact support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountCreated;
