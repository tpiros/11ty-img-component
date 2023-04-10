const eleventyWebcPlugin = require('@11ty/eleventy-plugin-webc');
const { eleventyImagePlugin } = require('@11ty/eleventy-img');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyWebcPlugin, {
    components: ['npm:@11ty/eleventy-img/*.webc'],
  });

  // Image plugin
  eleventyConfig.addPlugin(eleventyImagePlugin, {
    formats: ['webp', 'jpeg'],
    urlPath: '/img/',

    defaultAttributes: {},
  });
  eleventyConfig.addPassthroughCopy('css');
  return {
    passthroughFileCopy: true,
  };
};
