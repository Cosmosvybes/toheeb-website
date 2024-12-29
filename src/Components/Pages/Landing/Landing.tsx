import { ArrowRight } from "react-huge-icons/solid";
// import img from "../../../assets/toheebHome.jpg";
import SectionContainer from "../../Component/Section/SectionContainer";
import PostSwiper from "../../Component/Section/PostSwiper";
import ReverseSection from "../../Component/Section/ReverserSection";
import { useEffect } from "react";
import toheeb from "../../../assets/toheeb.jpg";
const Landing = () => {
  useEffect(() => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <main className="h-screen flex justify-between items-center bg-amber-100 max-sm:flex-col max-sm:h-auto">
        <div className="relative    w-1/2 max-sm:w-full  py-24 max-sm:px-4 max-sm:py-4 px-20 h-auto ">
          <div
            className="relative bg-cover max-sm:bg-cover flex flex-col   max-sm:h-60   justify-start items-start 
main_image  h-[35rem] rounded-2xl"
            style={{
              backgroundImage: `url(${toheeb})`,

              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{ borderTop: "4px solid rgba(0,0,0,3" }}
              className=" max-sm:text-2xl h-20 max-sm:h-14 rounded-none   bg-lime-100 py-2 px-3   z-10"
            >
              <h1 className="text-lime-400  main_h1 text-5xl max-sm:text-2xl font-extrabold">
                {" "}
                Hi <em className="text-black ">there, </em>
              </h1>
            </div>
          </div>
        </div>{" "}
        <div className="relative w-1/2  max-sm:w-full">
          <div className="relative  flex justify-center items-center  max-sm:px-4 max-sm:py-4 py-24 px-20 h-full">
            <div className="relative w-full  flex gap-1 flex-col ">
              <h1 className="text-green-900 main_h1_two text-7xl max-sm:text-3xl font-extrabold">
                {" "}
                I'm <em className="text-black text-5xl ">TOHEEB. </em>
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
          <div className="relative px-20 max-sm:w-full w-1/2  max-sm:px-2 py-2">
            <button className="px-5 w-full   rounded-md py-3 font-bold bg-lime-400 text-green-950   text-2xl max-sm:w-full max-sm:text-xl max-sm:py-1 hover:text-green-900  hover:bg-lime-400   ">
              Let's get started
              <ArrowRight className="inline text-3xl   arrow-indicator text-green-950" />
            </button>
          </div>
        </div>
      </main>
      <div className="relative h-20 bg-gradient-to-br from-black to-green-950"></div>
      <SectionContainer
        showReadMore={true}
        shortTitle={"ABOUT ME"}
        headline="MEET TOHEEB"
        img={toheeb}
        p1="The headline, Net Zero - Digital - Analytics , tells my journey graduating in English and International Studies to  commencing a career in customer service, levelling up to sales by representing a  reputable Airline stakeholder engagement in Nigeria following an MSc Tourism Development programme at the sustainability department at the University of Ibadan."
        p2="During Covid 19, the need for digital platforms played an essential role in the business world. A sharp switch from traditional business management to digital. As an innovative sales representative at that time, I was able to project the need. Then, Proceeded to pursue a Postgraduate Degree in Digital Marketing in a world class University, York St John University, United Kingdom. "
        p3="Since then, my career has taken a developmental curve with major highlight representing an esteemed London and the USA based non-alcoholic cocktail brand. Follow me on my journey of knowledge, Knowledge → Transformation → Resilience."
      />
      <PostSwiper />{" "}
      <ReverseSection
        showReadMore={false}
        shortTitle={"Hi there, I'm the Website Owner"}
        headline="
        DATA"
      />
      <SectionContainer
        img={toheeb}
        p1="The headline, Net Zero - Digital - Analytics , tells my journey graduating in English and International Studies to  commencing a career in customer service, levelling up to sales by representing a  reputable Airline stakeholder engagement in Nigeria following an MSc Tourism Development programme at the sustainability department at the University of Ibadan."
        p2="During Covid 19, the need for digital platforms played an essential role in the business world. A sharp switch from traditional business management to digital. As an innovative sales representative at that time, I was able to project the need. Then, Proceeded to pursue a Postgraduate Degree in Digital Marketing in a world class University, York St John University, United Kingdom. "
        p3="Since then, my career has taken a developmental curve with major highlight representing an esteemed London and the USA based non-alcoholic cocktail brand. Follow me on my journey of knowledge, Knowledge → Transformation → Resilience."
        showReadMore={false}
        shortTitle={"Hi there, I'm the Website Owner"}
        headline="DIGITAL"
      />
      <ReverseSection
        showReadMore={false}
        shortTitle={"Hi there, I'm the Website Owner"}
        headline="NET ZERO"
      />{" "}
    </>
  );
};

export default Landing;
