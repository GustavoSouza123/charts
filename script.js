const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');

// chart 1
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'My first chart\'s title'
            }
        }
    }
});

// chart 2
const data2 = [
    {year: 2010, count: 10},
    {year: 2011, count: 20},
    {year: 2012, count: 15},
    {year: 2013, count: 25},
    {year: 2014, count: 22},
    {year: 2015, count: 30},
    {year: 2016, count: 28},
]

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: data2.map(row => row.year),
        datasets: [{
            label: 'Acquisitions by year',
            backgroundColor: '#777',
            barPercentage: 0.5,
            barThickness: 20,
            maxBarThickness: 24,
            minBarLength: 2,
            data: data2.map(row => row.count)
        }]
    },
    options: {
        animation: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        }
    }
});

// chart 3
new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My first doughnut chart',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    }
});

// chart 4
new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: [
            'Yellow',
            'White'
        ],
        datasets: [{
            label: 'My first pie chart',
            data: [170, 30],
            backgroundColor: [
                'rgb(242, 240, 0)',
                'rgb(255, 255, 255)'
            ],
            hoverBackgroundColor: [
                'rgb(242, 240, 0)',
                'rgb(255, 255, 255)'
            ],
            borderWidth: 0,
            rotation: 115
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Pacman'
            }
        }
    }
})