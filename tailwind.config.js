/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },

      backgroundImage: {
        "hero-light":
          "url('https://wahidhasyim02.github.io/materi-git-github/public/img/bg-light.jpg')",
        "hero-dark":
          "url('https://wahidhasyim02.github.io/materi-git-github/public/img/bg-dark.jpg')",
      },
    },
  },
  plugins: [],
};
