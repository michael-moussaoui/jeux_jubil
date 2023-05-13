/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		// screens: {},
		fontFamily: {
			Taviraj: ["taviraj"],
			Carter: ["Carter One"],
		},
		colors: {
			mainColor: "#0CC0DF",
			colorBlue: "#0C86F8",
			darkBlue: "#0D04A3",
			colorRed: "#F41710",
			bgFooter: "",
			bgNav: "",
		},

		extend: {
			backgroundImage: {
				mainBg: "url(/img/Background.svg)",
			},
			boxShadow: {},
			keyframes: {},
			animation: {},
		},
	},
	plugins: [],
};
