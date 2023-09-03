import React from "react";

const Psychotherapy = () => {
  return (
    <>
      {/* <!-- service section --> */}
      <section className="w-full pt-[60px] h-full relative">
        <div className="mx-auto w-11/12 max-w-[1080px] relative">
          <h2 className="text-[#404659] text-2xl pb-5 font-bold">
            Our Services
          </h2>
          {/* <!-- service card --> */}
          <div className="flex flex-row justify-between mb-16">
            {/* <!-- card 1 --> */}
            <div className="bg-[url(./images/servicesectionurl.png)] w-[520px] rounded-[20px] -z-10 relative servicecard pb-3 pl-5 pt-40 h-[220px]">
              <div
                style={{
                  background: "linear-gradient(0deg,#000,transparent 94.32%)",
                }}
                className="absolute w-[520px] h-[100px] rounded-[20px] left-0 bottom-0 -z-50"
              ></div>
              <h2 className="text-white text-2xl font-4xl -z-10">
                Screen For Mental Health issues
              </h2>
            </div>
            {/* <!-- card 2 --> */}
            <div className="bg-[url(./images/servicesectonurl2.png)] rounded-[20px] relative servicecard pb-3 -z-10 pl-5 pt-40 w-[520px] h-[220px]">
              <div
                style={{
                  background: "linear-gradient(0deg,#000,transparent 94.32%)",
                }}
                className="absolute w-[520px] h-[100px] rounded-[20px] left-0 bottom-0 -z-50"
              ></div>
              <h2 className="text-white text-2xl font-4xl -z-10">Seek Help</h2>
            </div>
          </div>
          {/* <!-- text content --> */}
          <h2 className="text-[#404659] text-4xl leading-[48px] pb-[16px] font-mulish">
            Get your test done today.
          </h2>
          <p className="mb-[40px] text-lg leading-[30px] font-mulish text-[#141b2c]">
            Get your mental health status by providing us a brief answer to
            specific questions <br /> Wait no more to seek help, Stigma is
            superficial.
          </p>
          {/* <!-- card --> */}
          <div className="flex flex-row justify-between mb-16">
            {/* <!-- card 1 --> */}
            <div className="bg-[url(./images/servicesection3.png)] -z-10 relative rounded-[20px] bg-no-repeat bg-cover w-[340px] h-[469px] pl-5 gap-x-5 pb-5 flex flex-row items-end">
              <div
                style={{
                  background: "linear-gradient(0deg,#000,transparent 94.32%)",
                }}
                className="absolute w-[340px] h-[200px] rounded-[20px] left-0 bottom-0 -z-50"
              ></div>
              <h2 className="text-white text-2xl font-bold -z-10 font-mulish leading-[75px]">
                1
              </h2>
              <h3 className="text-[18px] font-bold leading-[27px] -z-10 font-mulish text-white">
                Answer set of questions.
              </h3>
            </div>
            {/* <!-- card 2 --> */}
            <div className="bg-[url(./images/servicesection4.jpg)] rounded-[20px] relative -z-10 rounded-20px bg-no-repeat bg-cover w-[340px] h-[469px] flex pl-5 gap-x-5 pb-5 flex-row items-end">
              <div
                style={{
                  background: "linear-gradient(0deg,#000,transparent 94.32%)",
                }}
                className="absolute w-[340px] h-[200px] rounded-[20px] left-0 bottom-0 -z-50"
              ></div>
              <h2 className="text-white text-2xl font-bold -z-10 font-mulish leading-[75px]">
                2
              </h2>
              <h3 className="text-[18px] leading-[27px] font-bold -z-10 font-mulish text-white">
                Get your report <br />
              </h3>
            </div>
            {/* <!-- card 3 --> */}
            <div className="bg-[url(./images/servicesection5.png)] relative bg-no-repeat bg-cover -z-10 w-[340px] h-[469px] flex flex-row pl-5 gap-x-5 rounded-[20px] pb-5 items-end">
              <div
                style={{
                  background: "linear-gradient(0deg,#000,transparent 94.32%)",
                }}
                className="absolute w-[340px] h-[200px] rounded-[20px]  left-0 bottom-0 -z-50"
              ></div>
              <h2 className="text-white text-2xl font-bold -z-10 font-mulish leading-[75px]">
                3
              </h2>
              <h3 className="text-[18px] leading-[27px] font-bold -z-10 font-mulish text-white">
                Get desirable course of action <br /> to imporve your mental
                health
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- learn more  --> */}
      <section className="relative w-11/12 max-w-[1080px] mx-auto -z-50">
        <div className="mt-[60px] mb-32 flex flex-row justify-between py-[34px] pr-[28px] pl-[24px] bg-[#f9f4f2] border -z-10 border-[#e2d8d3] rounded-[20px] ">
          {/* <!-- leftpart --> */}
          {/* <!-- left part --> */}
          <div className="flex space-x-4 items-center -z-9">
            <img src="./images/learnmore.svg" alt="" />
            <div>
              <h2 className="text-[20px] leading-[28px] text-[#141414] font-mulish font-bold">
                Do you have questions about MastiskaTrack?
              </h2>
              <p className="text-[#141b2c] text-[18px] font-mulish leading-[27px]">
                Here, you'll find more information.(about us)
              </p>
            </div>
          </div>

          {/* <!-- rightpart --> */}
          <button
            className=" py-2 my-6 px-6 
        rounded-[100px] font-bold text-sm bg-buttoncolor cursor-pointer text-white  text-[16px] leading-[20px] transition-all duration-200 
        hover:text-lightBlue500  "
          >
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default Psychotherapy;
