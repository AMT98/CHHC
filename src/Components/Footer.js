import React from "react";
import logo from "../Assets/CaringhandsLogo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  const handleServicesClick = () => {
    navigate("/services");
    window.scrollTo(0, 0);
  };

  const handleAboutClick = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };
  const handleTeamClick = () => {
    navigate("/team");
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-white gradient">
      <svg
        className="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
            <g className="wave" fill="#f8fafc">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <section className="container mx-auto text-center py-6 mb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#A4C6AF]">
          Caring Hands Home Care
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <h3 className="my-4 text-3xl leading-tight uppercase">
          Because home is where the heart is.
        </h3>

        <p className="text-black font-bold">
          14201 E 4th Ave. Ste. 4-200 Aurora CO 80011
        </p>
        <p className="text-black">
          <span className="font-bold">Office.</span> (303) 955-4856
        </p>
        <p className="text-black">
          <span className="font-bold">Fax. </span>(303) 955-4870
        </p>
        <button
          onClick={handleContactClick}
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg gradientText  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Contact Us
        </button>
        <div className="text-black">
          <h3 className="font-bold">Business Hours</h3>
          <p>Monday-Friday</p>
          <p>9:00am - 5:00pm</p>
        </div>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
      </section>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      <div className="container mx-auto  px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <img className="text-[#A4C6AF] w-[190px]" src={logo} alt="logo" />
          </div>

          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Info</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <button
                  onClick={handleServicesClick}
                  className="no-underline hover:underline text-gray-800 hover:text-[#A4C6AF]"
                >
                  Services
                </button>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <button
                  onClick={handleContactClick}
                  className="no-underline hover:underline text-gray-800 hover:text-[#A4C6AF]"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://m.facebook.com/people/Caring-Hands-Home-Care/61560055916100/"
                  className="no-underline hover:underline text-gray-800 hover:text-[#A4C6AF]"
                >
                  Facebook
                </a>
              </li>
              {/* <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-[#A4C6AF]"
                >
                  Instagram
                </a>
              </li> */}
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <button
                  onClick={handleAboutClick}
                  className="no-underline hover:underline text-gray-800 hover:text-[#A4C6AF]"
                >
                  About Us
                </button>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <button
                  onClick={handleTeamClick}
                  className="no-underline hover:underline text-gray-800 hover:text-[#A4C6AF]"
                >
                  Team
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 flex items-center justify-center">
        &copy; 2025 Caring Hands Home Care
      </p>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-6" />
    </footer>
  );
};

export default Footer;
