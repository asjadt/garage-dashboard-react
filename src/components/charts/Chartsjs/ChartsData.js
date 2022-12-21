import configDB from '../../../data/customizer/config'
const primary = localStorage.getItem('primary_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;

export const barChartData = {
    labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'y',
            lagend: 'y',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: primary,
            backgroundColor: "rgba(21, 141, 247, 0.4)",
            highlightFill: "rgba(21, 141, 247, 0.8)",
            highlightStroke: primary,
            borderWidth: 2
        },
        {
            label: 'z',
            lagend: 'z',
            data: [35, 59, 80, 81, 56, 55, 40],
            borderColor: "#544fff",
            backgroundColor: "rgba(84, 79, 255, 0.4)",
            highlightFill: "rgba(84, 79, 255, 0.8)",
            highlightStroke: "#544fff",
            borderWidth: 2
        }
    ],
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}
export const barChartOptions = {
    maintainAspectRatio: true,
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export const lineChartData = {
    labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            data: [10, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(84, 79, 255, 0.5)',
            borderColor: "#544fff",
            borderWidth: 2,
        },
        {
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: 'rgba(21, 141, 247, 0.3)',
            borderColor: primary,
            borderWidth: 2,
        }
    ],
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}
export const lineChartOptions = {
    maintainAspectRatio: true,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            stacked: false,
        }],
        yAxes: [{
            stacked: false,
        }]
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export const data = {
    labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
    datasets: [
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(84, 79, 255, 0.4)',
            borderColor: '#544fff',
            pointBackgroundColor: 'rgba(84, 79, 255, 0.4)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#544fff',
            pointHoverBorderColor: 'rgba(84, 79, 255, 0.4)',
            data:[12, 3, 5, 18, 7]
        }
    ]
};

export const lineChart2Data = {
    labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [{
        backgroundColor: 'rgba(21, 141, 247, 0.2)',
        borderColor: primary,
        pointColor: primary,
        data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
        lineTension: 0,
    }, 
    {
        backgroundColor: 'rgba(84,  79, 255, 0.2)',
        borderColor: "#544fff",
        pointColor: "#544fff",
        data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
        lineTension: 0,
    },
    {
        backgroundColor: 'rgba(253, 81, 125, 0.2)',
        borderColor: "#fd517d",
        pointColor: "#fd517d",
        data: [60, 10, 40, 30, 80, 30, 20, 90],
        lineTension: 0,
    }
]
}
export const lineChart2option = {
    maintainAspectRatio: false,
    animation: {
        duration: 0 
    },
    legend: {
        display: false,
    },
    scaleShowVerticalLines: false,
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}

export const doughnutData = {
    labels:['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [{
        data:[350, 450, 100],
        backgroundColor: ["#544fff", primary, secondary]
    }]
}
export const doughnutOption = {
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}

export const polarData ={
    labels:['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
    datasets: [
        {
            data: [300, 500, 100, 40, 120],
            backgroundColor:["#544fff", primary, "#51bb25", "#544fff", secondary]
        },
        
],
}

export const polarOption = {
    legend: {
        display: false,
    },
}



