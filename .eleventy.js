/* Config file */

module.exports = function (eleventyConfig) {
  /* Tout ce qui est ds le src est cloné ds public et mettre tout les folders qui doivent être cloner ds public  */
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/javascript");

    return {
        dir: {
        input: "src",
        // includes: "_includes",
        output: "public",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
