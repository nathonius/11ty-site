import type { EleventyConfig } from "../11ty";

export function registerFilters(config: EleventyConfig) {
  config.addFilter(
    "absolute",
    function (value: string, base: string = "https://nathan-smith.org") {
      return new URL(value, base).href;
    }
  );

  config.addFilter("includes", function (value: string[], match: string) {
    return Array.isArray(value) && value.includes(match);
  });

  config.addFilter("keys", function (value: object) {
    return Object.keys(value);
  });

  config.addFilter("activeRoute", function (value: string, baseRoute: string) {
    if (
      (baseRoute === "/" && value.length < 2) ||
      (baseRoute !== "/" && value.startsWith(baseRoute))
    ) {
      return "active";
    }
    return "";
  });

  config.addFilter(
    "without",
    function (value: string[], match: string | string[]) {
      if (!Array.isArray(value)) {
        return value;
      }
      const _match = Array.isArray(match) ? match : [match];
      return value.filter((v) => !_match.includes(v));
    }
  );

  type ProjectStatus = "Active" | "Maintenance" | "Archived";
  config.addFilter(
    "projectStatusSort",
    function (value: { data: { "project-status": ProjectStatus } }[]) {
      if (!Array.isArray(value)) {
        return value;
      }
      const copy = [...value];
      const projectStatus: Record<ProjectStatus, number> = {
        Active: 1,
        Maintenance: 2,
        Archived: 3,
      };
      copy.sort((a, b) => {
        if (
          projectStatus[a.data["project-status"]] &&
          projectStatus[b.data["project-status"]]
        ) {
          return projectStatus[a.data["project-status"]] >
            projectStatus[b.data["project-status"]]
            ? 1
            : -1;
        } else if (projectStatus[a.data["project-status"]]) {
          return 1;
        } else if (projectStatus[b.data["project-status"]]) {
          return -1;
        }
        return -1;
      });
      return copy;
    }
  );
}
