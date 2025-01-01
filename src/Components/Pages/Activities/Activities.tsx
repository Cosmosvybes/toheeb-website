import { useEffect } from "react";
import PostSwiper from "../../Component/Section/PostSwiper";
import ReverseSection from "../../Component/Section/ReverserSection";

const Activities = () => {
  useEffect(() => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <ReverseSection
        showLink={false}
        img=""
        showReadMore={false}
        headline="Explore my recent activities"
        shortTitle="RECENT ACTIVITIES"
        p1=""
      />
      <PostSwiper />
    </div>
  );
};

export default Activities;
