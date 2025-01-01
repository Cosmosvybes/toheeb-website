import { Calendar } from "react-huge-icons/solid";
import { Link } from "react-router-dom";

interface postCardInterfac {
  id: number;
  postTitle: string;
  shortDescription: string;
  img: string;
}
const PostCard = ({
  id,
  postTitle,
  shortDescription,
  img,
}: postCardInterfac) => {
  return (
    <>
      <div className="h-[auto]  w-full bg-amber-100 py-1  rounded-md  flex flex-col justify-between ">
        <div
          className="relative bg-cover max-sm:bg-container w-full  h-[30rem] px-2"
          style={{
            backgroundImage: `url(${img})`,

            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="relative flex flex-col justify-start  mt-2 gap-2 px-2">
          <h1>{postTitle}</h1>
          <div className="relative flex justify-start items-center max-sm:flex-col max-sm:gap-0  max-sm:items-start [">
            <p className="max-sm:text-sm">
              <Calendar className="text-xl max-sm:text-sm text-lime-500 inline" />{" "}
              {new Date().toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="relative  flex justify-start text-black font-normal flex-col items-start ">
            <p className=" text-pretty">{shortDescription}</p>
            <Link
              to={`/blog/post/${id}`}
              className="text-xl  rounded-md text-lime-400 text-left"
            >
              {" "}
              Continue reading..
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
