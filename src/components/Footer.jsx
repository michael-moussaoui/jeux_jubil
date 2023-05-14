import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faSquareFacebook,
	faSquareInstagram,
	faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<div className="relative h-36 mt-10 bg-mainColor text-center border-t-2 border-t-colorBlue z-50">
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
