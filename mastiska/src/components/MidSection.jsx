import React from "react";

const MidSection = () => {
  return (
    <div>
      <section className="relative w-11/12 max-w-[1080px] mx-auto -z-50">
        <div>
          <h2 className="text-[40px] leading-[48px] pb-[16px] text-[#404659] font-mulish font-bold">
            All in one free and effective mental health application <br />{" "}
            Spectrum
          </h2>
          <p className="mb-[40px] text-[20px] leading-[30px] text-[#141b2c] font-mulish">
            We support you in screening for mental illnesses <br /> while also
            giving further course of action for your <br /> particular mental
            health issue.
          </p>
          {/* <!-- card --> */}
          <div className="flex justify-between mb-16">
            {/* <!-- card 1 --> */}
            <div
              className="w-[250px] h-[345px] flex items-end justify-center pb-5 bg-[url(./images/faceurl.png)] rounded-[20px]
                         bg-no-repeat bg-cover"
            >
              <h2 className="text-[22px] text-[#fff] font-mulish font-bold leading-[26px]">
                Face Your Fears
              </h2>
            </div>

            <div
              className="w-[250px] h-[345px] flex items-end justify-center pb-5 bg-[url(./images/getactiveurl.png)] rounded-[20px]
                        bg-no-repeat bg-cover"
            >
              <h2 className="text-[22px] text-[#fff] font-mulish font-bold leading-[26px]">
                Get Active
              </h2>
            </div>

            <div
              className="w-[250px] h-[345px] flex flex-col  justify-end  pb-5 bg-[url(./images/stoplooping.png)] rounded-[20px]
                        bg-no-repeat bg-cover"
            >
              <h2 className="text-[22px]  text-[#fff]   mx-auto font-mulish font-bold leading-[26px]">
                Stop Looping{" "}
              </h2>
              <h2 className="text-[22px] text-[#fff] mx-auto font-mulish font-bold leading-[26px]">
                Thoughts
              </h2>
            </div>
            {/* <!-- card 4 --> */}
            <div
              className="w-[250px] h-[345px] flex items-end justify-center pb-5 bg-[url(./images/eat.png)] rounded-[20px]
                        bg-no-repeat bg-cover"
            >
              <h2 className="text-[22px] text-[#fff] font-mulish font-bold leading-[26px]">
                Eat Intuitively
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className=" relative w-11/12  max-w-[1080px]   -z-50 ">
        <img
          src="./images/ball.png"
          alt=""
          className="-left[34%] top-[10px]  w-[75%] absolute  -z-10"
        />

        {/* <div className="pl-[14%] pt-[15%]">
          <h2 className="font-mulish text-[40px] leading-[48px] font-bold pb-[16px] text-[#404659]">
            Effective Help for Your <br /> Well-being
          </h2>
          <p className="mb-[24px] text-[20px] leading-[30px] font-mulish text-[#141b2c]">
            A close integration of science and practice is important to <br />{" "}
            us. We work with leading research institutions to <br />{" "}
            continuously improve the quality of our services.
          </p>
          <div className="cursor-pointer group">
            <button
              className=" py-3 my-4 px-4 
                    rounded-[100px] font-bold text-sm cursor-pointer bg-[#ebe1dd] group-hover:bg-buttoncolor text-[#4d7f7f]  text-[16px] leading-[20px] transition-all duration-200 
                    hover:text-lightBlue500 "
            >
              More about the efficacy{" "}
            </button>
          </div>
        </div> */}

        <div
          className="bg-[url(./images/ballsection1.png)]  relative mt-[40px] z-10 ml-[15%] url1 mb-11 w-[100%]
        h-[540px] rounded-[20px] flex items-end pl-7 pb-10"
        >
          <div
            style={{
              background: "linear-gradient(0deg,#000,transparent 94.32%)",
            }}
            className="absolute w-[100%] h-[200px] rounded-[20px] left-0 bottom-0 -z-50"
          ></div>
          <h2 className="text-[40px] leading-[48px] text-[#fff] font-mulish  font-bold">
            Mental health screening <br /> and course-of-action for You
          </h2>
        </div>
      </section>
      <section className="relative  w-11/12 max-w-[1080px] mx-auto -z-50">
        <div
          className="mt-[60px]  mb-32 flex flex-row justify-between py-[34px] pr-[28px]
             pl-[24px] bg-[#f9f4f2] border -z-10 border-[#e2d8d3]  rounded-[20px] "
        >
          {/* <!-- leftpart --> */}
          {/* <div className="flex space-x-4 items-center -z-9 ">
            <img src="./images/cooperatinginsurancesimg.svg" alt="" />
            <div>
              <h2 className="text-[20px] leading-[28px]  text-[#141414] font-mulish font-bold">
                Covered by many health insurance providers
              </h2>
              <p className="text-[#141b2c] text-[18px]  font-mulish leading-[27px]">
                Find out if your health insurance will cover the cost.
              </p>
            </div>
          </div> */}

          {/* <button
            className=" py-2 my-6 px-6 
        rounded-[100px] font-bold text-sm bg-buttoncolor cursor-pointer text-white  text-[16px] leading-[20px] transition-all duration-200 
        hover:text-lightBlue500  "
          >
            cooperating insurances
          </button> */}
        </div>
      </section>
      {/* \<-- Benefit with MastikaTrack --> */}
      <section className="relative w-11/12 max-w-[1080px]">
        <img
          src="./images/ball.png"
          alt=""
          className="-left[44%] top-[10px]  w-[75%] absolute  -z-10"
        />

        <div className="pl-[20%] pt-[10%]  ">
          <h2
            className=" text-[40px] leading-[48px] text-[#404659] font-mulish
             font-bold pb-[16px]"
          >
            Benefit with MastikaTrack
          </h2>
        </div>
        {/* <!-- card --> */}
        <div className="flex justify-between w-full ml-[12%] mt-14">
          {/* <!-- card 1 --> */}
          <div className="w-[25%] -z-10">
            <img src="./images/benefitcard1.png" alt="" />
            <p className="mt-[34px] text-[18px] leading-[27px] mb-[16px] font-bold font-mulish">
              "The whole concept impressed <br /> me and helped me immensely{" "}
              <br /> quickly and effectively."
            </p>
            <p clacc="text-[14px] leading-[21px] font-mulish mt-[16px] text-[#000000]">
              MastikaTrack Patient
            </p>
          </div>

          <div className="w-[25%] -z-10">
            <img src="./images/benefitcard2.png" alt="" />
            <p className="mt-[34px] text-[18px] leading-[27px] mb-[16px] font-bold font-mulish">
              "MastiskaTrack combines excellent screening with further steps{" "}
            </p>
            <p clacc="text-[14px] leading-[21px] font-mulish mt-[16px] text-[#000000]">
              MastikaTrack Patient
            </p>
          </div>

          <div className="w-[25%] -z-10">
            <img src="./images/benefitcard3.png" alt="" />
            <p className="mt-[34px] text-[18px] leading-[27px] mb-[16px] font-bold font-mulish">
              "So helpful"
            </p>
            <p clacc="text-[14px] leading-[21px] font-mulish mt-[16px] text-[#000000]">
              MastiskaTrack User
            </p>
          </div>
        </div>
      </section>
      {/* <section
        className="relative w-11/12 max-w-[1080px] mb-11  -z-10 bg-[url(./images/qualityhealth.png)] bg-no-repeat 
    h-[344px] mt-[150px] bg-cover mx-auto pl-[30px] pt-[35px]"
      > */}
      {/* <div
          style={{
            background: "linear-gradient(0deg,#000,transparent 94.32%)",
          }}
          className="absolute w-[30%] h-[200px] rounded-[20px] left-0 bottom-0 -z-50"
        ></div>
        <div className="flex flex-col ">
          <h2 className="text-[40px] leading-[48px] text-[#fff] font-bold font-mulish pb-[16px]">
            Quality Mental <br /> Health Support
          </h2>
          <p className="text-[18px] leading-[27px] text-[#fff] font-mulish mb-[16px]">
            We partner with companies, universities, and health <br /> insurance
            companies to help more people on their <br /> mental health journey.
          </p>
          <button
            className=" py-3 my-4 px-8  
            rounded-[100px] font-bold text-sm bg-buttoncolor cursor-pointer text-white w-fit text-[16px] leading-[20px] transition-all duration-200 
            hover:text-lightBlue500  "
          >
            Learn More
          </button>
        </div> */}
      {/* </section> */}
    </div>
  );
};

export default MidSection;
