/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./public/index.html",
		"./src/input.css",
		"./public/output.css",
		"./public/our-subsidiaries.html",
		"./public/thank-you.html",
	],
	theme: {
		conatiner: {
			center: true,
		},
		fontFamily: {
			Roboto: ["Roboto, sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
