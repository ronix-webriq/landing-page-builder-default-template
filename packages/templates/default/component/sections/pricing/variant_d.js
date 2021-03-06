import React from "react"

export default function VariantD() {
  return (
    <section>
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-2xl mx-auto text-center">
            <div className="max-w-lg mx-auto">
              <span className="text-green-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                All the tools you need in one workspace.
              </h2>
              <p className="mb-8 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              <label className="md:mr-4 w-full sm:w-auto flex items-center mr-8 mb-2">
                <input type="radio" name="billing" defaultValue={1} />
                <span className="mx-2 font-semibold">Monthly Billing</span>
                <span className="inline-flex items-center justify-center w-12 h-10 bg-green-600 text-white font-semibold rounded-lg">
                  $59
                </span>
              </label>
              <label className="flex w-full sm:w-auto items-center mb-2">
                <input type="radio" name="billing" defaultValue={2} />
                <span className="mx-2 font-semibold">Annual Billing</span>
                <span className="inline-flex items-center justify-center w-12 h-10 bg-green-600 text-white font-semibold rounded-lg">
                  $99
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-wrap bg-white rounded shadow">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="px-6 py-8 lg:px-8 text-center">
                <span className="text-gray-400">Sign In</span>
                <h4 className="mb-8 text-2xl font-heading">
                  Finish your payment
                </h4>
                <form className="mb-4" action>
                  <div className="flex mb-4 px-4 bg-gray-50 rounded">
                    <input
                      className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 focus:outline-none"
                      type="email"
                      placeholder="pat@shuffle.com"
                    />
                    <svg
                      className="h-6 w-6 ml-4 my-auto text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <div className="flex mb-6 px-4 bg-gray-50 rounded">
                    <input
                      className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 focus:outline-none"
                      type="password"
                      placeholder="Enter your password"
                    />
                    <button className="ml-4">
                      <svg
                        className="h-6 w-6 my-auto text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-left mb-5 text-sm text-gray-400">
                    <label className="flex">
                      <input type="checkbox" name="terms" defaultValue={1} />
                      <span className="ml-1 text-xs">
                        By signing up, you agree to our{" "}
                        <a
                          className="text-green-600 font-bold hover:text-green-700"
                          href="#"
                        >
                          Terms,
                        </a>
                        <a
                          className="text-green-600 font-bold hover:text-green-700"
                          href="#"
                        >
                          Data Policy
                        </a>{" "}
                        and{" "}
                        <a
                          className="text-green-600 font-bold hover:text-green-700"
                          href="#"
                        >
                          Cookies Policy.
                        </a>
                      </span>
                    </label>
                  </div>
                  <button className="block w-full p-4 text-center text-white font-bold leading-none bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl transition duration-200">
                    Buy Monthly Supply
                  </button>
                </form>
                <p className="text-xs text-gray-400 text-xs">
                  Already have an account?{" "}
                  <a className="text-green-600 hover:underline" href="#">
                    Sign In
                  </a>
                </p>
              </div>
            </div>
            <div className="py-10 w-full md:w-1/2 bg-green-600 lg:rounded-r overflow-hidden flex flex-col">
              <img
                className="w-full md:max-w-xs mx-auto my-auto"
                src="https://business.devtubes.com/img/cover-img-1.png"
                alt=""
              />
              <h3 className="mb-4 max-w-sm mx-auto text-center text-xl text-white">
                Best for
                <span className="font-bold">freelance developers</span>
                who need to save their time.
              </h3>
              <div className="text-center">
                <button className="inline-block mr-2 w-2 h-2 bg-green-400 rounded-full" />
                <button className="inline-block mr-2 w-2 h-2 bg-green-400 rounded-full" />
                <button className="inline-block mr-2 w-2 h-2 bg-white rounded-full" />
                <button className="inline-block w-2 h-2 bg-green-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div>
    </section>
  )
}
