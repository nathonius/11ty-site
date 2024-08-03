export default function (config) {
  config.addFilter(
    "absolute",
    function (value, base = "https://nathan-smith.org") {
      return new URL(value, base).href;
    }
  );

  config.addFilter("includes", function (value, match) {
    return Array.isArray(value) && value.includes(match);
  });

  config.addFilter("keys", function (value) {
    return Object.keys(value);
  });

  config.addFilter("activeRoute", function (value, baseRoute) {
    if (
      (baseRoute === "/" && value.length < 2) ||
      (baseRoute !== "/" && value.startsWith(baseRoute))
    ) {
      return "active";
    }
    return "";
  });

  config.addFilter("projectStatusSort", function (value) {
    if (!Array.isArray(value)) {
      return value;
    }
    const copy = [...value];
    const projectStatus = {
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
  });
}
