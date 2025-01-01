import { useEffect } from "react";
import SectionContainer from "../../Component/Section/SectionContainer";
import toheeb from "../../../assets/toheeb.jpg";
const About = () => {
  useEffect(() => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="h-auto flex justify-start  flex-col">
      <SectionContainer
        showDigital={false}
        showReadMore={true}
        shortTitle={"ABOUT ME"}
        headline="MEET TOHEEB"
        img={toheeb}
        p1="The headline, Net Zero - Digital - Analytics , tells my journey graduating in English and International Studies to  commencing a career in customer service, levelling up to sales by representing a  reputable Airline stakeholder engagement in Nigeria following an MSc Tourism Development programme at the sustainability department at the University of Ibadan."
        p2="During Covid 19, the need for digital platforms played an essential role in the business world. A sharp switch from traditional business management to digital. As an innovative sales representative at that time, I was able to project the need. Then, Proceeded to pursue a Postgraduate Degree in Digital Marketing in a world class University, York St John University, United Kingdom. "
        p3="Since then, my career has taken a developmental curve with major highlight representing an esteemed London and the USA based non-alcoholic cocktail brand. Follow me on my journey of knowledge, Knowledge → Transformation → Resilience."
      />
      <div className="relative grid grid-cols-3 "></div>
    </div>
  );
};

export default About;
