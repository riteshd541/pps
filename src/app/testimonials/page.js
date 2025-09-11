"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonialImages = [
  "/testimonials/5.jpg",
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
];

export default function Testimonials() {
  return (
    <>
      <Header backgroundColor="bg-black" />
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-5xl font-bold text-center text-gray-900 mt-10 mb-10">
          What People Say
        </h2>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-2xl"
          >
            {testimonialImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`Testimonial ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Footer />
    </>
  );
}
