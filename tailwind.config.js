module.exports = {
	content: [
		"./app/index.html",
		"./app/**/*.{vue,js,ts,jsx,tsx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				header: "#18191c",
				primary: "#1976d4",
				primarymid: "#1461af",
				primarydark: "#004ba2"
			}
		}
	},
	plugins: [
		require("tailwindcss-textshadow")
	]
};
