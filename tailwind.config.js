import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#0089d5",

                    secondary: "#697565",

                    accent: "#006dff",

                    neutral: "#1a2a3c",

                    "base-100": "#1E201E",

                    info: "#0097ff",

                    success: "#15B392",

                    warning: "#FFB200",

                    error: "#C62E2E",
                },
            },
        ],
    },

    plugins: [forms, require("daisyui")],
};
