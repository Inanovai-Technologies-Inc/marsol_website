(function () {
    /* Prevent duplicate initialization */
    if (window.__marsolThemeLoaded) {
        return;
    }

    window.__marsolThemeLoaded = true;

    const root = document.documentElement;
    const KEY = "builder-theme";

    function getSystemTheme() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    function setTheme(theme) {
        root.setAttribute("data-theme", theme);
        localStorage.setItem(KEY, theme);
    }

    function getTheme() {
        return (
            localStorage.getItem(KEY) ||
            root.getAttribute("data-theme") ||
            getSystemTheme()
        );
    }

    function toggleTheme() {
        const current =
            root.getAttribute("data-theme") || getTheme();

        const next = current === "dark" ? "light" : "dark";

        setTheme(next);
    }

    /* Apply saved theme */
    setTheme(getTheme());

    /* Theme button */
    document.addEventListener(
        "click",
        function (event) {
            const toggle = event.target.closest(
                '[data-theme-toggle="1"]'
            );

            if (!toggle) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            toggleTheme();
        },
        true
    );

    console.log("Marsol global theme loaded");
})();
