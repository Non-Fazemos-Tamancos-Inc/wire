class LineChart {
    constructor(container, data, options) {
        this.container = container;
        this.data = data;
        this.options = options;
    }

    render() {
        const chartScript = document.createElement('script');
        chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        document.head.appendChild(chartScript);

        chartScript.onload = () => {
            new Chart(this.container, {
                type: 'line',
                data: this.data,
                options: this.options
            });
        };
    }
}