import React from "react";
import Chhusang from "../Assets/ChhusangsPic.jpg";
import DJ from "../Assets/djRobbins.jpg";
import shyamDai from "../Assets/shyamDaiv2.jpg";

const Team = () => {
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

      <div className="bg-white  ">
        <section className="container mx-auto text-center py-6 ">
          <div className="w-full ">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-[#A4C6AF]">
              Meet Our Team
            </h1>
            <div className="h-1 mx-auto gradient w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </section>
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 shadow-2xl border-t-transparent rounded-tr-none rounded-tl-none rounded-xl">
            <img
              className=" rounded-xl w-[300px] ml-16 mt-16 h-auto shadow-2xl"
              src={shyamDai}
              alt="ShyamsPic"
            />
            <div>
              <div className="text-base leading-7 px-6 text-gray-700 lg:max-w-lg">
                <h1 className="mt-2 text-xl  font-bold tracking-tight text-gray-900 gradient p-2 rounded-lg sm:text-2xl shadow-xl">
                  Sushil Dahal
                </h1>
                <p className="text-base font-semibold leading-7 text-[#A4C6AF] mt-2 ">
                  Administrator
                </p>
                <div className="max-w-base text-sm italic ">
                  <p className="mt-6">
                    "Since my youth, I have been deeply committed to community
                    engagement. As a refugee immigrant to the United States, I
                    experienced firsthand the challenges faced by community
                    members, which fueled my passion for helping others. I
                    noticed that many individuals were forced to miss work to
                    care for elderly or ill family members, leading to financial
                    strain and diminished quality of life. In 2018, I entered
                    the home care industry to support marginalized communities,
                    empowering them to achieve financial independence by caring
                    for their loved ones who are elderly or have disabilities or
                    long-term illnesses. As the owner of a home and day care
                    facility for several years, I have worked closely with
                    numerous clients, fostering strong, lasting relationships
                    within the communities I serve.
                  </p>
                  <p className="mt-6">
                    {" "}
                    In 2019, I expanded my efforts by launching a non-emergency
                    medical transportation service to provide safe and reliable
                    transportation for Medicaid members. Recognizing that many
                    community members were missing critical hospital
                    appointments and medication refills due to transportation
                    barriers and language difficulties, my team and I aimed to
                    make Namaste a vital link between these individuals and
                    healthcare providers, ensuring that they receive the care
                    they need despite these challenges.
                  </p>

                  <p className="mt-6">
                    Most recently, in 2023, I co-founded Caring Hands Home Care
                    LLC with my partners, Chhusang and DJ, to extend our
                    services to seniors, elderly individuals, and adults with
                    mental and physical challenges. Our mission is to prioritize
                    our clients' needs and health with the utmost respect, care,
                    and integrity, helping them lead long, healthy, and
                    fulfilling lives from the comfort of their own homes."
                  </p>
                </div>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4"></dl>
            </div>
          </div>
        </div>
      </div>

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
      <div className="bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 shadow-2xl rounded-xl">
            <img
              className=" rounded-xl w-[300px] ml-16 mt-16 h-auto shadow-2xl"
              src={Chhusang}
              alt="ChhusangsPic"
            />
            <div>
              <div className="text-base px-6 leading-7 text-gray-700 lg:max-w-lg">
                <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl gradient p-2 rounded-lg shadow-xl">
                  Chhusang Sherpa
                </h1>
                <p className="text-base font-semibold leading-7 text-[#A4C6AF] mt-2">
                  Alternate Administrator
                </p>
                <div className="max-w-base text-sm italic">
                  <p className="mt-6">
                    "From a young age, I have been deeply engaged in the helping
                    profession, whether through volunteering with non-profit
                    organizations in my home country of Nepal or organizing
                    neighborhood children in the evenings to assist with
                    homework and school projects. My upbringing in a close-knit
                    community that values sharing, support, and resilience has
                    instilled in me a strong commitment to caring for others.
                    These values have opened doors to meaningful opportunities
                    in various settings. While still in school, I had the chance
                    to volunteer at a public library in Spain, where I taught
                    English to Moroccan and Turkish refugees striving to build
                    new lives. As English is my third language, I dedicated
                    extra time and effort to designing lesson plans and
                    curriculum. What fueled my perseverance were the determined
                    and resilient students who attended my classes every day,
                    greeting me with big smiles and sharing homemade meals.
                  </p>
                  <p className="mt-8">
                    In the United States, I have continued my journey in the
                    helping professions, working in diverse fields such as
                    mental health clinics, public agencies, home care services,
                    and non-profit organizations.
                  </p>
                  <p className="mt-8">
                    In essence, my work has always centered around helping
                    others, being present for them, and empowering people to
                    learn and grow together. With the same dedication and
                    resolve, I joined Caring Hands Home Care to support Colorado
                    families by providing reliable, high-quality home care
                    services, ensuring their loved ones receive the care they
                    deserve in the comfort of their own homes."
                  </p>
                </div>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4"></dl>
            </div>
          </div>
        </div>
      </div>

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
      <div className="bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 shadow-2xl rounded-xl">
            <img
              className=" rounded-xl w-[300px] ml-16 mt-16 h-auto shadow-2xl"
              src={DJ}
              alt="DJsPic"
            />
            <div>
              <div className="text-base px-6 leading-7 text-gray-700 lg:max-w-lg">
                <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl gradient p-2 rounded-lg shadow-xl">
                  DJ Robbins
                </h1>
                <p className="text-base font-semibold leading-7 text-[#A4C6AF] mt-2">
                  Secretary
                </p>
                <div className="max-w-base text-sm italic">
                  <p className="mt-6">
                    "Passion... Commitment... Flexibility... David Robbins’
                    journey is a testament to selflessness and relentless
                    dedication. As one of the owners of Caring Hands Home Care,
                    my life narrative seamlessly intertwines a spirit of service
                    with a passion for care.
                  </p>
                  <p className="mt-8">
                    Throughout my adult years, I remained steadfast in my
                    commitment to serve and sacrifice for others. With every
                    challenge I faced, I adapted and evolved, embodying the
                    essence of resilience. As I transition into a new chapter of
                    my life, the desire to continue making a difference is
                    undiminished. The answer to my calling Caring Hands Home
                    Care is a compassionate company dedicated to the well-being
                    of its residents.The decision wasn’t merely a business move;
                    it was a heartfelt one. Drawn to its Culture of Care, I
                    found that Caring Hands Home Care aligned perfectly with my
                    values and aspirations. Every service we offer, from hospice
                    care and companion care to Veterans assistance and long-term
                    adult living, is a reflection of how to care, to serve, and
                    to uplift.
                  </p>
                  <p className="mt-8">
                    Now, as a pivotal member of the Caring Hands Home Care
                    family, I am excited not just about the services Caring
                    Hands Home Care provides but about the impact they make.
                    Serving the Colorado region, Our TEAM is more than just
                    caregivers; we are lifelines, companions, and friends."
                  </p>
                </div>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4"></dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
