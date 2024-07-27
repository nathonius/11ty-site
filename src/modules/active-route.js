// Highlight active route
const path = window.location.pathname;
if (path === "/" || path === "/index.html") {
  document.querySelector("#nav-home").classList.add("active");
} else if (path.startsWith("/blog")) {
  document.querySelector("#nav-blog").classList.add("active");
} else if (path.startsWith("/bits")) {
  document.querySelector("#nav-bits").classList.add("active");
} else if (path.startsWith("/projects")) {
  document.querySelector("#nav-projects").classList.add("active");
} else if (path === "/contact.html") {
  document.querySelector("#nav-contact").classList.add("active");
}
