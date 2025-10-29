module.exports = ({ env }) => {
  const plugins = [
    require("autoprefixer")
  ];

  if (env === "production") {
    plugins.push(
      require("@fullhuman/postcss-purgecss")({
        content: [
          "./src/**/*.jsx",
          "./src/**/*.js",
          "./public/**/*.html",
          "./d:\\Umzug\\first\\src\\**\\*.jsx",
          "./d:\\Umzug\\first\\public\\**\\*.html"
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: [
          "active",
          "show",
          "open",
          "collapsing",
          /^bx-/,
          /^bi-/,
          /^ri-/,
          /^swiper-/,
          /^glightbox-/,
          /^aos-/
        ]
      })
    );
    plugins.push(
      require("cssnano")({
        preset: "default"
      })
    );
  }

  return { plugins };
};
