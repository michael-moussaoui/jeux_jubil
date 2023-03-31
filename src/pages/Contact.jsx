import Navbar from "../components/Navbar";
// import styles from "../styles/contact.css?inline";
import "./contact.modules.css";

function Contact() {
	return (
		// <div className={Styles.bodyContact}>
		<div className=" min-h-screen text-lg bg-[#212121]">
			<Navbar />

			<div className="container_form mt-10 mb-5">
				{/* <h1 className=" w-80  text-center text-2xl md:text-4xl mx-auto mt-10 p-5 rounded-3xl bg-purple-300 font-Carter text-purple-700 shadow-lg shadow-purple-800 ">
					Nous contacter
				</h1> */}
				<form className="form">
					<span className="title font-Carter text-purple-500">
						Nous contacter
					</span>
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
		</div>
	);
}

export default Contact;
