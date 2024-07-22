import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {

        colors: {
            mercator: {
                blue: "#5555ff",
                darkblue: "#0000aa",
                green: "#00ff00",
                lightgreen: "#55ff55",
                pink: "#ff55ff",
                yellow: "#ffff55",
                cyan: "#55ffff",
                gray: "#aaaaaa",
                red: "#ff5555",
                orange: "#aa5500",
            }
        },
        extend: {
            animation: {
                blink: "blink 1s step-end infinite"
            },
            keyframes: {
                blink: {
                    "0%": {opacity: "1"},
                    "50%": {opacity: "0"}
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
