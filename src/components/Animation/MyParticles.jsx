import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function MyParticles() {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				background: {
					color: {
						value: "#",
					},
				},
				fullScreen: {
					zIndex: -1,
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "push",
						},
						onHover: {
							enable: true,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#ffffff",
					},
					links: {
						color: "#ffffff",
						distance: 150,
						enable: false,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 3,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 10,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: ["image", "image"],
						images: [
							{
								src: "/img/labyrinth-svgrepo-com.svg",
								width: 150,
								height: 150,
							},
							{
								src: "/img/backgammon-svgrepo-com.svg",
								width: 150,
								height: 150,
							},
							{
								src: "/img/playing-cards-svgrepo-com.svg",
								width: 150,
								height: 150,
							},
							{
								src: "/img/puzzle-svgrepo-com.svg",
								width: 150,
								height: 150,
							},
							{
								src: "/img/chess-svgrepo-com.svg",
								width: 150,
								height: 150,
							},
							{
								src: "/img/dice.svg",
								width: 150,
								height: 150,
							},
						],
					},
					size: {
						value: { min: 30, max: 50 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
}

export default MyParticles;
