import Navbar from "../components/Navbar";

function About() {
	return (
		<div className="text-lg">
			<Navbar />
			<h1 className=" w-96  text-center text-2xl md:text-4xl mx-auto mt-10 mb-24 p-5 rounded-3xl bg-purple-300 font-Carter text-purple-700 shadow-lg shadow-purple-800 ">
				Qui sommes-nous ?
			</h1>
			<div>
				<p>
					<span className=" text-purple-700 font-bold">Vanessa</span>,
					pleine de créativité, de bonne humeur et de spontanéité.
					Maman de 2 enfants, 12 et 17 ans...Les Ados ne me font pas
					peur ! Animatrice (BAFA) dans sa jeunesse puis éducatrice
					spécialisée, c’est toujours grâce à l’humour et aux jeux
					qu’elle réussit à créer du lien avec les différents publics.
				</p>
				<p>
					Présente dans l&#39;équipe d&#39;animation pour y mettre des
					paillettes. Plus sérieusement, passionnée par les jeux de
					société, toujours partante pour jouer avec vous.
				</p>
			</div>
			<div>
				<p>
					<span className="text-purple-700 font-bold">Eva</span>,
					jeune, dynamique et ambitieuse. Le jeu de société a bercé
					son enfance, son adolescence et s’est étendu à sa vie
					d’adulte. Diplômée d’une licence animation sociale
					culturelle et de loisirs, elle peut s’adapter à tout âge et
					à tout public. Passionnée par son métier qui requiert des
					qualités d’écoute, de partage et de patience, elle est
					toujours là pour vous faire partager un moment ludique.
				</p>
			</div>
			<p>
				Alors n’hésitez pas à les contacter pour découvrir de nouveaux
				jeux. À très vite sur un plateau !
			</p>
		</div>
	);
}

export default About;
