module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_00: "#ffffff00",
          A700_26: "#ffffff26",
          A700: "#ffffff",
        },
        green: { 900: "#007e23", A700: "#00a02d" },
        light_blue: {
          50: "#e9f9ff",
          "400_0c": "#38b9e60c",
          "50_7f": "#d3f3ff7f",
          "50_01": "#e0f7ff",
        },
        gray: { 50: "#fff8f6", 900: "#001824", "900_01": "#1f2023" },
        red: { 50: "#fff4f1" },
        black: {
          900: "#000000",
          "900_0c": "#0000000c",
          "900_cc": "#000000cc",
          "900_99": "#00000099",
          "900_19": "#00000019",
        },
        blue: {
          50: "#ebf6ff",
          100: "#c9f1ff",
          300: "#61ace4",
          900: "#0e4b91",
          "900_01": "#0f4b92",
        },
        blue_gray: { 600: "#546e82", 700: "#476371" },
        indigo: { 50: "#e5e9ee", 700: "#29578f", 800: "#1c547f" },
        cyan: { 900: "#0d4067" },
      },
      fontFamily: {
        montserrat: "Montserrat",
        plusjakartasans: "Plus Jakarta Sans",
        mories: "Mories",
      },
      boxShadow: {
        bs1: "1px 1px  40px 0px #38b9e60c",
        bs2: "2px 4px  10px 0px #0000000c",
        bs: "2px 2px  10px 0px #00000019",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#e9f9ff,#ffffff)",
        gradient1: "linear-gradient(45deg ,#0f4b92,#29578f)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
