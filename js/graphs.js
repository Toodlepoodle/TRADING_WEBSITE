document.addEventListener('DOMContentLoaded', function() {
    // Sample data for stock prices
    const stockData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Opening Price',
            data: [150, 152, 155, 153, 156, 155, 158],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }, {
            label: 'Closing Price',
            data: [151, 154, 153, 155, 158, 157, 160],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }, {
            label: 'High',
            data: [153, 156, 157, 156, 159, 158, 162],
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.1
        }, {
            label: 'Low',
            data: [148, 150, 152, 151, 154, 153, 156],
            borderColor: 'rgb(255, 206, 86)',
            tension: 0.1
        }]
    };

    // Sample data for trading volume
    const volumeData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Trading Volume',
            data: [1000000, 1200000, 980000, 1100000, 1300000, 1150000, 1250000],
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }]
    };

    // Create stock price chart
    new Chart(document.getElementById('stockPriceChart'), {
        type: 'line',
        data: stockData,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Stock Prices Over Time'
                }
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // Create volume chart
    new Chart(document.getElementById('volumeChart'), {
        type: 'bar',
        data: volumeData,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Trading Volume Over Time'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});