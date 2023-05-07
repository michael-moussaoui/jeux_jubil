import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./about.modules.css";

function About() {
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 1.5 }}
			className="text-lg text-center"
		>
			<Navbar />
			<h1 className=" w-96   text-2xl md:text-4xl mx-auto mt-10 mb-24 p-5 rounded-3xl bg-purple-300 font-Carter text-purple-700 shadow-lg shadow-purple-800 ">
				Qui sommes-nous ?
			</h1>
			<div className="flex h-[350px]  mx-auto  justify-center ">
				<div className="vanessa h-full w-[30%]  mb-5 mx-10 pt-5 px-2 bg-[#212121] text-purple-400  rounded-lg">
					<span className=" text-purple-700 text-xl font-Carter font-bold">
						Vanessa,
					</span>

					<p>
						pleine de créativité, de bonne humeur et de spontanéité.
						Maman de 2 enfants, 12 et 17 ans...Les Ados ne me font pas
						peur ! Animatrice (BAFA) dans sa jeunesse puis éducatrice
						spécialisée, c’est toujours grâce à l’humour et aux jeux
						qu’elle réussit à créer du lien avec les différents
						publics.
					</p>
					<p>
						Présente dans l&#39;équipe d&#39;animation pour y mettre
						des paillettes. Plus sérieusement, passionnée par les jeux
						de société, toujours partante pour jouer avec vous.
					</p>
				</div>

				<div className="eva h-full w-[30%] mx-10 pt-5 px-2 bg-purple-400   rounded-lg">
					<span className="text-purple-700 text-xl font-Carter font-bold">
						Eva
					</span>
					,
					<p>
						jeune, dynamique et ambitieuse. Le jeu de société a bercé
						son enfance, son adolescence et s’est étendu à sa vie
						d’adulte. Diplômée d’une licence animation sociale
						culturelle et de loisirs, elle peut s’adapter à tout âge
						et à tout public. Passionnée par son métier qui requiert
						des qualités d’écoute, de partage et de patience, elle est
						toujours là pour vous faire partager un moment ludique.
					</p>
				</div>
			</div>
			{/* <div class="flip-card">
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<p class="title">FLIP CARD</p>
						<p>Hover Me</p>
					</div>
					<div class="flip-card-back">
						<p class="title">BACK</p>
						<p>Leave Me</p>
					</div>
				</div>
			</div> */}
			<p className="mt-10">
				Alors n’hésitez pas à nous contacter pour découvrir de
				nouveaux jeux. À très vite sur un plateau !
			</p>
			<Footer />
		</motion.div>
	);
}

export default About;
