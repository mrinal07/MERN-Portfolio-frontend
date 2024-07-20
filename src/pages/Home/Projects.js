import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {

  const {  portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const { technologies, title, link, description,image } = projects;

  // static data
  // const projects = [
  //   {     
  //     title: "Project 1",
  //     description:"description1",
  //     image:"image1",
  //     link: "/",
  //     technologies: [],
      
  //   },
  //   {
      
  //     title: "Project 2",
  //     description:"description2",
  //     image:"image2",
  //     link: "/",
  //     technologies: [],
      
      
  //   },
  //   {
      
  //     title: "Project 3",
  //     description:"description3",
  //     image:"image3",
  //     link: "/",
  //     technologies: [],     
      
  //   },
  // ];

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((data, index) => (
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
                {data.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].link}
            alt="Sample Img"
            className="h-60 w-72"
          ></img>

          <div className="flex-col gap-5 ">
            <h1 className="text-secondary text-2xl ">
              {projects[selectedItemIndex].title}
            </h1>
            <h1 className="text-tertiary text-xl ">
              {projects[selectedItemIndex].technologies}
            </h1>
            <p className="text-white py-5">
            {projects[selectedItemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
