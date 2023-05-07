import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Dots from "../components/Animation/Dots";
import Carousel from "../components/Animation/Carousel";
import "./jeux.modules.css";
import Footer from "../components/Footer";

function Jeuxvadrouille() {
	// // dots is an array of Dot objects,
	// // mouse is an object used to track the X and Y position
	// // of the mouse, set with a mousemove event listener below
	// var dots = [],
	// 	mouse = {
	// 		x: 0,
	// 		y: 0,
	// 	};

	// // The Dot object used to scaffold the dots
	// var Dot = function () {
	// 	this.x = 0;
	// 	this.y = 0;
	// 	this.node = (function () {
	// 		var n = document.createElement("div");
	// 		n.className = "trail";
	// 		document.body.appendChild(n);
	// 		return n;
	// 	})();
	// };
	// // The Dot.prototype.draw() method sets the position of
	// // the object's <div> node
	// Dot.prototype.draw = function () {
	// 	this.node.style.left = this.x + "px";
	// 	this.node.style.top = this.y + "px";
	// 	this.node.style.backgroundColor = this.pink;
	// };

	// // Creates the Dot objects, populates the dots array
	// for (var i = 0; i < 10; i++) {
	// 	var d = new Dot();
	// 	dots.push(d);
	// }

	// // This is the screen redraw function
	// function draw() {
	// 	// Make sure the mouse position is set everytime
	// 	// draw() is called.
	// 	var x = mouse.x,
	// 		y = mouse.y;

	// 	// This loop is where all the 90s magic happens
	// 	dots.forEach(function (dot, index, dots) {
	// 		var nextDot = dots[index + 1] || dots[0];

	// 		dot.x = x;
	// 		dot.y = y;
	// 		dot.draw();
	// 		x += (nextDot.x - dot.x) * 0.8;
	// 		y += (nextDot.y - dot.y) * 0.8;
	// 	});
	// }

	// addEventListener("mousemove", function (event) {
	// 	//event.preventDefault();
	// 	mouse.x = event.pageX;
	// 	mouse.y = event.pageY;
	// });

	// // animate() calls draw() then recursively calls itself
	// // everytime the screen repaints via requestAnimationFrame().
	// function animate() {
	// 	draw();
	// 	requestAnimationFrame(animate);
	// }

	// // And get it started by calling animate().
	// animate();

	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 1.5 }}
			className="text-lg overflow-x-hidden"
		>
			<Dots />
			<Navbar />
			<h1 className="w-80  text-center text-2xl md:text-4xl mx-auto mt-10 mb-20 p-5 rounded-3xl bg-purple-300 font-Carter text-purple-700 shadow-lg shadow-purple-800 z-[5000] ">
				Jeux Vadrouille
			</h1>
			<Carousel />
			<div className=" border-2 border-purple-600 flex flex-row">
				<div className="num_1 border-2 border-purple-800 mb-10 py-14  pl-14 w-[50vw] relative left-10 ">
					<h2 className=" font-Carter font-bold">Pour qui?</h2>
					<p>
						Pour des institutions : les mairies, les écoles, les
						maisons de retraite, les accueils de loisirs, à ceux qui
						possèdent des lieux de rencontre (bars, restaurants…).
					</p>
					<p>
						­Pour vous qui êtes chez vous, à l’occasion d’un
						anniversaire, un mariage, une rencontre de famille.
					</p>
					<p>
						Nous installons et animons une ludothèque éphémère, un
						espace de jeu, quelques heures, une soirée, une journée…
					</p>
				</div>
				<div>
					<div className="w-[200px] h-[200px]">
						<img src="./img/nicubunu/nicubunu_Game_baddie_Billy.svg"></img>
					</div>
				</div>
			</div>
			<div className=" border-2 border-purple-600 flex flex-row">
				<div>
					<div className="w-[200px] h-[200px]">
						<img src="./img/nicubunu/nicubunu_Game_baddie_Billy.svg"></img>
					</div>
				</div>
				<div className="num_2 border-2 border-purple-800 my-10 p-10 w-[40vw] relative left-[35%]">
					<h2 className=" font-Carter font-bold">Ou?</h2>
					<p>
						Partout. Jeux Vadrouille est une ludothèque ambulante afin
						de pouvoir intervenir dans votre salon, votre jardin, dans
						les quartiers, en milieu rural, pour les fêtes de
						villages…
					</p>
					<p>
						Notre objectif est de redynamiser la dimension sociale et
						ludique en proposant des animations peu présentes. Notre
						objectif est aussi de faire découvrir le jeu à travers
						toute sa diversité et ses richesses.
					</p>
				</div>
			</div>
			<div className=" border-2 border-purple-600 flex flex-row">
				<div className="num_3 border-2 border-purple-800 my-10 p-10 w-[40vw] relative left-10">
					<h2 className=" font-Carter font-bold">Quels jeux?</h2>
					<p>
						Nous valorisons de préférence des jeux originaux et de
						qualité (thème, matériel, concept…). Le principal critère
						dans le choix de nos jeux est qu’ils vous fassent passer
						un moment de convivialité !
					</p>
					<p className="">
						Notre objectif est aussi de faire découvrir le jeu à
						travers toute sa diversité et ses richesses . Nos jeux
						sont adaptés à tous les âges, toutes les cultures, tous
						les handicaps.
					</p>
				</div>
				<div>
					<div className="w-[200px] h-[200px]">
						<img src="./img/nicubunu/nicubunu_Game_baddie_Billy.svg"></img>
					</div>
				</div>
			</div>
			<Footer />
		</motion.div>
	);
}

export default Jeuxvadrouille;
