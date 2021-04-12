import React from "react"
import PropTypes from "prop-types"
import { urlFor } from "../../../lib/sanity"

export default function VariantA({
  template,
  image,
  title,
  description,
  primaryButton,
  secondaryButton,
}) {
  return (
    <section className="skewed-bottom-right">
      {/* <nav className="relative px-6 py-6 flex justify-between items-center bg-gray-50">
                <a className="text-3xl font-bold leading-none" href="#"><img className="h-12" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto" /></a>
                <div className="lg:hidden">
                <button className="navbar-burger flex items-center text-gray-400 p-3">
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Start</a></li>
                <li className="text-gray-800">
                    <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                    </svg>
                </li>
                <li><a className="text-sm text-green-600 font-bold" href="#">About Us</a></li>
                <li className="text-gray-800">
                    <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                    </svg>
                </li>
                <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
                <li className="text-gray-800">
                    <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                    </svg>
                </li>
                <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Platform</a></li>
                <li className="text-gray-800">
                    <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                    </svg>
                </li>
                <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Testimonials</a></li>
                </ul>
                <a className="hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-50 text-sm text-green-600 font-bold rounded-l-xl rounded-t-xl transition duration-200" href="#">Contact Us</a>
            </nav> */}
      <div
        className={`bg-${template.bg}-50 pt-12 lg:pt-20 pb-20 radius-for-skewed`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
              <div className="w-full text-center lg:text-left">
                <div className="max-w-md mx-auto lg:mx-0">
                  <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                    {/* <span>Build &amp; Launch without </span>
                    <span className={`text-${template.color}-600`}>
                      problems
                    </span> */}
                    <span>{String(title).split("*")[0]}</span>
                    <span className={`text-${template.color}-600`}>
                      {String(title).split("*")[1]}
                    </span>
                  </h2>
                </div>
                <div className="max-w-sm mx-auto lg:mx-0">
                  <p className="mb-6 text-gray-400 leading-loose">
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque efficitur nisl sodales egestas lobortis. */}
                    {description}
                  </p>
                  <div>
                    {primaryButton === undefined ||
                    primaryButton.text === undefined ? null : (
                      <a
                        className={`inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-${template.color}-600 hover:bg-${template.color}-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200`}
                        href={primaryButton.link}
                      >
                        {primaryButton.text}
                      </a>
                    )}
                    {secondaryButton === undefined ||
                    secondaryButton.text === undefined ? null : (
                      <a
                        className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                        href={secondaryButton.link}
                      >
                        {secondaryButton.text}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
              <div className="relative" style={{ zIndex: 0 }}>
                <img
                  className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
                  src={urlFor(image)}
                  alt=""
                />
                <img
                  className="hidden md:block absolute"
                  style={{ top: "-2rem", right: "3rem", zIndex: "-1" }}
                  src="atis-assets/elements/green-dark-up.svg"
                  alt=""
                />
                <img
                  className="hidden md:block absolute"
                  style={{ bottom: "-2rem", right: "-2rem", zIndex: "-1" }}
                  src="atis-assets/elements/wing-green-down.svg"
                  alt=""
                />
                <img
                  className="hidden md:block absolute"
                  style={{ top: "3rem", right: "-3rem", zIndex: "-1" }}
                  src="atis-assets/elements/bullets-gray-right.svg"
                  alt=""
                />
                <img
                  className="hidden md:block absolute"
                  style={{ bottom: "2.5rem", left: "-4.5rem", zIndex: "-1" }}
                  src="atis-assets/elements/bullets-gray-left.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div className="hidden navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img
                className="h-10"
                src="atis-assets/logo/atis/atis-mono-black.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  Start
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  Platform
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign In
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>© 2020 All rights reserved.</span>
            </p>
            <div className="text-center">
              <a className="inline-block px-1" href="#">
                <img src="atis-assets/social/facebook.svg" alt="" />
              </a>
              <a className="inline-block px-1" href="#">
                <img src="atis-assets/social/twitter.svg" alt="" />
              </a>
              <a className="inline-block px-1" href="#">
                <img src="atis-assets/social/instagram.svg" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

VariantA.propTypes = {
  template: PropTypes.object,
  image: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  primaryButton: PropTypes.object,
  secondaryButton: PropTypes.object,
}