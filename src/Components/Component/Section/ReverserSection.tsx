// import img from "../../../assets/pexels-photo-7172984.webp";

interface SectionCompProps {
  headline: string;
  shortTitle: string;
  showReadMore: boolean;
  img: string;
  p1: string;
  showLink: boolean;
}

const ReverseSection = ({
  headline,
  shortTitle,
  showReadMore,
  img,
  p1,
  showLink,
}: SectionCompProps) => {
  return (
    <div
      className={`h-auto max-md:px-4 max-md:flex-col flex justify-between max-sm:flex-col-reverse max-sm:py-2 items-start max-sm:px-2 py-24  px-24 gap-5 bg-amber-100`}
    >
      <div className="relative w-1/2  max-sm:w-full max-md:w-full max-sm:px-2 flex flex-col max-sm:gap-3 justify-start  gap-10 h-1/2">
        <h1 className="  text-xl text-lime-600">{headline}</h1>

        <h1 className="text-6xl max-sm:text-xl text-green-800 font-extrabold">
          {shortTitle}
        </h1>
        <p className="text-4xl text-green-800 max-sm:text-2xl font-normal">
          {p1}
        </p>
        {showLink && (
          <div className="relative h-auto py-3  bg-amber-100  max-sm:px-0">
            <ul className="list-disc  max-sm:text-2xl text-3xl">
              <li className="text-green-800">
                Sustainability Foundations: Core Concepts -{" "}
                <a
                  className="no-underline "
                  href="https://www.linkedin.com/learning/certificates/76694d22d491201714c2c3776cc52b0dba245f6e7d2f5bfe26b436264528051e?u=137171972"
                ></a>{" "}
                LinkedIn Learning Which resulted in ;{" "}
                <a className="no-underline" href="https://thenetzeroguy.com">
                  Thenetzeroguy.com
                </a>
              </li>
            </ul>
          </div>
        )}
        {showReadMore && (
          <button className="text-xl bg-lime-400 rounded-md text-green-950 w-52 py-3 px-2">
            {" "}
            Read More
          </button>
        )}
      </div>

      <div
        className="relative h-[37rem] max-sm:w-full max-md:w-full bg-cover max-sm:bg-cover max-sm:h-72  bg-gray-50 rounded-2xl  w-1/2"
        style={{
          backgroundImage: `url(${img})`,

          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default ReverseSection;
