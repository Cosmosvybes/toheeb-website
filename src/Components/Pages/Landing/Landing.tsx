import { ArrowRight } from "react-huge-icons/solid";
import newToheeb from "../../../assets/new-toheeb.jpg";
import SectionContainer from "../../Component/Section/SectionContainer";
import PostSwiper from "../../Component/Section/PostSwiper";
import ReverseSection from "../../Component/Section/ReverserSection";
import { useEffect } from "react";
import toheeb from "../../../assets/toheeb.jpg";
import headShot from "../../../assets/headshot.jpg";
import digitalImage from "../../../assets/digitalImage.jpg";
import Partners from "../../Component/Partners/Partners";
const Landing = () => {
  useEffect(() => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <main className="h-auto flex justify-between items-center bg-amber-100 max-sm:flex-col max-md:flex-col max-sm:h-auto">
        <div className="relative    w-1/2 max-sm:w-full max-md:px-2 max-md:w-full  py-24 max-sm:px-4 max-sm:py-4 px-20 h-auto ">
          <div
            className="relative bg-cover max-sm:bg-cover flex flex-col   max-sm:h-60   justify-start items-start 
main_image  h-[35rem] rounded-2xl"
            style={{
              backgroundImage: `url(${toheeb})`,

              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{ borderTop: "4px lightgreen" }}
              className=" max-sm:text-2xl h-20 max-sm:h-14 rounded-none   bg-white py-2 px-3   z-10"
            >
              <h1 className="text-amber-500  main_h1 text-5xl max-sm:text-2xl font-extrabold">
                {" "}
                Hi <em className="text-black ">there, </em>
              </h1>
            </div>
          </div>
        </div>{" "}
        <div className="relative w-1/2  max-md:w-full   max-sm:w-full">
          <div className="relative  flex justify-center items-center  max-sm:px-4 max-sm:py-4 py-24 max-md:px-4 px-20 h-full">
            <div className="relative w-full  flex gap-1  flex-col ">
              <h1 className="text-black main_h1_two text-7xl max-sm:text-3xl font-extrabold">
                {" "}
                I'm <em className="text-amber-500 text-5xl ">TOHEEB. </em>
              </h1>
              <p className=" text-5xl max-sm:text-2xl italic font-semibold">
                {" "}
                Welcome to an embodiment of;
              </p>
              <div className="relative w-full gap-4  max-sm:px-2 flex justify-start   items-center  h-24">
                <h1 className="text-black max-sm:text-sm animate-bounce duration-1000">
                  {" "}
                  NET ZERO •
                </h1>
                <h1 className="text-green-600 max-sm:text-sm animate-bounce duration-700">
                  DIGITAL •
                </h1>
                <h1 className="text-lime-600 max-sm:text-sm animate-bounce  duration-300 ">
                  ANALYTICS •
                </h1>
              </div>
            </div>
          </div>
          <div className="relative px-20 max-sm:w-full w-1/2 max-md:w-full  max-sm:px-2 py-2">
            <button className="px-5 w-full   rounded-md py-3 font-bold bg-amber-200 text-green-800   text-2xl max-sm:w-full max-sm:text-xl max-sm:py-1 hover:text-lime-500  hover:bg-lime-400   ">
              Let's get started
              <ArrowRight className="inline text-3xl   arrow-indicator text-green-950" />
            </button>
          </div>
        </div>
      </main>
      <div className="relative h-20 bg-amber-100 border-b border-gray-50"></div>
      <SectionContainer
        showDigital={false}
        showReadMore={false}
        shortTitle={"ABOUT ME"}
        headline="MEET TOHEEB"
        img={headShot}
        p1="The headline, Net Zero - Digital - Analytics , tells my journey graduating in English and International Studies to  commencing a career in customer service, levelling up to sales by representing a  reputable Airline stakeholder engagement in Nigeria following an MSc Tourism Development programme at the sustainability department at the University of Ibadan."
        p2="During Covid 19, the need for digital platforms played an essential role in the business world. A sharp switch from traditional business management to digital. As an innovative sales representative at that time, I was able to project the need. Then, Proceeded to pursue a Postgraduate Degree in Digital Marketing in a world class University, York St John University, United Kingdom. "
        p3="Since then, my career has taken a developmental curve with major highlight representing an esteemed London and the USA based non-alcoholic cocktail brand. Follow me on my journey of knowledge, Knowledge → Transformation → Resilience."
      />
      <PostSwiper />{" "}
      <ReverseSection
        showLink={false}
        img={newToheeb}
        showReadMore={false}
        shortTitle={"Coming soon..."}
        headline="
        ANALYTICS"
        p1=""
      />
      <SectionContainer
        showDigital={true}
        img={digitalImage}
        p1=""
        showReadMore={false}
        shortTitle={"Digital Works and Achievements"}
        headline="DIGITAL"
      />
      <ReverseSection
        showLink={true}
        p1={`My Journey with capturing the amount of GHGs commenced in 2024. 
Inspired by the course below:`}
        showReadMore={false}
        shortTitle={"CREATIVITY JOURNEY"}
        headline="NET ZERO"
        img={newToheeb}
      />{" "}
      <Partners />
    </>
  );
};

export default Landing;
