import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experience() {

// static data
  // const experience = [
  //   {
  //     company: "Fendahl",
  //     title: "SDE",
  //     period: "Jan23 - Present",
  //     description: "",
  //   },
  //   {
  //     company: "Chatbuck",
  //     title: "Python Full Stack",
  //     period: "Jan22 - Apr22",
  //     description: "",
  //   },
  //   {
  //     company: "Al orhan",
  //     title: "Full Stack",
  //     period: "July21 - Dec21",
  //     description: "",
  //   },
  // ];

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const {  portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const { title, period, company, description } = experiences;

  return (
    <div>
      <SectionTitle title="Experience" />

      <div className="flex py-10 gap-10 sm:flex-col"> 
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((data, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
                {/* sm:w-20 */}
              <h1
                className={`text-xl px-5 
                 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -m-[3px] bg-[#1a7f5a3d] py-3 sm:text-base "
                    : "text-white  sm:text-base -m-[3px]"
                }`}
              >
                {data.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex-col gap-5 ">
          <h1 className="text-secondary text-2xl ">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl ">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white py-5">
          {experiences[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
