import React from "react";
import Nav from "./Nav";

const AboutUs = () => {
  return (
    <div>
      <Nav />
      <main>
        <section className="bg-white w-full mt-36 ">
          <div className="container mx-auto py-12">
            <div className="text-center">
              <h2 className="text-red-600 text-3xl font-semibold font-serif">
                About Us
              </h2>
              <p className="text-black font-serif mt-5 text-2xl">
                "Mastiska Track is a mental health application that helps people
                with screening for mental health issues. It also provides
                further course of action for the particular mental health
                issue."
              </p>
              <p className="text-black font-serif text-2xl">
                "eWe are bullish on AI."
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container mx-auto py-12">
            <h2 className="text-red-600 text-3xl font-semibold font-serif text-center mb-5 mt-3">
              Our Team Members
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <img
                  src="https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_16x9_1600.jpg"
                  alt="Team Member 1"
                  className="mx-auto w-32 h-32 rounded-full"
                />
                <h4 className="text-black font-semibold text-2xl">
                  Darshan Lamichhane
                </h4>
                {/* <p className="text-black">Web Developer</p> */}
              </div>
              <div className="text-center">
                <img
                  src="https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_16x9_1600.jpg"
                  alt="Team Member 2"
                  className="mx-auto w-32 h-32 rounded-full"
                />
                <h4 className="text-black font-semibold text-2xl">
                  Phiroj Shah
                </h4>
                {/* <p className="text-black">Web Developer</p> */}
              </div>
              <div className="text-center">
                <img
                  src="https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_16x9_1600.jpg"
                  alt="Team Member 3"
                  className="mx-auto w-32 h-32 rounded-full"
                />
                <h4 className="text-black font-semibold text-2xl">
                  Sushan Adhikari
                </h4>
                {/* <p className="text-black">Graphic Designer</p> */}
              </div>
              <div className="text-center">
                <img
                  src="https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_16x9_1600.jpg"
                  alt="Team Member 4"
                  className="mx-auto w-32 h-32 rounded-full"
                />
                <h4 className="text-black font-semibold text-2xl">
                  Samman Pathak
                </h4>
                {/* <p className="text-black">Content Writer</p> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
