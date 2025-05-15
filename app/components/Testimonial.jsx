"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Company",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jane Smith",
    position: "CTO, Company",
    testimonial:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Alice Johnson",
    position: "Designer, Company",
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      className="bg-secondary rounded-xl md:max-w-[520px] max-w-[310px] w-full"
    >
      {testimonials.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex gap-8 px-8 py-4">
              <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
              <div className="flex flex-col gap-2">
                <p className="">{item.testimonial}</p>
                <h3 className="self-end text-xl text-accent font-bold">{item.name}
                <p className="text-lg text-accent font-semibold">
                  {item.position}
                </p>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonial;
