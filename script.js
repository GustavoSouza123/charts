// shortcuts for selecting a DOM element
const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

// generate charts
let chartsNum = 7;
for(let i = 1; i <= chartsNum; i++) {
    document.querySelector('.container').innerHTML += `
    <div class="chart chart${i}">
        <p>Chart ${i}:</p>
        <canvas id="myChart${i}"></canvas>
    </div>
    `;
}

// chart 1
let randomDataChart1 = [];
for(i = 0; i < 6; i++) {
    randomDataChart1.push(Math.floor(Math.random() * 20));
}

new Chart(c('#myChart1'), {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of votes',
            data: randomDataChart1,
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
];

new Chart(c('#myChart2'), {
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
new Chart(c('#myChart3'), {
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
new Chart(c('#myChart4'), {
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
});

// chart 5
new Chart(c('#myChart5'), {
    type: 'pie',
    data: {
        labels: ['Math', 'English', 'Science', 'History', 'Other'],
        datasets: [{
            label: 'Favorite subject',
            data: [125, 72, 36, 17, 29],
            hoverOffset: 16,
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Favorite subject'
            }
        }
    }
});

// chart 6
new Chart(c('#myChart6'), {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My first line chart',
            data: [65, 59, 77, 81, 56, 63, 40],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0,
            fill: 'origin',
            backgroundColor: 'rgba(75, 192, 192, .3)',
            pointHitRadius: 36,
            pointHoverBorderWidth: 8
        }]
    }
})

// chart 7
let randomData = {dataset1: [], dataset2: [], dataset3: []};
for(let j = 0; j < 7; j++) {
    randomData.dataset1.push(Math.floor(Math.random() * 100));
    randomData.dataset2.push(Math.floor(Math.random() * 100));
    randomData.dataset3.push(Math.floor(Math.random() * 100));
}

new Chart(c('#myChart7'), {
    type: 'line',
    data: {
        labels: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
        datasets: [
            {
                label: 'Desktops',
                data: randomData.dataset1,
                pointHitRadius: 16,
                pointHoverBorderWidth: 8
            },
            {
                label: 'Laptops',
                data: randomData.dataset2,
                pointHitRadius: 16,
                pointHoverBorderWidth: 8
            },
            {
                label: 'Tablets',
                data: randomData.dataset3,
                pointHitRadius: 16,
                pointHoverBorderWidth: 8
            }
        ]
    }
});