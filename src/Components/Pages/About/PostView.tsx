import { useEffect } from "react";
import { ArrowLeft } from "react-huge-icons/solid";
import toheeb from "../../../assets/toheeb.jpg";
interface postVIewInterface {
  headline: string;
  postTitle: string;
}

const PostView = ({ headline, postTitle }: postVIewInterface) => {
  useEffect(() => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="relative postView bg-amber-100 px-2 h-screen max-sm:flex-col max-sm:h-auto flex justify-start items-start ">
        <div
          className="relative h-[37rem] max-sm:w-full bg-cover max-sm:bg-cover max-sm:h-[35rem]  bg-gray-50 rounded-2xl  w-1/2"
          style={{
            backgroundImage: `url(${toheeb})`,

            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="relative h-[39rem] w-1/2 flex justify-start max-sm:w-full items-start gap-4">
          <div className="relative w-full  px-2 max-sm:w-full max-sm:px-2 flex flex-col max-sm:gap-5 justify-start  gap-10 h-full">
            <h1 className="  text-xl max-sm:text-sm mt-2 text-lime-600">
              {headline}
            </h1>

            <h1 className="text-6xl max-sm:text-4xl text-green-800 font-extrabold">
              {postTitle}
            </h1>

            <pre className="whitespace-pre-wrap text-sm text-black text-pretty">
              <p>{postTitle}</p>
            </pre>

            <button
              onClick={() => history.back()}
              className="text-xl bg-lime-400 rounded-md text-green-950 w-52 py-3 px-2"
            >
              {" "}
              <ArrowLeft className="text-2xl text-lime-600 inline" /> go back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostView;
