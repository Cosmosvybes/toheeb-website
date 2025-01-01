import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import {
  Calling,
  MenuLineHorizontal,
  RemoveRectangle,
  CallUser,
  Whatsapp,
  Linkedln,
  Instagram,
  Home,
  LinkUnlink,
  DocumentText,
  MailFast,
} from "react-huge-icons/solid";
import { Link } from "react-router-dom";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleConnectModal = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Modal centered toggle={handleConnectModal} isOpen={toggle}>
        <ModalHeader className="text-center">
          <b className="text-green-800 text-center">Let's connect - </b>
        </ModalHeader>

        <ModalBody className="grid grid-cols-4 gap-10 ">
          <Linkedln
            className="text-3xl text-green-950"
            onClick={() => {
              window.open("https://www.linkedin.com/in/toyeebadebisi1/");
            }}
          />
          <Whatsapp
            className="text-3xl text-green-950"
            onClick={() => {
              window.open("https://www.linkedin.com/in/toyeebadebisi1/");
            }}
          />{" "}
          <Instagram
            className="text-3xl text-green-950"
            onClick={() => {
              window.open("https://www.instagram.com/teone.live");
            }}
          />
          <a href="mailto:toyeebadebisi1@gmail.com">
            {" "}
            <MailFast className="text-3xl text-green-950" />
          </a>
        </ModalBody>
      </Modal>
      <nav className="bg-gradient-to-tr px-2 z-50 bg-amber-100 h-28 max-sm:h-20 sticky left-0 top-0 items-center flex justify-between py-10 ">
        <div
          className={`absolute top-0 left-0 lower-layer flex justify-between  flex-col  z-20  bg-transparent backdrop-blur-md h-screen   ${
            isOpen ? "w-[16rem]" : "w-[0px]"
          }  `}
          style={{ transition: "0.4s ease-in" }}
        >
          <div
            style={{
              transition: "0.5s ease-in-out",
              visibility: isOpen ? "visible" : "hidden",
              opacity: isOpen ? "1" : "0",
            }}
            className={`relative px-5 py-5 nav-bar-container mt-5 w-full   h-auto   gap-3  flex justify-start flex-col`}
          >
            <Link
              className="text-xl no-underline max-sm:text-md font flex justify-start gap-2 items-center  font-normal text-green-950"
              to={"/"}
              onClick={handleToggle}
            >
              {" "}
              <Home className="inline top-3  right-3 text-amber-500 text-2xl" />{" "}
              Home
            </Link>
            {false && (
              <Link
                className="text-xl no-underline max-sm:text-md font  flex justify-start gap-2 font-normal text-green-950"
                to={"/about/me"}
                onClick={handleToggle}
              >
                <LinkUnlink className="inline top-3  right-3 text-amber-500 text-2xl" />{" "}
                About me
              </Link>
            )}
            <Link
              onClick={handleToggle}
              className="text-xl max-sm:text-md font-normal flex justify-start gap-2 no-underline text-green-950"
              to={"/activities"}
            >
              <DocumentText className="inline top-3  right-3 text-amber-500 text-2xl" />{" "}
              Activities
            </Link>
          </div>

          <div
            className={`relative mb-5 px-5 w-full  ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <button
              onClick={handleConnectModal}
              className="text-2xl font-normal bg-amber-500 text-green-800  rounded-md py-2  px-2 w-full "
            >
              {" "}
              connect{" "}
              <CallUser className="inline top-3  right-3 text-green-800 text-2xl" />
            </button>
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 lower-layer z-10   duration-1000 bg-transparent backdrop-blur-lg h-screen  ${
            isOpen ? "w-[21rem]" : "w-[0px]"
          } `}
        >
          {" "}
          <RemoveRectangle
            className="absolute top-3  right-3 text-amber-500 text-5xl"
            onClick={handleToggle}
          />
        </div>

        <div className="relative h-14 w-14 rounded-full  hidden max-sm:flex justify-center items-center bg-amber-200 ">
          <MenuLineHorizontal
            className="text-lime-600 text-5xl  hidden max-sm:block"
            onClick={handleToggle}
          />
        </div>

        <div className="relative px-4 z-10 gap-2 max-sm:hidden flex justify-end  w-1/3">
          {[
            { id: 1, path: "/", textNode: "Home" },
            { id: 1, path: "/about/me", textNode: "About me" },
            { id: 2, path: "/activities", textNode: "Activities" },
          ].map((_, i) => (
            <Link
              to={_.path}
              key={i}
              className={` ${
                _.textNode == "connect" && "text-green-800"
              }  w-1/3 py-3 duration-500 transition-transform  text-green-950 no-underline text-center font-semibold text-xl shadow-gray-200 hover:text-white border-white  hover:font-normal ${
                _.textNode == "connect"
                  ? "text-green-950 rounded-md py-3 font-semibold bg-lime-400"
                  : "hover:text-white bg-transparent  rounded-md  "
              }`}
            >
              {_.textNode}{" "}
              {_.textNode == "connect" && (
                <Calling className="text-2xl text-white animate-ping inline" />
              )}
            </Link>
          ))}
          <button
            onClick={handleConnectModal}
            className="text-2xl font-normal w-44  bg-amber-300 text-green-800  rounded-md py-2  px-2  "
          >
            {" "}
            connect{" "}
            <CallUser className="inline top-3  right-3 text-green-800 text-2xl" />
          </button>
        </div>
        <span className="opacity-0">Logo</span>
      </nav>
    </>
  );
};

export default Nav;
