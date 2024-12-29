// import img from "../../../assets/pexels-photo-7172984.webp";

interface SectionCompProps {
  headline: string;
  shortTitle: string;
  showReadMore: boolean;
  textContent: string;
  img: string;
}

const SectionContainer = ({
  headline,
  shortTitle,
  showReadMore,
  textContent,
  img,
}: SectionCompProps) => {
  return (
    <div
      className={`h-auto     flex justify-between max-sm:flex-col max-sm:py-2 items-start max-sm:px-2 py-24 px-24 gap-5 bg-amber-100`}
    >
      <div
        className="relative h-[40rem] max-sm:w-full bg-cover max-sm:bg-cover max-sm:h-72  bg-gray-50 rounded-2xl  w-1/2"
        style={{
          backgroundImage: `url(${img})`,

          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="relative w-1/2  max-sm:w-full max-sm:px-2 flex flex-col max-sm:gap-5 justify-start  gap-10 h-1/2">
        <h1 className="  text-xl text-lime-600">{headline}</h1>

        <h1 className="text-6xl max-sm:text-4xl text-green-800 font-extrabold">
          {shortTitle}
        </h1>
        <p className="text-xl max-sm:text-sm font-normal">{textContent}</p>

        {showReadMore && (
          <button className="text-xl bg-lime-400 rounded-md text-green-950 w-52 py-3 px-2">
            {" "}
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionContainer;
