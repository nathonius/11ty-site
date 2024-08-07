import type { EleventyConfig } from "../11ty";

export function drafts(
  config: EleventyConfig,
  options?: { draftKey?: string; formats?: string }
) {
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
