import { Globe, Reward, Speaker } from "react-huge-icons/solid";

interface SectionCompProps {
  headline: string;
  shortTitle: string;
  showReadMore: boolean;
  p1: string;
  p2?: string;
  p3?: string;
  img: string;
  showDigital: boolean;
}

const SectionContainer = ({
  headline,
  shortTitle,
  showReadMore,
  p1,
  p2,
  p3,
  img,
  showDigital,
}: SectionCompProps) => {
  return (
    <div
      className={`h-auto border  flex justify-between max-sm:flex-col max-sm:py-2 items-start max-sm:px-2 py-10 px-24 gap-5 bg-amber-100`}
    >
      <div
        className="relative h-[44rem] max-sm:w-full bg-cover max-sm:bg-cover max-sm:h-[28rem]  bg-gray-50 rounded-2xl  w-1/2"
        style={{
          backgroundImage: `url(${img})`,

          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="relative w-1/2  max-sm:w-full max-sm:px-2 flex flex-col max-sm:gap-5 justify-start  gap-4 h-[auto]">
        <h1 className="  text-xl text-lime-600">{headline}</h1>

        <h1 className="text-6xl max-sm:text-2xl text-green-800 font-extrabold">
          {shortTitle}
        </h1>

        {showDigital && (
          <div className="relative">
            <div className="flex justify-start  gap-2 items-center">
              <strong className="text-2xl max-sm:text-xl text-lime-600">
                Works
              </strong>{" "}
              <Globe className="text-lime-600 text-3xl inline" />
            </div>

            <ul className="list-disc">
              <li className="text-2xl max-sm:text-xl">
                Social Media - Content Shooting - Savyll & Influencer relations
              </li>

              <li className="text-2xl max-sm:text-xl">
                {" "}
                Website Creation and Management & SEO -
                <a className="no-underline" href="https://thenetzeroguy.com">
                  TheNetZero Guy
                </a>
              </li>
              <li className="text-2xl max-sm:text-xl">
                {" "}
                Content Writing -{" "}
                <a className="no-underline" href="https://medium.com">
                  Medium
                </a>{" "}
              </li>
            </ul>
            <strong className="text-2xl max-sm:text-xl text-lime-600">
              Campaigns <Speaker className="text-ambr-500 text-3xl inline" />
            </strong>
            <ul className="list-disc">
              <li className="text-2xl max-sm:text-xl">
                {" "}
                Islington Robotica -{" "}
                <a
                  className="no-underline"
                  href="https://islingtonrobotica.com/"
                >
                  El Chapo Launch
                </a>
              </li>
              <li className="text-2xl max-sm:text-xl">Savyll - Sober</li>
            </ul>

            <strong className="text-2xl max-sm:text-xl text-lime-600">
              Certifications & Educations.
              <Reward className="text-ambr-500 text-3xl inline" />
            </strong>
            <ul className="list-disc">
              <li className="text-2xl max-sm:text-xl">
                {" "}
                Msc Digital Marketing - Certified by York St John University
              </li>
              <li className="text-2xl max-sm:text-xl">
                {" "}
                Storytelling for business -
                <a
                  className="no-underline"
                  href="https://www.linkedin.com/learning/certificates/ec3824c0947ab1f9821b7e4b55e8ee197ae53842efca3514945ff73fa1301ee4?accountId=1371719"
                >
                  LinkedIn Learning{" "}
                </a>
              </li>
              <li className="text-2xl max-sm:text-xl">
                {" "}
                <a
                  className="no-underline"
                  href="https://www.udemy.com/certificate/UC-80454f99-a1f2-44aa-b210-d8afd1b9ee84/"
                >
                  Master Course in Advanced SEO - Udemy
                </a>
              </li>
              <li className="text-2xl max-sm:text-xl">
                {" "}
                <a
                  className="no-underline"
                  href="https://www.linkedin.com/learning/certificates/ec3824c0947ab1f9821b7e4b55e8ee197ae53842efca3514945ff73fa1301ee4?accountId=1371719"
                >
                  Email Marketing For Sales - Udemy
                </a>
              </li>

              <li className="text-2xl max-sm:text-xl">
                {" "}
                <a
                  className="no-underline"
                  href="https://www.udemy.com/certificate/UC-0a3f5808-7bd9-4808-8c74-5811818c000f/"
                >
                  Crafting a Brand Identity and Strategy - Udemy
                </a>
              </li>
            </ul>
          </div>
        )}

        <p className="text-xl max-sm:text-sm font-normal">{p1}</p>
        <p className="text-xl max-sm:text-sm font-normal">{p2}</p>
        <p className="text-xl max-sm:text-sm font-normal">{p3}</p>

        {showReadMore && (
          <button className="text-xl   text-lime-500 rounded-md inline w-1/2 text-left ">
            {" "}
            read more
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionContainer;
