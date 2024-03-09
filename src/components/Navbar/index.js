import { Fragment, useEffect, useState } from "react";
import { Disclosure, } from "@headlessui/react";
import springspree from "./springspree.png";
import './index.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useAuth } from "../../Context/AuthManager";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const currentPath = window.location.pathname;
  const { user, logout } = useAuth()
  let str = "";
  const len = currentPath.length;
  let i = 1;
  while (i < len && currentPath[i] !== "/") {
    str = str + currentPath[i];
    i++;
  }

  const navigation = [
    { name: "HOME", href: "/", current: str === "" },
    // { name: "ABOUT", href: "#", current: str == "about" },
    { name: "EVENTS", href: "/events", current: str === "events" },
    { name: "SPONSORS", href: "/sponsors", current: str === "sponsors" },
    { name: "BLOGS", href: "/blogs", current: str === "blogs" },
    { name: "TEAM", href: "/team", current: str === "team" },
    { name: "FAQs", href: "/faq", current: str === "faq" },
    { name: "MAKE YOUR DP", href: "https://springspree-frame.nitw.in", current: str === "frame" },
    { name: "PRO SHOWS", href: "/proshows", current: str === "proshows" }
  ];

  // For dynamic navbar background change
  const [scrollPosition, setScrollPosition] = useState(0);
  const [top, setTop] = useState(true);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (scrollPosition === 0) {
      setTop(true);
    } else if (scrollPosition > 10) {
      setTop(false);
    } else if (scrollPosition < 10) {
      setTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Disclosure
      as="nav"
      className={`fixed z-50 w-screen backdrop-filter backdrop-blur-lg bg-opacity-30`}
    >
      {({ open }) => (
        <>
          <div className="mx-0 max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lmd:hidden z-[2000]">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <i class="fa-solid fa-xmark text-[25px]"></i>
                  ) : (
                    <i className="fa-solid fa-bars text-[25px]"></i>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 max-[952px]:items-center max-[952px]:justify-center min-[952px]:items-stretch min-[952px]:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className="block h-10 w-auto lmd:hidden"
                      src={springspree}
                      alt="SS"
                    />
                    <img
                      className="hidden h-10 w-auto lmd:block"
                      src={springspree}
                      alt="Spree"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 lmd:block">
                  <div className="flex space-x-4 mylinkdecor items-center justify-center menu-hover-effect menu-hover-effect-1">
                    <ul>
                      {navigation.map((item) => (
                        <li>
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "sigh btn btn-3"
                                : "",
                              "px-3 py-2 rounded-md text-sm font-semibold font-mont effect-box"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Fragment>

                      {
                        user ? (<>
                          <button
                            onClick={logout}
                            className="btn btn-3 logout text-white px-3 py-2 rounded-md text-sm font-semibold font-mont"
                          >
                            Logout
                          </button>
                          <Link to={"/profile"}
                            className="btn btn-3 text-white px-3 py-2 rounded-md text-sm font-semibold font-mont"
                          >
                            Profile
                          </Link>
                        </>) : (
                          <Link to={"/auth"}
                            className="btn btn-3 text-white px-3 py-2 rounded-md text-sm font-semibold font-mont"
                          >
                            Log In
                          </Link>)
                      }

                    </Fragment>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='backdrop-filter backdrop-blur-lg opacity-90 w-full'>
            <div className="space-y-1 px-2 pt-2 pb-3 beaut lmd:hidden font-semibold font-mont">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[#F9C512] text-[#000] liaa"
                      : "text-white hover:bg-[#F9C512] hover:text-[#000]",
                    "block px-3 py-2 rounded-md text-base font-oswald liaa",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Fragment>
                {
                  user ? (<>
                    <Disclosure.Button
                      as="a"
                      href="/profile"
                      className="bg-gray-900 hover:bg-[#F9C512] hover:text-[#000] text-white beautt block px-3 py-2 rounded-md text-base font-oswald liaa"
                    >
                      Profile
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="button"
                      onClick={logout}
                      className="w-full text-left bg-gray-900 hover:bg-[#F9C512] hover:text-[#000] text-white beautt block px-3 py-2 rounded-md text-base font-oswald liaa"
                    >
                      Log Out
                    </Disclosure.Button>
                  </>) : (
                    <Disclosure.Button
                      as="a"
                      href="/auth"
                      className="bg-gray-900 hover:bg-[#F9C512] hover:text-[#000] text-white beautt block px-3 py-2 rounded-md text-base font-oswald liaa"
                    >
                      Log In
                    </Disclosure.Button>
                  )
                }
              </Fragment>
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  );
}