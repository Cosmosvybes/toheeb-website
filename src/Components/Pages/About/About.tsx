import SectionContainer from "../../Component/Section/SectionContainer";

const About = () => {
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
