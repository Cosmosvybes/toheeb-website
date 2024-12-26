import { useState } from "react";
import PostView from "./PostView";
import { useParams } from "react-router-dom";

const ReadMorePage = () => {
  const { id } = useParams();
  const [posts] = useState([
    {
      id: 1,
      title: "The heist",
      descr:
        "This is soome sort of short description about this contents and what you are like to get when you open it.",
    },
    {
      id: 2,
      title: "The Kingdom of heaven",
      descr:
        "This is soome sort of short description about this contents and what you are like to get when you open it.",
    },
    {
      id: 21,
      title: "The fairy tales",
      descr:
        "This is soome sort of short description about this contents and what you are like to get when you open it.",
    },
    {
      id: 4,
      title: "The heist Mullock",
      descr:
        "This is soome sort of short description about this contents and what you are like to get when you open it.",
    },
  ]);

  const currentPost = posts.find((_) => _.id == Number(id));
  console.log(currentPost);
  return (
    <>
      <PostView postTitle={currentPost!.title} headline={currentPost!.descr} />
    </>
  );
};

export default ReadMorePage;
