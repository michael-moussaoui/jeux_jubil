import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./carousel.css";

export default function Carousel() {
	const carousel = (slider) => {
		const z = 300;
		function rotate() {
			const deg = 360 * slider.track.details.progress;
			slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
		}
		slider.on("created", () => {
			const deg = 360 / slider.slides.length;
			slider.slides.forEach((element, idx) => {
				element.style.transform = `rotateY(${
					deg * idx
				}deg) translateZ(${z}px)`;
			});
			rotate();
		});
		slider.on("detailsChanged", rotate);
	};
	const [sliderRef] = useKeenSlider(
		{
			loop: true,
			selector: ".carousel__cell",
			renderMode: "custom",
			mode: "free-snap",
		},
		[carousel]
	);

	return (
		<div className="wrapper text-lg font-Carter">
			<div className="scene">
				<div className="carousel keen-slider" ref={sliderRef}>
					<div className="carousel__cell number-slide1">
						<img src="./logoJeux.png"></img>
					</div>
					<div className="carousel__cell number-slide2">
						Animation
					</div>
					<div className="carousel__cell number-slide3">Orignal</div>
					<div className="carousel__cell number-slide4">Partage</div>
					<div className="carousel__cell number-slide5">Rires</div>
					<div className="carousel__cell number-slide6">Plaisir</div>
				</div>
			</div>
		</div>
	);
}
