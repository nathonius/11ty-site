export interface ViewData {
  eleventy: EleventyMetadata;
  pkg: PackageMetadata;
  page: Page;
  collections: Collections;
}

export interface EleventyMetadata {
  version: string;
  generator: string;
  env: object;
  directories: {
    input: string;
    data: string;
    includes: string;
    output: string;
    inputFile?: string;
    inputGlob?: string;
    layouts?: string;
  };
}

export interface PackageMetadata {
  name: string;
  version: string;
  description: string;
}

export interface Collections {
  all: object;
  [key: string]: object;
}

export interface Page {
  /**
   * URL can be used in <a href> to link to other templates
   * NOTE: This value will be `false` if `permalink` is set to `false`.
   * @example "/current/page/myFile/"
   */
  url: string;

  /**
   * For permalinks: inputPath filename minus template file extension
   * @example "myFile"
   */
  fileSlug: string;

  /**
   * For permalinks: inputPath minus template file extension
   * @example "/current/page/myFile"
   */
  filePathStem: string;

  /**
   * JS Date object for current page (used to sort collections)
   */
  date: Date;

  /**
   * The path to the original source file for the template
   * NOTE: this includes your input directory path!
   * @example "./current/page/myFile.md"
   */
  inputPath: string;

  /**
   * Depends on your output directory (the default is _site)
   * You should probably use `url` instead.
   * NOTE: This value will be `false` if `permalink` is set to `false`.
   * @example "./_site/current/page/myFile/index.html"
   */
  outputPath: string;

  /**
   * Useful with `page.filePathStem` when using custom file extensions.
   * @example "html"
   */
  outputFileExtension: string;

  /**
   * Comma separated list of template syntaxes processing this template
   * @example "liquid,md"
   */
  templateSyntax: string;
}
