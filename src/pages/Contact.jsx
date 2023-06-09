import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Dots from "../components/Animation/Dots";
// import styles from "../styles/contact.css?inline";
import "./contact.modules.css";

function Contact() {
	return (
		// <div className={Styles.bodyContact}>
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			className=" min-h-screen text-lg bg-[#212121]"
		>
			<Dots />
			<Navbar />

			<div className="container_form relative mt-10 mb-5">
				{/* <h1 className=" w-80  text-center text-2xl md:text-4xl mx-auto mt-10 p-5 rounded-3xl bg-purple-300 font-Carter text-purple-700 shadow-lg shadow-purple-800 ">
					Nous contacter
				</h1> */}
				<form className="form">
					<span className="title font-Carter text-mainColor">
						Nous contacter
					</span>
					<div className="absolute right-2 bottom-10">
						<img
							src="img/dice.svg"
							width={150}
							height={50}
							alt="dice"
						></img>
					</div>
					<div className="absolute left-6 top-8">
						<img
							src="img/playing-cards-svgrepo-com.svg"
							width={150}
							height={50}
							alt="dice"
						></img>
					</div>
					<div className="form_control">
						<input
							required=""
							className="input"
							type="text"
							placeholder="Votre prénom"
						/>
						<label className="label">Prénom</label>
					</div>
					<div className="form_control">
						<input
							required=""
							className="input"
							type="text"
							placeholder="Votre nom"
						/>
						<label className="label">Nom</label>
					</div>
					<div className="form_control">
						<input
							required=""
							className="input"
							type=""
							placeholder="Votre email"
						/>
						<label className="label">Email</label>
					</div>
					<textarea
						className="form_control_textarea"
						placeholder="Votre message"
					></textarea>
					<button className=" font-Carter">Envoyer</button>
				</form>
			</div>
			<Footer />
		</motion.div>
	);
}

export default Contact;
