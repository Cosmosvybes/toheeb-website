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
        showReadMore={false}
        headline="Explore my recent activities"
        shortTitle="RECENT ACTIVITIES"
      />
      <PostSwiper />
    </div>
  );
};

export default Activities;
