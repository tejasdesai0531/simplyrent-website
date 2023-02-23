import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Slider() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div id="slider" className="mx-auto">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          autoplay={{ delay: 2000 }}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="w-80">
            {" "}
            <a
              href="/mumbai/fitness-equipment-on-rent"
              className=""
              aria-label="Fitness Offer Banner"
            >
              {/* <Image
                alt="Fitness Offer Banner"
                className="img-responsive swiper-lazy swiper-lazy-loaded"
                width="20"
                height="20"
                src="https://simply-rent.s3.ap-south-1.amazonaws.com/Fitness-offer-banner-for-Web--2.jpg"
              ></Image> */}
              <Image
                src="https://simply-rent.s3.ap-south-1.amazonaws.com/Fitness-offer-banner-for-Web--2.jpg"
                alt="Fitness Offer Banner"
                width="75"
                height="63"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <a
              href="/mumbai/"
              className="router-link-exact-active router-link-active"
              aria-label="Offer Banner"
            >
              <Image
                src="https://simply-rent.s3.ap-south-1.amazonaws.com/Fitness-offer-banner-for-Web--2.jpg"
                alt="Fitness Offer Banner"
                width="75"
                height="63"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <a
              href="/mumbai/appliances/water-and-air-purifiers-on-rent"
              className=""
              aria-label="NEW Water Purifier"
            >
              <Image
                src="https://simply-rent.s3.ap-south-1.amazonaws.com/Fitness-offer-banner-for-Web--2.jpg"
                alt="Fitness Offer Banner"
                width="75"
                height="63"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <a
              href="/mumbai/"
              className="router-link-exact-active router-link-active"
              aria-label="Offer Banner PPBL"
            >
              <Image
                src="https://simply-rent.s3.ap-south-1.amazonaws.com/Fitness-offer-banner-for-Web--2.jpg"
                alt="Fitness Offer Banner"
                width="75"
                height="63"
              />
            </a>
          </SwiperSlide>
        </Swiper>

        <div className="rm-home__main">
          <div className="rm-home__covid-trigger">
            <p>
              <span className="rento-sprite rento-sprite-virus-safety-green"></span>
              <span>
                Safety precautions during COVID-19. We’re taking additional
                steps and precautionary measures to protect our community from
                COVID-19.
              </span>
              <a href="/covid19-response" className="">
                Know more&nbsp;
                <span className="rento-sprite rento-sprite-left-o-arrow"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
