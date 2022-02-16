module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	purge: {
		enabled: true,
		content: [
			"./pages/**/*.{js,ts,jsx,tsx}",
			"./components/**/*.{js,ts,jsx,tsx}",
		],
		options: {
			safelist: ["dark"],
		},
	},
	theme: {
		extend: {
			colors: {
				accent: "#8726bf",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
