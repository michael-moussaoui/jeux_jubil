import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Dots from "../components/Animation/Dots";
import CoverflowSlide from "../components/Animation/CoverflowSlide";

function Services() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			className="relative text-lg"
		>
			<Dots />
			<Navbar />
			<h1 className=" w-64 text-center text-2xl md:text-4xl mx-auto mt-10 mb-20 p-5 rounded-3xl bg-mainColor text-darkBlue font-Carter  shadow-md shadow-mainColor z-[5000]  ">
				Nos services
			</h1>

			<div className=" border-2 border-purple-600 flex flex-row">
				<div className="num_1 border-2 border-purple-800 mb-10 py-14  pl-14 w-[50vw] relative left-10 ">
					<h2 className=" font-Carter font-bold">
						Soirée Jeux Ouverte À Tous
					</h2>
					<p>
						Chaque 1er vendredi du mois, Jeux Vadrouille vous invite
						pour sa soirée jeux.
					</p>
					<p>
						Venez partager un agréable moment ludique avec des jeux de
						société, classiques, modernes, familiaux, d’ambiance ou
						stratégiques.
					</p>
					<p>
						Nos animatrices vous accueillent et vous invitent à jouer,
						en vous expliquant les règles et en dynamisant l’espace de
						jeu.
					</p>
					<p>
						Les jeux sélectionnés s’adressent à tout les publics, et
						sont simples et accessibles. Un espace petite enfance pour
						que vous vous amusiez avec vos enfants !
					</p>
					<p>
						Il y a même un espace buvette pour reprendre des forces
						après vos parties !
					</p>
				</div>
			</div>
			<div className=" border-2 border-purple-600 flex flex-row">
				<div className="num_1 border-2 border-purple-800 mb-10 py-14  pl-14 w-[50vw] relative left-10 ">
					<h2 className=" font-Carter font-bold">
						Notre ambition : vous faire jouer !
					</h2>
					<p>
						Jeux Vadrouille est une petite société qui organise des
						événements ludiques pour vous faire découvrir et
						redécouvrir le plaisir du jeu. Pour cela, nous organisons
						différentes manifestations et intervenons sur de
						nombreuses communes au alentour de Grenoble tout au long
						de l’année.
					</p>
				</div>
			</div>
			<div className=" border-2 border-purple-600 flex flex-row">
				<div className="num_1 border-2 border-purple-800 mb-10 py-14  pl-14 w-[50vw] relative left-10 ">
					<h2 className=" font-Carter font-bold">
						Le Jeu, Ciment Social
					</h2>
					<p>
						Le jeu, c’est du fun, des sourires et des rires. Mais
						c’est aussi des rencontres, des échanges et des moments
						partagés.
					</p>
					<p>
						Jeux Vadrouille s’inscrit complètement dans cette démarche
						d’utiliser le jeu comme un outil de cohésion sociale, où
						la dimension humaine est aussi importante que le jeu en
						lui-même.
					</p>
				</div>
			</div>
			<div className=" border-2 border-purple-600 flex flex-row">
				<div className="num_1 border-2 border-purple-800 mb-10 py-14  pl-14 w-[50vw] relative left-10 ">
					<h2 className=" font-Carter font-bold">
						Une Equipe À Votre Service
					</h2>
					<p>
						Pour animer ses jeux, rien de tel qu’une équipe passionnée
						et dynamique ! Nos animatrices sont là pour vous
						accueillir, vous guider, vous expliquer les règles et
						s’assurer que tout se déroule bien.
					</p>
				</div>
			</div>
			<CoverflowSlide />
			<Footer />
		</motion.div>
	);
}

export default Services;
