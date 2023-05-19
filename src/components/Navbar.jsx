import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavBar({ backgroundImage }) {
	const [navbar, setNavbar] = useState(false);

	return (
		// <NavBar style={{ backgroundImage: "url(/img/Background.svg)" }}>
		<nav className="w-full bg-mainBg  shadow shadow-mainColor z-[5000]">
			<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
				<div className="">
					<div className="flex items-center justify-between py-2 md:py-3 md:block">
						<Link to="/jeux_vadrouille">
							<img
								className=" h-[6rem] border-2 border-mainColor rounded-sm "
								src="/img/Jeux_Vadrouille.png"
								alt="logo de la société"
							/>
						</Link>
						<div className="md:hidden z-5000">
							<button
								className="p-2 text-colorBlue rounded-md outline-none focus:border-purple-800 focus:border z-[5000] "
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? "block " : "hidden"
						}`}
					>
						<ul className="items-center justify-center  space-y-8 md:flex md:space-x-6 md:space-y-0 ">
							<li className="bg-mainColor px-2 text-gray-600 font-Carter border-2 border-[transparent] rounded-md  hover:text-purple-800  z-[5000]">
								<Link to="/jeux_vadrouille">Jeux Vadrouille</Link>
							</li>
							<li className="bg-mainColor px-2 text-gray-600 font-Carter border-2 border-[transparent] rounded-md   hover:text-purple-800 hover:border-b-2  z-[5000]">
								<Link to="/a_propos">A propos</Link>
							</li>
							<li className="bg-mainColor px-2 text-gray-600 font-Carter border-2 border-[transparent] rounded-md  hover:text-purple-800 hover:border-b-2  z-[5000]">
								<Link to="/nos_services">Nos services</Link>
							</li>
							<li className="bg-mainColor px-2 text-gray-600 font-Carter border-2 border-[transparent] rounded-md   hover:text-purple-800 hover:border-b-2  z-[5000]">
								<Link to="/contact">Nous contacter</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
		// </NavBar>
	);
}
