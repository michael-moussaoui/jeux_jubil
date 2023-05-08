import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./coverflow.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const games = [
	{ img: "/img/coverflow/arkopolis.jpg" },
	{ img: "/img/coverflow/codegames.jpg" },
	{ img: "/img/coverflow/hula-hoo.jpg" },
	{ img: "/img/coverflow/papayoo.jpg" },
	{ img: "/img/coverflow/pictit.jpg" },
	{ img: "/img/coverflow/skyjo.jpg" },
	{ img: "/img/coverflow/timebomb.jpg" },
	{ img: "/img/coverflow/globalName.jpg" },
	{ img: "/img/coverflow/global1.jpg" },
];

function CoverflowSlide() {
	return (
		<>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				{games.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<img src={item.img} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}

export default CoverflowSlide;
