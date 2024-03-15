import React from "react";
import LOGO from "./LOGOS-04.png";
import { NavLink } from "react-router-dom";
import "./index.css";
export default function Footer() {
  return (
    <div>
      <footer className="w-full h-[500px] bg-pink relative pt-8 pb-6 rounded-4xl">
        <div className=" w-full h-auto bg-cover bg-center ">
          <div className=" w-full h-auto ">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={LOGO}
                className="w-96 h-auto flex items-center justify-center relative opacity-10"
              />
              <div className="w-auto h-auto flex flex-col absolute ">
                <div className="text flex-col justify-center items-center mb-8">
                  <h3 className="text-2xl flex justify-center mt-20 mb-4 font-[800] xsm:text-center md:text-left text-purple mt-60 text-4xl">
                    Rasengan
                  </h3>
                  <h3 className="text-xl mb-2 italic font-semibold text-purple xsm:text-center md:text-left flex justify-center text-3xl">
                    Where the culture resonates
                  </h3>
                  <h3 className="md:w-4/5 text-xl ml-32 flex justify-center items-center text-center">
                    Namaste and a very warm welcome to SpringSpree - our vibrant
                    and colorful cultural fest celebrating the rich artistic
                    traditions of our community!
                  </h3>
                </div>
                <div className="flex-col justify-center items-center mb-4">
                  <div>
                    <h3 className="block uppercase flex justify-center text-purple text-lg font-semibold md: text-xl">
                      USEFUL LINKS
                    </h3>
                    <div className="w-2/5 ml-[320px] flex items-center justify-around">
                      <div className="Links cursor-pointer text-purple font-medium text-lg md:text-lg hover:text-purple font-weight-600 block pb-2 text-md pt-2 ">
                        <NavLink to="/events">Events</NavLink>
                      </div>
                      <div className="Links cursor-pointer text-purple font-medium text-lg md:text-lg hover:text-purple font-weight-600 block pb-2 text-md pt-2">
                        <NavLink to="/sponsors">Sponsors</NavLink>
                      </div>
                      <div className="Links cursor-pointer text-purple font-medium text-lg md:text-lg hover:text-purple font-weight-600 block pb-2 text-md pt-2">
                        <NavLink to="/blogs">Blogs</NavLink>
                      </div>
                      <div className="Links cursor-pointer text-purple font-medium text-lg md:text-lg hover:text-purple font-weight-600 block pb-2 text-md pt-2">
                        <NavLink to="/faq">FAQS</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-center items-center mb-10">
                    <span className="flex justify-center items-center block uppercase text-purple text-lg font-semibold my-2 md: text-xl">
                      Venue
                    </span>
                    <div>
                      <ul className="flex-col justify-center items-center list-unstyled md:text-lg xsm:text-center sm:text-left">
                        <li className="flex justify-center tracking-wide text-purple font-medium md:text-lg">
                          National Institute of Technology Warangal, Hanamkonda
                          Road, 506004
                        </li>
                        <li className=" flex justify-center text-purple font-medium md:text-lg">
                          springspree@nitw.ac.in
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-between ml-48 mb-10">
                    <div id="horz-list" className="">
                      <ul>
                        <li className="rounded-full overflow-hidden transition duration-300 md:text-xl hover:bg-purple rounded-lg py-1 hover:text-pink ">
                          <a
                            href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/privacy"
                            className="block py-2 px-4"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li className="rounded-full overflow-hidden transition duration-300 md:text-xl hover:bg-purple rounded-lg py-1 hover:text-pink mt-2">
                          <a
                            href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/terms"
                            className="block py-2 px-4"
                          >
                            Terms & Conditions
                          </a>
                        </li>
                        <li className="rounded-full overflow-hidden transition duration-300 md:text-xl hover:bg-purple rounded-lg py-1 hover:text-pink mt-2">
                          <a
                            href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/refund"
                            className="block py-2 px-4"
                          >
                            Cancellation & Refund
                          </a>
                        </li>
                        <li className="rounded-full overflow-hidden transition duration-300 md:text-xl hover:bg-purple rounded-lg py-1 hover:text-pink mt-2">
                          <a
                            href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/shipping"
                            className="block py-2 px-4"
                          >
                            Shipping & Delivery
                          </a>
                        </li>
                        <li className="rounded-full overflow-hidden transition duration-300 md:text-xl hover:bg-purple rounded-lg py-1 hover:text-pink mt-2">
                          <a
                            href="https://merchant.razorpay.com/policy/LSwZLjiieyrJiX/contact_us"
                            className="block py-2 px-4"
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="w-full my-4 border-black"></hr>
                  <div className="flex justify-center items-center">
                    <div className="text-sm text-purple font-semibold py-1 md:text-lg ">
                      All rights reserved ©{" "}
                      <span id="get-current-year">2024</span>
                      <span className="text-purple hover:text-gray-800 md:text-lg">
                        {" "}
                        SpringSpree'24 Dev Team{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
