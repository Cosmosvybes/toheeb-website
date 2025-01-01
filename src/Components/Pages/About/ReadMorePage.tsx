import { useState } from "react";
import PostView from "./PostView";
import { useParams } from "react-router-dom";

const ReadMorePage = () => {
  const { id } = useParams();
  const [posts] = useState([
    {
      id: 1,
      title: "The  Climate Change Forum",
      descr: "New Castle City Council  Climate Change Forum",
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
