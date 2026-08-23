
(() => {
    const root = document.documentElement, KEY = "builder-theme";
    const system = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    root.setAttribute("data-theme", localStorage.getItem(KEY) || system());
    document.addEventListener("click", (e) => {
        const t = e.target.closest("[data-theme-toggle]");
        if (!t) return;
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem(KEY, next);
    });
})();
