import { ArrowRight } from "react-huge-icons/solid";
import img from "../../../assets/pexels-photo-7172984.webp";
const Main = () => {
  return (
    <>
      <section className="h-auto py-2   flex justify-between relative right-0 top-0">
        <div className="relative flex justify-center items-center rounded-md  max-sm:flex-col  h-screen max-sm:h-96 w-full">
          <div
            className="relative max-sm:object-contain flex-col flex max-sm:justify-end justify-center max-sm:w-full h-full rounded-md py-2 px-2  "
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative gap-5 h-auto shadow-2xl flex-col shadow-gray-100 py-5 px-3 max-sm:py-3  w-full flex justify-center items-center  rounded-r-2xl ">
              <h1 className="text-green-700 max-sm:text-center text-5xl max-sm:text-2xl font-extrabold">
                {" "}
                Hi there, I'm <em className="text-black">TOHEEB. </em>
              </h1>
              <button className="px-5 w-72 font-semibold text-xl max-sm:w-52 max-sm:text-sm max-sm:py-3 rounded-md hover:bg-green-900 py-5 bg-green-800 text-white">
                Book a meeting{" "}
                <ArrowRight className="inline text-3xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
