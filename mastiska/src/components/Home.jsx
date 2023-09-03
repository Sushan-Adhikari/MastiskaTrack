import React from "react";
import Nav from "./Nav";
// import Psychotherapy from "./Psychotherapy";
// import MidSection from "./MidSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="w-full overflow-x-hidden relative font-[url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100&family=Lugrasimo&display=swap')]"
      >
        <Nav />
        <section className="bg-[url(./images/IMG-20230901-WA0000.jpg)] pb-[300px] bg-100-100 opacity-100  hero bg-no-repeat w-full bg-cover relative -mt-[30px] -z-10 py-52 ">
          {/* Content */}
          <div className="flex flex-col  gap-y-5 w-[800px] ml-[200px]">
            <h2 className="text-[#101731]  font-mulish leading-[1.2] text-4xl font-extrabold">
              Modernizing Mental Health
              <br />
            </h2>
            <p className="text-[#fff] font-mulish text-2xl">
              MastiskaTrack helps in screening <br /> for any mental health
              issues.{" "}
            </p>
            <button className="py-3 my-4 w-[50%] px-4 rounded-[100px] font-bold text-sm bg-[#4d7f7f] text-white text-[16px] leading-[20px] transition-all duration-200 hover:text-lightBlue500">
              Do Our Self-Test
            </button>
          </div>
        </section>

        {/* <Psychotherapy /> */}
        {/* <MidSection /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
