export default {
  eleventyComputed: {
    layout: "post.njk",
    permalink: function (data) {
      if (data.page.outputFileExtension !== "html" || data.permalink) {
        return data.permalink;
      }
      return `blog/posts/${this.slug(data.page.fileSlug)}/`;
    },
  },
};
