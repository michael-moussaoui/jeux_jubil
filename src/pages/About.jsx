import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dots from "../components/Animation/Dots";
import MyParticles from "../components/Animation/MyParticles";
import "./about.modules.css";

function About() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			className="text-lg text-center"
		>
			<Dots />
			<Navbar />
			<MyParticles />
			<h1 className=" w-96 text-center text-2xl md:text-4xl mx-auto mt-10 mb-20 p-5 rounded-3xl bg-mainColor text-darkBlue font-Carter  shadow-md shadow-mainColor z-[5000]  ">
				Qui sommes-nous ?
			</h1>

			<p>
				<span className="">“Jeux Vadrouille”</span> est une petite
				société qui organise des événements ludiques pour vous faire
				découvrir et redécouvrir le plaisir du jeu. Pour cela, nous
				organisons différentes manifestations et intervenons sur de
				nombreuses communes aux alentours de Grenoble,tout au long de
				l’année.
			</p>
			<p>
				Le jeu, c’est du fun, des sourires et des rires. Mais c’est
				aussi des rencontres, des échanges et des moments partagés.
				<span className="">“Jeux Vadrouille”</span> s’inscrit
				complètement dans cette démarche d’utiliser le jeu comme un
				outil de cohésion sociale, où la dimension humaine est aussi
				importante que le jeu en lui-même.
			</p>
			<p>
				<span className="">“Jeux Vadrouille”</span> souhaite rendre
				partout le jeu accessible à tous et favoriser la mixité
				sociale.
			</p>
			<div className="flex h-[350px]  mx-auto mt-10  justify-center ">
				<div className="vanessa h-full w-[30%]  mb-5 mx-10 pt-5 px-2 bg-colorRed text-white  rounded-lg">
					<span className=" text-black text-xl font-Carter font-bold">
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

				<div className="eva h-full w-[30%] mx-10 pt-5 px-2 bg-colorBlue   rounded-lg">
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
