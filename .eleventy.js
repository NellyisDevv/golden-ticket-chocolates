module.exports = function(eleventyConfig) {
  // Ignore files that shouldn't be published
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("PROJECT_RULES.md");

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("includes");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "njk"],
    htmlTemplateEngine: "njk"
  };
};
