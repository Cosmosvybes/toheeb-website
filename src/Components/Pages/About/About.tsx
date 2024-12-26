import { useEffect } from "react";
import SectionContainer from "../../Component/Section/SectionContainer";

const About = () => {
  useEffect(() => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="h-auto flex justify-start  flex-col">
      <SectionContainer
        showReadMore={false}
        shortTitle={"Get familiar with me."}
        headline="ABOUT ME"
      />
      <div className="relative grid grid-cols-3 "></div>
    </div>
  );
};

export default About;
