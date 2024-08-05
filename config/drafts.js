export function drafts(config, options) {
  const opts = Object.assign(
    { draftKey: "draft", formats: "njk,md,liquid" },
    options
  );

  // Skip drafts
  config.addPreprocessor("drafts", opts.formats, (data) => {
    if (data[opts.draftKey]) {
      return false;
    }
  });
}
