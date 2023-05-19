import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faSquareFacebook,
	faSquareInstagram,
	faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
	faAt,
	faPhone,
	faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
	return (
		<div className="relative h-36 mt-10 bg-mainColor text-center border-t-2 border-t-colorBlue z-50">
			<div className="absolute ml-2 mt-2 text-sm text-start">
				<p className="text-md font-Carter">Jeux Vadrouille</p>
				<p>8 Avenue Teisseire</p>
				<p>38100 GRENOBLE</p>
				<p>
					<span className="mr-1 text-darkBlue">
						<FontAwesomeIcon icon={faPhone} />
					</span>
					06.76.78.58.69
				</p>
				<p>
					<span className="mr-1 text-darkBlue">
						<FontAwesomeIcon icon={faPhone} />
					</span>
					06.46.40.43.93
				</p>
				<p>
					<span className="mr-1 text-darkBlue">
						<FontAwesomeIcon icon={faAt} />
					</span>
					Jeux.vadrouille@gmail.com
				</p>
			</div>

			<div className="flex flex-row justify-center mt-3  text-2xl text-darkBlue">
				{" "}
				<p className="relative top-[0.5vh] mr-2 text-sm content-center ">
					Retrouvez-nous sur facebook
				</p>
				<span className="hover:text-purple-800 cursor-pointer">
					<FontAwesomeIcon icon={faSquareFacebook} />
				</span>
				{/* <span className="mx-2 hover:text-purple-800 cursor-pointer">
					<FontAwesomeIcon icon={faSquareWhatsapp} />
				</span>
				<span className="hover:text-purple-800 cursor-pointer">
					<FontAwesomeIcon icon={faSquareInstagram} />
				</span> */}
			</div>
			<div className="absolute bottom-0 pb-5 left-1/2 -translate-x-1/2">
				<p className=" text-sm">
					{" "}
					Copyright &copy; {new Date().getFullYear()} Jeux Vadrouille{" "}
				</p>
				<p className="text-xs text-darkBlue">
					Crée par MOUSSAOUI Michaël
				</p>
			</div>
		</div>
	);
}

export default Footer;
