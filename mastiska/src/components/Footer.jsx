import React from "react";

const Footer = () => {
  return (
    <div>
      <section className=" relative">
        <div>
          <img src="./images/footer-flowers-large.2f0e5da0.svg" alt="" />
        </div>
        <div className="bg-[#4c7f7f] pt-[28px] pr-[20px]    w-[100%]">
          <div className="justify-between flex">
            <div className="flex flex-col ml-[40px] w-[25%]">
              <a href="/" className="cursor-pointer py-1 pr-7 ">
                <div className="flex md:items-center justify-start">
                  {" "}
                  <img
                    src="./images/logo.jpg"
                    width="50px"
                    height="5px"
                    className="-mt-1 rounded-full ml-10  text-colorimg"
                    alt=""
                  />
                  <h3 className="text-3xl font-extrabold px-3  text-red-900">
                    Mastiska
                  </h3>
                </div>
              </a>
              {/* <p className="text-[16px] leading-[28px] mt-[16px] mb-[26px] text-[#f6efed] font-mulish">
                Modernizing mental health
              </p> */}
              <div className="flex gap-x-4">
                <a href="">
                  <img src="./images/instalogo.svg" alt="" />
                </a>
                <a href="">
                  <img src="./images/tiktok.svg" alt="" />
                </a>
                <a href="">
                  <img src="./images/twitter.svg" alt="" />
                </a>
                <a href="">
                  <img src="./images/linkdin.svg" alt="" />
                </a>
              </div>
            </div>

            {/* <div className="flex cursor-pointer flex-col   ">
              <h2
                className="text-[18px] leading-[22px]
text-[#f6efed] font-mulish font-bold"
              >
                MastikaTrack
              </h2>
            </div> */}

            {/* <div className="flex cursor-pointer flex-col gap-y-4">
              <h2 className="text-[18px] leading-[22px] text-[#f6efed] font-bold font-mulish">
                For Organizations
              </h2>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                For Businesses
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                For Universities
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                For Insurance Companies
              </p>
            </div> */}

            {/* <div className="flex flex-col cursor-pointer gap-y-4">
              <h2 className="text-[18px] leading-[22px] text-[#f6efed] font-bold font-mulish">
                Mastika
              </h2>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                Science
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                Press
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                Costs
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                Career at MindDoc
              </p>
            </div> */}

            <div className="flex cursor-pointer flex-col gap-y-4">
              {/* <h2 className="text-[18px] leading-[22px] text-[#f6efed] font-bold font-mulish">
                Information
              </h2>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                Magazine
              </p>
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                FAQs
              </p> */}
              <p className="text-[16px] leading-[24px] text-[#f6efed] font-mulish">
                Contact
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
