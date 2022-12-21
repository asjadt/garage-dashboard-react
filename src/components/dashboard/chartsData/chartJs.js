/*===============================================================
                        Default Dashboard
=================================================================*/
import configDB from '../../../data/customizer/config'
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;

// LineChart
export const lineChartData = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);
    gradient.addColorStop(0, 'rgb(255, 246, 243)');
    gradient.addColorStop(0.5, 'rgb(255, 230, 220)');
    gradient.addColorStop(1, 'rgb(255, 84, 24)');
    return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "aug", "sup"],
        datasets: [{
            fill: false,
            borderColor: gradient,
            borderWidth: '4',
            pointRadius: '6',
            pointBorderWidth: '3',
            pointBorderColor: gradient,
            pointBackgroundColor: '#fff',
            scaleShowLabels: false,
            pointHoverRadius: '6',
            pointHoverBorderWidth: '3',
            data: [28, 45, 28, 55, 40, 60, 50, 80, 60]
        }]
}
}
export const lineChartOptions = {
    layout: {
        padding: 10
    },
    legend: { display: false },
    
    responsive: true,
    scales: {
        xAxes: [{
            display: false,
            gridLines: { color: "transparent", drawTicks: false, }
        }],
        yAxes: [{ display: false }]
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

/*===============================================================
                        CRM Dashboard
=================================================================*/
// LineChart
export const crmlineChartData = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 0, 500, 0);
    gradient.addColorStop(0, 'rgb(85, 77, 255)');
    gradient.addColorStop(0.3, 'rgb(82, 86, 255)');
    gradient.addColorStop(0.4, 'rgb(80, 102, 255)');
    gradient.addColorStop(0.5, 'rgb(79, 113, 255)');
    gradient.addColorStop(0.7, 'rgb(78, 114, 255)');
    gradient.addColorStop(0.8, 'rgb(75, 130, 255)');
    gradient.addColorStop(0.9, 'rgb(71, 154, 255)');
    gradient.addColorStop(1, 'rgb(64, 200, 255)');
    return {
        labels: ["","2013", "2014", "2015", "2016", "2017", "2018", "2019"],
        datasets: [{
            fill: false,
            fillColor: "transparent",
            borderColor: gradient,
            pointHighlightFill: "#fff",
            pointBorderColor: gradient,
            pointColor: "#fff",
            borderWidth:3,
            backgroundColor:"#fff",
            radius:5,
            hoverRadius:5,
            hoverBorderWidth:4,
            pointHoverBackgroundColor:"#fff",
            pointHighlightStroke: gradient,
            data: [5, 0, 15, 0, 5, 0, 10, 0]
        }]
    }
}
export const crmlineChartDataOption = {
    layout: {
        padding: 10
    },
    scales: {
        xAxes: [{
            display: false,
            gridLines: { color: "transparent", drawTicks: false, }
        }],
        yAxes: [{ display: false }]
    },
    legend: { display: false },
    scaleShowLabels: false,
    responsive: true,
    elements: {
        line: {
            tension: 0
        }
    },
    pointDotRadius: 6,
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export const newProjectLineChartData = {
    labels: ["","2013", "2014", "2015", "2016", "2017", "2018", "2019"],
    datasets: [
      {
        fill: false,
        fillColor: "transparent",
        borderColor: secondary,
        pointBorderColor: secondary,
        pointHighlightFill: "#fff",
        pointColor: "#fff",
        pointHighlightStroke: secondary,
        borderWidth:3,
        backgroundColor:"#fff",
        radius:5,
        hoverRadius:5,
        hoverBorderWidth:4,
        pointHoverBackgroundColor:"#fff",
        data: [0, 5, 0, 15, 10, 13, 0, 5]
      }
    ]
}

export const newProjectLineChartOption = {
    layout: {
        padding: 10
    },
    scales: {
        xAxes: [{
            display: false,
            gridLines: { color: "transparent", drawTicks: false, }
        }],
        yAxes: [{ display: false }]
    },
    legend: { display: false },
    scaleShowLabels: false,
    responsive: true,
    elements: {
        line: {
            tension: 0
        }
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}