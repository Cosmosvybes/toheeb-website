import { useEffect } from "react";
import { ArrowLeft } from "react-huge-icons/solid";

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
      <div className="relative postView bg-amber-100 h-screen max-sm:flex-col max-sm:h-auto flex justify-start items-start ">
        <div className="relative h-[39rem] max-sm:h-[25rem] border w-1/2 max-sm:w-full rounded-md "></div>

        <div className="relative h-[39rem] w-1/2 flex justify-start max-sm:w-full items-start gap-4">
          <div className="relative w-full  px-2 max-sm:w-full max-sm:px-2 flex flex-col max-sm:gap-5 justify-start  gap-10 h-full">
            <h1 className="  text-xl max-sm:text-sm text-lime-600">
              {headline}
            </h1>

            <h1 className="text-6xl max-sm:text-4xl text-green-800 font-extrabold">
              {postTitle}
            </h1>

            <pre className="whitespace-pre-wrap text-sm text-black text-pretty">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
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
