import Axios from "axios";
import config from "@/config/config";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Header() {
  const [city, setCity] = useState([]);
  function myFunction() {
    var x = document.getElementById("dropdownNavbar");
    x.classList.toggle("hidden");
  }
  function getData() {
    Axios({
      method: "get",
      url: config.API_URL + "api/city",

      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setCity(res.data);
    });
  }
  // const getData = async () => {
  //   try {
  //     const resp = await Axios({
  //       method: "get",
  //       url: config.API_URL + "api/city",

  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log(resp.data);
  //   } catch (err) {
  //     // Handle Error Here
  //     console.error(err);
  //   }
  // };
  useEffect(() => {
    getData();
  }, []);
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 ">
      <div
        className="container flex flex-wrap items-center justify-between mx-auto px-5 rm-main__navigation visible-md visible-lg rm-newHome"
        style={{ width: "80%" }}
      >
        <a href="https://flowbite.com/" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>

        <div className="" id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="dropdown rm-cityChooser">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                onClick={myFunction}
                className="flex items-center justify-between w-fulclassnamel py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Select{" "}
                <svg
                  className="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className="z-10 hidden absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400 dropdown-menu rm-dropdown__city nav-arrow non-fullheightrm-city__list "
                  aria-labelledby="dropdownLargeButton"
                >
                  {city.map((city) => {
                    return (
                      <li
                        className=" inline-block text-center cityContainer"
                        id={city.id}
                        key={city.id}
                      >
                        <a href="#" className="block px-4 py-2">
                          <Image
                            src={city.image_url}
                            className="cityicon"
                            alt={city.name}
                          ></Image>
                          <span className="rm-city__text">{city.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block  p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for products"
          style={{ width: "50%" }}
        />
        <div className="">
          <a href="/checkout/cart" className="">
            <span className=""></span>
            <span className="mr-3">Cart</span>
          </a>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Login / SignUp
          </button>
        </div>
      </div>
    </nav>
  );
}
