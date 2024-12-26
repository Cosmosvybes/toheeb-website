import { Linkedln, Instagram, Twitter } from "react-huge-icons/solid";

const Footer = () => {
  return (
    <>
      <footer className="h-auto">
        <div className=" h-[0.5rem] bg-lime-500"></div>

        <div className="relative h-[40rem] flex justify-center items-center bg-gradient-to-tr from-black to-green-950">
          <div className="relative w-full flex items-center justify-center max-sm:px-1">
            <div className="relative max-sm:flex-col  max-sm:px-1 max-md:grid grid-cols-2 max-md:gap-10 max-md:px-2 max-md:w-4/5 flex gap-10 max-sm:gap-20 justify-between w-1/2 max-sm:w-auto h-auto ">
              <div className="relative flex flex-col">
                <h1 className="text-white text-xl max-sm:text-sm font-bold">
                  {" "}
                  Connect with Us
                </h1>
                <div className="flex items-center mt-2 gap-2 justify-start">
                  <Linkedln
                    className="text-2xl text-white"
                    onClick={() => window.open("")}
                  />
                  <Twitter
                    className="text-2xl text-white"
                    onClick={() => window.open("")}
                  />
                  <Instagram
                    className="text-2xl text-white"
                    onClick={() => window.open("")}
                  />
                </div>
              </div>

              <div className="relative flex flex-col">
                <h1 className="text-white text-xl max-sm:text-sm font-bold">
                  {" "}
                  Useful links
                </h1>
                <div className="flex items-start flex-col justify-start">
                  <p className="text-white text-xl max-sm:text-sm">
                    Terms of use.
                  </p>
                  <p className="text-white text-xl max-sm:text-sm">Policies</p>
                  <p className="text-white text-xl max-sm:text-sm">Others</p>
                </div>
              </div>

              <div className="relative flex flex-col">
                <h1 className="text-white text-xl max-sm:text-sm font-bold">
                  {" "}
                  Community
                </h1>
                <div className="flex items-start flex-col justify-start">
                  <p className="text-white text-xl max-sm:text-sm">Blog</p>
                  <p className="text-white text-xl max-sm:text-sm">Ideas</p>
                  <p className="text-white text-xl max-sm:text-sm">
                    Developers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-center py-3 flex justify-center items-center max-sm:px-2 max-md:px-0 bg-lime-500 ">
          <p className=" font-normal max-sm:text-sm  max-md:text-xl text-green-950 text-2xl">
            Toheeb • {new Date().getFullYear()} &reg;
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
