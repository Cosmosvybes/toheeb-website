import { Linkedln, Instagram, Twitter } from "react-huge-icons/solid";

const Footer = () => {
  return (
    <>
      <footer className="h-auto ">
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
                    className="text-4xl text-white"
                    onClick={() =>
                      window.open("https://www.linkedin.com/in/toyeebadebisi1/")
                    }
                  />
                  <Twitter
                    className="text-4xl text-white"
                    onClick={() => window.open("")}
                  />
                  <Instagram
                    className="text-4xl text-white"
                    onClick={() =>
                      window.open("https://www.instagram.com/teone.live")
                    }
                  />
                </div>
              </div>

              <div className="relative flex flex-col">
                <h1 className="text-white text-xl max-sm:text-sm font-bold">
                  {" "}
                  Useful links
                </h1>
                <div className="flex items-start gap-3 flex-col justify-start">
                  <a
                    href="https://thenetzeroguy.com"
                    className="text-white text-xl max-sm:text-sm no-underline"
                  >
                    Net zero
                  </a>
                  <a
                    href="#"
                    className="text-white text-xl max-sm:text-sm no-underline"
                  >
                    Terms and Policies
                  </a>
                  <a
                    href="#"
                    className="text-white text-xl max-sm:text-sm no-underline"
                  >
                    Others
                  </a>
                </div>
              </div>

              <div className="relative flex  flex-col">
                <h1 className="text-white text-xl max-sm:text-sm font-bold">
                  {" "}
                  Community
                </h1>
                <div className="flex items-start gap-3 flex-col justify-start">
                  <a
                    href="https://thenetzeroguy.com"
                    className="text-white text-xl max-sm:text-sm no-underline"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-white text-xl max-sm:text-sm no-underline"
                  >
                    Media stories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-center  py-2 flex justify-center items-center max-sm:px-2 max-md:px-0 bg-amber-200 ">
          <p className=" font-normal max-sm:text-sm  max-md:text-xl text-green-900 text-2xl">
            Toheeb • {new Date().getFullYear()} &reg;
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
