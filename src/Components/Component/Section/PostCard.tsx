import { Calendar, Chat, ClockCircleShort } from "react-huge-icons/solid";
import { Link } from "react-router-dom";

interface postCardInterfac {
  id: number;
}
const PostCard = ({ id }: postCardInterfac) => {
  return (
    <>
      <div className="h-[auto]  w-full bg-amber-50  rounded-2xl  flex flex-col justify-between ">
        <div className="relative w-full h-1/2 px-2 ">
          <img
            src={`https://unsplash.com/photos/a-woman-walking-down-a-sidewalk-next-to-parked-bikes-YsEyBKY22Fo`}
            alt="photo"
            className="h-44 w-full object-contain rounded-t-2xl"
          />
        </div>
        <div className="relative flex flex-col justify-start  gap-5 px-2">
          <h1>THE POST TITLE</h1>
          <div className="relative flex justify-start items-center max-sm:flex-col max-sm:gap-0  max-sm:items-start [">
            <p className="max-sm:text-sm">
              <Calendar className="text-xl max-sm:text-sm text-lime-500 inline" />{" "}
              {new Date().toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="max-sm:text-sm">
              {" "}
              <ClockCircleShort className="text-xl max-sm:text-sm text-lime-500 inline" />{" "}
              5 min read
            </p>{" "}
            <p className="max-sm:text-sm">
              <Chat className="text-xl text-lime-500 max-sm:text-sm inline" />{" "}
              No comments yet
            </p>
          </div>

          <div className="relative flex justify-start text-black font-normal flex-col items-start  gap-4">
            <p className=" text-pretty">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in..
            </p>
            <Link
              to={`/blog/post/${id}`}
              className="text-xl  rounded-md text-lime-400 text-left py-3"
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
