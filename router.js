export class Router {
    constructor() {
        this.routes = {};
        this.currentUrl = '';
    }

    route(path, callback) {
        this.routes[path] = callback;
    }

    refresh() {
        this.currentUrl = location.hash.slice(1) || '/';
        this.routes[this.currentUrl]();
    }

    init() {
        window.addEventListener('load', this.refresh.bind(this));
        window.addEventListener('hashchange', this.refresh.bind(this));

        window.addEventListener("popstate", this.refresh.bind(this));
        document.addEventListener("click", (event) => {
            console.log(event.target.href);
            const { target } = event;
            if (
                target.tagName.toLowerCase() === "a" &&
                target.getAttribute("href").startsWith("/")
            ) {
                event.preventDefault();
                const path = target.getAttribute("href");
                this.navigate(path);
            }
        });
        this.refresh();
    }

    navigate(path) {
        history.pushState(null, "", path);
        this.refresh();
    }
}