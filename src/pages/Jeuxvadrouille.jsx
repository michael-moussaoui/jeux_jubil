import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Dots from "../components/Animation/Dots";
// import Carousel from "../components/Animation/Carousel";
import "./jeux.modules.css";
import Footer from "../components/Footer";

function Jeuxvadrouille() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			className="text-lg overflow-x-hidden "
		>
			<Dots />
			<Navbar />
			<h1 className="w-80  text-center text-2xl md:text-4xl mx-auto mt-10 mb-5 p-5 rounded-3xl bg-mainColor text-darkBlue font-Carter  shadow-md shadow-mainColor z-[5000] ">
				Jeux Vadrouille
			</h1>
			<img
				src="img/logoJeux.png"
				width={250}
				height={150}
				alt="logo du site"
				className="relative left-1/2 -translate-x-1/2 "
			/>
			{/* <Carousel /> */}
			<h2 className="relative w-1/2 mx-auto text-xl text-center text-mainColor font-bold ">
				Une ludothèque itinérante qui amène et anime des jeux pour
				toutes &amp; tous en tout lieu &amp; toute occasion !
			</h2>
			<div>
				<p></p>
			</div>
			<div className=" border-2 border-purple-600 flex flex-row">
				<div className="num_1 border-2 border-purple-800 mb-10 py-14  pl-14 w-[50vw] relative left-10 ">
					<h3 className=" font-Carter font-bold">Pour qui?</h3>
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
					{/* <div className="w-[200px] h-[200px]">
						<img src="./img/nicubunu/nicubunu_Game_baddie_Billy.svg"></img>
					</div> */}
				</div>
			</div>
			<div className=" border-2 border-purple-600 flex flex-row">
				<div>
					{/* <div className="w-[200px] h-[200px]">
						<img src="./img/nicubunu/nicubunu_Game_baddie_Billy.svg"></img>
					</div> */}
				</div>
				<div className="num_2 border-2 border-purple-800 my-10 p-10 w-[40vw] relative left-[35%]">
					<h3 className=" font-Carter font-bold">Ou?</h3>
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
					<h3 className=" font-Carter font-bold">Quels jeux?</h3>
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
					{/* <div className="w-[200px] h-[200px]">
						<img src="./img/nicubunu/nicubunu_Game_baddie_Billy.svg"></img>
					</div> */}
				</div>
			</div>
			<Footer />
		</motion.div>
	);
}

export default Jeuxvadrouille;
