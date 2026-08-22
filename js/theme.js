// Wire up the theme toggle button. The initial theme is applied by a small
// inline script in <head> to avoid a flash of the wrong theme on load.
(function () {
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  function systemPrefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function currentIsDark() {
    var attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark") return true;
    if (attr === "light") return false;
    return systemPrefersDark();
  }

  btn.addEventListener("click", function () {
    var next = currentIsDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage may be unavailable; toggle still works for this session */
    }
  });
})();
