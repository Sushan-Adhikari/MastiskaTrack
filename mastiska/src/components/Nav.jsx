import React from "react";

const Nav = () => {
  return (
    <div
      id="home"
      className="w-full overflow-x-hidden relative font-[url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100&family=Lugrasimo&display=swap')]"
    >
      <nav className="bg-navbg z-100 fixed">
        <div
          style={{ background: "linear-gradient(180deg, #f4f8ff, #fff0)" }}
          className="absolute w-full h-[150px] top-0 -z-50"
        ></div>
        <div className="relative lg:w-[1300px] w-full mx-auto flex items-center ">
          <a href="/" className="cursor-pointer py-1 pr-7 ">
            <div className="flex md:items-center justify-center">
              {" "}
              <img
                src="./images/logo.jpg"
                width="50px"
                height="5px"
                className="-mt-1 rounded-full ml-10 text-colorimg"
                alt=""
              />
              <h3 className="text-xl font-extrabold px-3 text-red-900">
                Mastiska
              </h3>
            </div>
          </a>
          <ul className="flex ml-10 space-x-6">
            <li className="text-[#141b2c] font-mulish my-4 cursor-pointer relative group transition-all duration-200 hidden lg:block ">
              <a href="#">Helpline</a>
            </li>
            <li className="text-[#141b2c] font-mulish my-4 hidden lg:block cursor-pointer relative group transition-all duration-200 ">
              <a href="#">Self-Care</a>
            </li>
            <li className="text-[#141b2c] font-mulish my-4 hidden lg:block cursor-pointer relative group transition-all duration-200 ">
              <a href="#">Consultants</a>
            </li>
            <li className="text-[#141b2c] font-mulish my-4 lg:block cursor-pointer relative group transition-all duration-200 ">
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div className="flex space-x-6 ml-[380px] pt-3">
            <button className="py-3 my-4 px-5 text-[#141b2c] leading-[27px] text-[18px]">
              Log in
            </button>
            <button className="py-3 my-4 px-4 rounded-[100px] font-bold text-sm bg-[#4d7f7f] text-white text-[16px] leading-[20px] transition-all duration-200 hover:text-lightBlue500">
              Do Our Self-Test
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
