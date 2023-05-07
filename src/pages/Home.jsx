import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";
import { motion } from "framer-motion";

import styles from "./home.module.css";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) =>
	`translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function App() {
	const [trail, api] = useTrail(3, (i) => ({
		xy: [0, 0],
		config: i === 0 ? fast : slow,
	}));
	const [ref, { left, top }] = useMeasure();

	const handleMouseMove = (e) => {
		api.start({ xy: [e.clientX - left, e.clientY - top] });
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			className={styles.Container}
		>
			<svg style={{ position: "absolute", width: 0, height: 0 }}>
				<filter id="goo">
					<feGaussianBlur
						in="SourceGraphic"
						result="blur"
						stdDeviation="30"
					/>
					<feColorMatrix
						in="blur"
						values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
					/>
				</filter>
			</svg>
			<div
				ref={ref}
				className={styles.hooksMain}
				onMouseMove={handleMouseMove}
			>
				{trail.map((props, index) => (
					<animated.div
						key={index}
						style={{ transform: props.xy.to(trans) }}
					/>
				))}
			</div>
			<p className="absolute w-[90vw] md:w-full text-center top-1/4   z-50 cursor-pointer font-Carter font-bold text-3xl md:text-5xl text-purple-500">
				Bienvenue sur Jeux Vadrouille
			</p>
			<Link to="/jeux_vadrouille">
				<div className="absolute w-28 h-16  rounded-full left-1/2 top-[40%]  -translate-x-1/2 z-50 cursor-pointer text-xl text-purple-300 bg-purple-700 transition-all hover:bg-purple-500 hover:text-purple-900 hover:shadow-lg hover:shadow-purple-800">
					<p className=" text-center relative top-1/2 -translate-y-1/2">
						Start
					</p>
				</div>
			</Link>
			<div className=" w-full  absolute bottom-0 -z-10">
				<img className="h-full w-full" src="./waveJubil.svg" />
			</div>
			{/* <svg
				id="wave"
				style="transform:rotate(0deg); transition: 0.3s"
				viewBox="0 0 1440 420"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient
						id="sw-gradient-0"
						x1="0"
						x2="0"
						y1="1"
						y2="0"
					>
						<stop
							stop-color="rgba(126, 34, 206, 1)"
							offset="0%"
						></stop>
						<stop
							stop-color="rgba(216, 180, 254, 1)"
							offset="100%"
						></stop>
					</linearGradient>
				</defs>
				<path
					style="transform:translate(0, 0px); opacity:1"
					fill="url(#sw-gradient-0)"
					d="M0,168L20,175C40,182,80,196,120,210C160,224,200,238,240,217C280,196,320,140,360,133C400,126,440,168,480,217C520,266,560,322,600,294C640,266,680,154,720,126C760,98,800,154,840,161C880,168,920,126,960,147C1000,168,1040,252,1080,259C1120,266,1160,196,1200,196C1240,196,1280,266,1320,301C1360,336,1400,336,1440,301C1480,266,1520,196,1560,161C1600,126,1640,126,1680,147C1720,168,1760,210,1800,203C1840,196,1880,140,1920,126C1960,112,2000,140,2040,126C2080,112,2120,56,2160,84C2200,112,2240,224,2280,245C2320,266,2360,196,2400,168C2440,140,2480,154,2520,182C2560,210,2600,252,2640,280C2680,308,2720,322,2760,287C2800,252,2840,168,2860,126L2880,84L2880,420L2860,420C2840,420,2800,420,2760,420C2720,420,2680,420,2640,420C2600,420,2560,420,2520,420C2480,420,2440,420,2400,420C2360,420,2320,420,2280,420C2240,420,2200,420,2160,420C2120,420,2080,420,2040,420C2000,420,1960,420,1920,420C1880,420,1840,420,1800,420C1760,420,1720,420,1680,420C1640,420,1600,420,1560,420C1520,420,1480,420,1440,420C1400,420,1360,420,1320,420C1280,420,1240,420,1200,420C1160,420,1120,420,1080,420C1040,420,1000,420,960,420C920,420,880,420,840,420C800,420,760,420,720,420C680,420,640,420,600,420C560,420,520,420,480,420C440,420,400,420,360,420C320,420,280,420,240,420C200,420,160,420,120,420C80,420,40,420,20,420L0,420Z"
				></path>
			</svg> */}
		</motion.div>
	);
}
