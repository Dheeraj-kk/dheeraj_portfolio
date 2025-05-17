"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

const testimonials = [
  {
    name: "Gourav",
    position: "Founder, DFFR",
    testimonial:
      "Jatin’s dedication and reliability have been crucial for our success. His ability to adapt and solve complex problems inspires the whole team.",
  },
  {
    name: "Ashish",
    position: "SDE, 24x7.ai",
    testimonial:
      "Working with Jatin has been a great experience — his technical skills and team spirit make every project smoother and more efficient.",
  },
  {
    name: "Paul",
    position: "Team Lead, Ego Paysenger",
    testimonial:
      "Jatin is the kind of teammate you want on every project: hardworking, proactive, and always ready to support others with a positive attitude.",
  },
  {
    name: "Saurabh",
    position: "Founder, Saurabh's Kitchen",
    testimonial:
      "Jatin’s work ethic and attention to detail have made a significant impact on our projects. He is a true asset to any team.",
  },
  {
    name: "Ankit",
    position: "Founder, Ankit's Tech",
    testimonial:
      "Jatin is a talented developer who brings innovative ideas to the table. His contributions have greatly enhanced our projects.",
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
