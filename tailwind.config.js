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
          "url('https://raw.githubusercontent.com/wahidhasyim02/materi-git-github/main/public/img/bg-light.jpg')",
        "hero-dark":
          "url('https://raw.githubusercontent.com/wahidhasyim02/materi-git-github/main/public/img/bg-dark.jpg')",
      },
    },
  },
  plugins: [],
};
