import { UsersTriple } from "react-huge-icons/solid";
import savyll from "../../../assets/savyll.png";
import islington from "../../../assets/Islington.svg";
const Partners = () => {
  return (
    <>
      <section className="h-auto bg-amber-200 flex-col flex justify-start py-3 items-center">
        <h1 className="text-4xl max-sm:text-xl max-md:text-2xl text-green-900">
          <UsersTriple className="text-7xl max-sm:text-4xl text-green-900 inline" />{" "}
          Partners{" "}
        </h1>
        <div className="relative flex w-full px-20 max-sm:px-1 max-md:px-4  max-sm:flex-col max-md:flex-col  justify-around items-center">
          <div
            className="relative w-[32rem] bg-cover rounded-xl max-sm:bg-cover max-sm:w-full  h-44"
            style={{
              backgroundImage: `url(${savyll})`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="relative w-[32rem] bg-cover max-sm:bg-cover max-sm:w-full  h-44"
            style={{
              backgroundImage: `url(${islington})`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Partners;
