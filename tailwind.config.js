import { generateTailwindColors } from '../../vendor/laravel/nova/generators'
/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: "nr-",
    content: ["./resources/**/*{js,vue,blade.php}"],
    darkMode: ['class', '[class="dark"]'],
    theme: {
        colors: generateTailwindColors(),
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    keyframes: {
        slideDownAndFade: {
            from: { opacity: 0, transform: "translateY(-2px)" },
            to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
            from: { opacity: 0, transform: "translateX(2px)" },
            to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
            from: { opacity: 0, transform: "translateY(2px)" },
            to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
            from: { opacity: 0, transform: "translateX(-2px)" },
            to: { opacity: 1, transform: "translateX(0)" },
        },
    },
    animation: {
        slideDownAndFade:
            "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
            "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
            "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    },
};