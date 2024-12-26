import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Parallax } from "swiper/modules";
import PostCard from "./PostCard";
import { ArrowRight } from "react-huge-icons/solid";
const PostSwiper = () => {
  return (
    <>
      <section className="relative px-20 py-10 max-sm:px-2 max-sm:py-5 h-auto justify-center items-center  border">
        <h1 className="text-xl text-lime-600">
          LATEST ACTIVITIES{" "}
          <ArrowRight className="inline text-4xl text-lime-500" />
        </h1>
        <Swiper
          effect="fade"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView={1}
          centeredSlides={false}
          grabCursor={true}
          spaceBetween={0}
          speed={800}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Parallax]}
          className="mySwiper h-auto "
        >
          {[
            {
              id: 1,
              title: "The heist",
              descr:
                "This is soome sort of short description about this contents and what you are like to get when you open it.",
            },
            {
              id: 2,
              title: "The Kingdom of heaven",
              descr:
                "This is soome sort of short description about this contents and what you are like to get when you open it.",
            },
            {
              id: 21,
              title: "The fairy tales",
              descr:
                "This is soome sort of short description about this contents and what you are like to get when you open it.",
            },
            {
              id: 4,
              title: "The heist Mullock",
              descr:
                "This is soome sort of short description about this contents and what you are like to get when you open it.",
            },
          ].map((_, i) => (
            <SwiperSlide
              className="flex  py-2 justify-center items-center"
              key={i}
            >
              <PostCard id={_.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default PostSwiper;
