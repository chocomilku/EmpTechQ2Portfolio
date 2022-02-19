module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				accent: "#8726bf",
			},
			backgroundImage: {
				bgLight: `url("../public/Visiwig-Dots.svg")`,
				bgDark: `url("../public/Visiwig-Dots-dark.svg")`,
				heroLight: `url("../public/stacked-waves-haikei.svg")`,
				heroDark: `url("../public/stacked-waves-haikei-dark.svg")`,
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
