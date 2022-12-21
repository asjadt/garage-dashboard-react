import * as Chartist from 'chartist';

/*===============================================================
                        Default Dashboard
=================================================================*/

// rounded cap chart
export const roundedChart = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14', 'Q15', 'Q16'],
    series: [600, 400, 800, 1000, 600, 500, 1100, 1300, 1000, 800, 400, 600, 400, 350, 300]
}
export const roundedChartOptions = {
    distributeSeries: true,
    chartPadding: {
        left: 5,
        bottom: 0,
        right: 0,
        top: 0,
    },
    low: 0,
    axisY: {
        labelInterpolationFnc: function (value) {
            return (value / 1000);
        }
    },
    axisX: {
        showLabel: false,
        showGrid: false,
        offset: 0
    }
}
export const roundedChartListener = {
    draw: function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 8px ; stroke-linecap: round'
            });
        }
    }
}


// Call Chart
export const callChart = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14'],
    series: [
        [100, 300, 500, 700, 600, 400, 300, 100, 300, 500, 700, 600, 400, 100]
    ]
}
export const callChartOptions = {
    scaleShowLabels: false,
    stackBars: true,
    height: 85,
    chartPadding: {
        left: 0,
        bottom: 0,
        right: 0,
        top: 5,
    },
    axisY: {
        showLabel: false,
        showGrid: false,
        offset: 0
    },
    axisX: {
        low: 0,
        showLabel: false,
        showGrid: false,
        offset: 0
    }
}
export const callChartListener = {
    draw: function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 10px ; stroke-linecap: round'
            });
        }
    }
}

// Small Chart
export const smallChart = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
    series: [
        [100, 200, 300, 350, 250]
    ]
}
export const smallChartOptions = {
    stackBars: true, 
    height: 50, 
    axisY: { 
        low: 0, 
        showGrid: false, 
        showLabel: false, 
        offset: 0 
    }, 
    axisX: { 
        showGrid: false, 
        showLabel: false, 
        offset: 0 
    }
}


/*===============================================================
                        Hospital Dashboard
=================================================================*/

// Small Chart
export const operationSmallChart = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [400, 900, 800, 1000, 700, 1200, 300],
        [1000, 500, 600, 400, 700, 200, 1100]
    ]
}
export const  visitorSmallChart = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [400, 600, 900, 800, 1000, 1200, 500],
        [1000, 800, 500, 600, 400, 200, 900]
    ]
}
export const medicineSmallChart = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [1100, 900, 600, 1000, 700, 1200, 300],
        [300, 500, 800, 400, 700, 200, 1100]
    ]
}
export const hospitalSmallChartOptions = {
    stackBars: true, 
    height: 75, 
    axisY: { 
        low: 0, 
        showGrid: false, 
        showLabel: false, 
        offset: 0 
    }, 
    axisX: { 
        showGrid: false, 
        showLabel: false, 
        offset: 0 
    }
}


// Hospital Curve

export const hospitalCurveChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    series: [
      [2, 2.4, 1.5, 2.7, 1, 2.3, 1.2],
      [2.3, 1.8, 2.2, 1.8, 3, 1.5, 2.2]
    ]
}

export const hospitalCurveChartOptions = {
    fullWidth: true,
    height: 180,
    low: 0,
    offset: 0,
    showArea: true,
    showPoint: false,
    chartPadding: {
        left: -22,
        right: 0,
        bottom: -12,
        top: 10
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        scaleMinSpace: 40
    },
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    }
}

/*===============================================================
                        Sass Dashboard
=================================================================*/
export const sassSmallChart1 = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
    series: [
        [200, 400, 300, 100, 250]
    ]
}
export const sassSmallChart2 = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
    series: [
      [200, 400, 300, 100, 250]
    ]
}
export const sassSmallChart3 = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
    series: [
        [200, 400, 300, 100, 250]
    ]
}
export const sassSmallChart4 = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
    series: [
        [200, 400, 300, 100, 250]
    ]
}
export const sassSmallChart5 = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
    series: [
        [200, 400, 300, 100, 250]
    ]
}
export const sassSmallChartOptions = {
    stackBars: true, 
    height: 45, 
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0
      },
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    }
}

export const sassSmallChartListener = {
    draw: function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 2px'
            });
        }
    }
}

export const sassUserChart = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14'],
    series: [
      [300, 600, 500, 800, 500, 400, 650, 650, 650, 900, 300, 600, 300],
      [400, 200, 100, 100, 300, 200, 50, 200, 50, null, 100, 200, 400]
    ]
}
export const sassUserChartOptions = {
    stackBars: true,
    fullWidth: true,
    height: 358,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
      labelInterpolationFnc: function(value) {
      return (value / 1000) + 'k';
      }
    }
}

export const sassUserChartListener = {
    draw: function (ctx) {
        if(ctx.type === 'bar') {
            ctx.element.attr({
              x1: ctx.x1 + 0.05,
              style: 'stroke-width: 10px ; stroke-linecap: round'
            });
          }
    },
    created: function (ctx) {
        var defs = ctx.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'gradient',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(234, 57, 103, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(255, 79, 96, 1)'
        });
    }
}


/*===============================================================
                        CRM Dashboard
=================================================================*/
export const graphRounded = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"],
    series: [[75, 150, 220, 280, 220, 150, 75, 150, 220, 280, 220, 75]]
}

export const graphRoundedOptions = {
    height: 350,
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      limitPointsLabels: false,
      low: 0,
      offset: 0
    }
}

export const graphRoundedListener = {
    draw: function (data) {
        if (data.type === "bar") {
            data.element.attr({
              style: "stroke-width: 26px ; stroke-linecap: round;"
            });
          }
    }
}

export const lineAreaFullChart = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    series: [
        [2, 1, 1.2, 0.8, 2, 1.5, 2.5, 1.3, 3, 2]
    ]
}

export const lineAreaFullChartOptions = {
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
    }),
    height: 195,
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      limitPointsLabels: false,
      low: 0,
      offset: 0
    }
}

export const lineAreaFullChartListener = {
    created: function (data) {
        var defs = data.svg.elem('defs');

    defs.elem('linearGradient', {
        id: 'gradient',
        x1: 1,
        y1: 1,
        x2: 0,
        y2: 1
    }).elem('stop', {
        offset: 0,
        'stop-color': 'rgba(255, 244, 248, 1)'
    }).parent().elem('stop', {
        offset: 0.2,
        'stop-color': 'rgba(255, 101, 141, 1)'
    }).parent().elem('stop', {
        offset: 1,
        'stop-color': 'rgba(255, 41, 96, 1)'
    });
    }
}

/*===============================================================
                        Common Options
=================================================================*/
export const smallChartListener = {
    draw: function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 3px'
            });
        }
    }
}
