import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import Nav from "../Component/Navigation/Navbar/Nav";
import ReadMorePage from "../Pages/About/ReadMorePage";
import About from "../Pages/About/About";
import Activities from "../Pages/Activities/Activities";
const _Routes = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/about/me" element={<About />}></Route>
        <Route path="/activities" element={<Activities/>}></Route>
        <Route path="/blog/post/:id" element={<ReadMorePage />}></Route>
      </Routes>
    </>
  );
};

export default _Routes;
