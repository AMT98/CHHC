import React from "react";
import adams from "../Assets/adams.png";
import arapahoe from "../Assets/arapahoe.png";
import boulder from "../Assets/boulder.png";
import broomfield from "../Assets/broomfield.jpg";
import clearcreek from "../Assets/clearcreek.png";
import denver from "../Assets/denver.jpg";
import douglas from "../Assets/douglas.png";
import gilpin from "../Assets/gilpin.jpg";
import jefferson from "../Assets/jefferson.png";
import elpaso from "../Assets/elpaso.jpg";
import elbert from "../Assets/elbert.jpg";
import larimer from "../Assets/larimer.png";
import weld from "../Assets/weld.jpg";
import colorado from "../Assets/coloradov2.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";

const Services = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  return (
    <div className="mt-24 md:mt-0">
      <div classNameName="relative -mt-12 lg:-mt-24">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
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
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
      <section className="bg-white py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="container mx-auto px-2 pt-4 pb-12 text-gray-800"
        >
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#A4C6AF]">
            Services
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4 ">
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <motion.div
                variants={fadeIn("left", "tween", 0.2, 1)}
                className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
              >
                <div className="p-8 text-3xl font-bold text-center border-b-4 gradientText rounded-md">
                  Personal Care Services
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4 gradient">
                    Transfer Assistance
                  </li>
                  <li className="border-b py-4 gradient">Ambulation in/out</li>
                  <li className="border-b py-4 gradient">Eating</li>
                  <li className="border-b py-4 gradient">
                    Bathing and Dressing
                  </li>
                  <li className="border-b py-4 gradient">Positioning</li>
                  <li className="border-b py-4 gradient">Bowel/Bladder Care</li>
                  <li className="border-b py-4 gradient">Hygiene</li>
                  <li className="border-b py-4 gradient">
                    Protective oversight
                  </li>
                  <li className="border-b py-4 gradient">Accompaniment</li>
                  <li className="border-b py-4 gradient">Exercise</li>
                </ul>
              </motion.div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleButtonClick}
                    className="mx-auto lg:mx-0 hover:underline gradientText text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
              <motion.div
                variants={textVariant(0.75)}
                className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
              >
                <div className="w-full p-8 text-3xl font-bold text-center gradientText rounded-md">
                  In-Home Support Services (IHSS)
                </div>
                <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>

                <ul className="w-full text-center text-base font-bold">
                  <li className="border-b py-4 gradient">
                    Bathing and Dressing
                  </li>
                  <li className="border-b py-4 gradient">Skin & Hair Care</li>
                  <li className="border-b py-4 gradient">
                    Nail Care & Mouth Hygiene
                  </li>
                  <li className="border-b py-4 gradient">
                    Feeding & Meal Preparation
                  </li>
                  <li className="border-b py-4 gradient">Mobility Support</li>
                  <li className="border-b py-4 gradient">
                    Exercise Assistance & Transfers
                  </li>
                  <li className="border-b py-4 gradient">Drug Reminders</li>
                  <li className="border-b py-4 gradient">Respiratory Care</li>
                  <li className="border-b py-4 gradient">
                    Accompanying Medical Appointments
                  </li>
                  <li className="border-b py-4 gradient">
                    Protective Oversight
                  </li>
                </ul>
              </motion.div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleButtonClick}
                    className="mx-auto lg:mx-0 hover:underline gradientText text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <motion.div
                variants={fadeIn("right", "tween", 0.2, 1)}
                className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
              >
                <div className="p-8 text-3xl font-bold text-center border-b-4 gradientText rounded-md">
                  Homemaking Services
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4 gradient">Meal Preparation</li>
                  <li className="border-b py-4 gradient">Bathroom Cleaning</li>
                  <li className="border-b py-4 gradient">Kitchen Cleaning</li>
                  <li className="border-b py-4 gradient">Dishwashing</li>
                  <li className="border-b py-4 gradient">Dusting</li>
                  <li className="border-b py-4 gradient">Vacumming</li>
                  <li className="border-b py-4 gradient">Mopping</li>
                  <li className="border-b py-4 gradient">Bedmaking</li>
                  <li className="border-b py-4 gradient">Laundry</li>
                  <li className="border-b py-4 gradient">Grocery/Shopping</li>
                </ul>
              </motion.div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleButtonClick}
                    className="mx-auto lg:mx-0 hover:underline gradientText text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
      </section>

      <div
        id="services"
        className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-black gradient rounded-xl shadow-2xl">
              Communities We Serve
            </h2>

            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
              Caring Hands Homecare is a class B non-medical agency which
              provides professional and dependable personal care, companion care
              and home care workers. Through homecare services, Caring Hands
              enables the seniors and disabled members to remain in the safety
              and comfort of their own home environments for as long as
              possible.
            </p>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <p className="text-lg leading-normal mb-2 font-bold text-black  rounded-xl shadow-2xl mt-12 p-2">
              Caring Hands provides home care to families in the state of
              Colorado in the following counties:
            </p>
          </header>

          <div
            className="flex flex-wrap flex-row -mx-4 text-center rounded-lg"
            style={{
              backgroundImage: `url(${colorado})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${adams})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${arapahoe})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${boulder})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${broomfield})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${clearcreek})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${denver})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${douglas})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${gilpin})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${jefferson})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${elbert})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${elpaso})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${larimer})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
            >
              <div
                className="py-36 px-12 mb-12 gradient rounded-xl shadow-2xl border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${weld})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
