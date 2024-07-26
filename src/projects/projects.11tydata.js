export default {
  eleventyComputed: {
    permalink: function (data) {
      if (data.permalink) {
        return data.permalink;
      }
      return `projects/${this.slug(data.page.fileSlug)}.html`;
    },
  },
};
