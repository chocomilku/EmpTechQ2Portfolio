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
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
