import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Parallax } from "swiper/modules";
import PostCard from "./PostCard";
import { ArrowRight } from "react-huge-icons/solid";
import postImage from "../../../assets/evntImage.jpg";
const PostSwiper = () => {
  return (
    <>
      <section className="relative px-20 bg-amber-200 py-10 max-sm:px-2 max-md:px-4 max-sm:py-5 h-auto justify-center items-center  ">
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
            712: {
              slidesPerView: 1,
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
              title: "The  Climate Change Forum",
              descr: "New Castle City Council  Climate Change Forum",
            },
          ].map((_, i) => (
            <SwiperSlide
              className="flex py-2 justify-center items-center"
              key={i}
            >
              <PostCard
                img={postImage}
                id={_.id}
                postTitle={_.title}
                shortDescription={_.descr}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default PostSwiper;
