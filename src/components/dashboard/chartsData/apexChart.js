/*===============================================================
                        Hospital Dashboard
=================================================================*/
import configDB from '../../../data/customizer/config'
const primary = localStorage.getItem('primary_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;

// Apex Bar chart
export const apexBarChart = {
    options: {
        chart: {
            toolbar: { show: false }
        },
        colors: [primary, secondary],
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '25px'
            }
        },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 8, colors: ['transparent'] },
        xaxis: {
            categories: [0], labels: { low: 0, offsetX: 0, show: false },
            axisBorder: { low: 0, offsetX: 0, show: false }
        },
        fill: {
            colors: [primary, secondary],
            type: 'gradient',
            gradient: {
                shade: 'light', type: 'vertical',
                shadeIntensity: 0.3, inverseColors: true,
                opacityFrom: 1, opacityTo: 1, stops: [0, 100]
            }
        },
        tooltip:
        {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        },
        grid:
        {
            borderColor: "#f5f8fd", clipMarkers: false, yaxis: { lines: { show: true } }
        },
        yaxis: { tickAmount: 6, min: 0, max: 120, labels: { style: { color: '#6e7e96' } } },
        responsive: [
          {
           breakpoint: 992,
           options: {
               stroke: {
                   width: 5
               },
               chart: {
                   height: 200
               }
           }
          },
          {
              breakpoint: 480,
              options: {
                  stroke: {
                      width: 1
                  }
              }
          },
          {
              breakpoint: 420,
              options: {
                  stroke: {
                      width: 1
                  }
              }
          }
        ]
    }, 
    series: [{ name: '<b>ICU</b> (intensive care unit)', data: [80, 45, 114, 20, 80, 40, 55, 40] }, {
        name: '<b>OPD</b> (out patient Department)',
        data: [35, 65, 80, 68, 60, 70, 20, 80]
    }]
}

// Apex Small Chart
export const apexSmallChart= {
    options: {
      chart: {
        toolbar: {
            show: false
        },
      },
      colors: [secondary],
      dataLabels: {
        enabled: false
      },
      stroke: {
          curve: 'smooth',
          colors: [secondary],
      },
      xaxis: {
        show: false,
        type: 'datetime',
        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
          show: false,
        },
      },      
      yaxis: {
          show: false,
      },
      fill: {
        colors:[secondary],
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 80, 100]
        }
      },
      legend: {
        markers: {
          strokeColor: '#fb2e63',
          fillColors: '#fb2e63'
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      },
      grid: {
        show: false,
        padding: {
            left: 0,
            right: 0
        }
      }
    },
    series: [{
      name: 'series1',
      data: [15, 10, 14, 22, 18, 18.3, 10]
    }]
}

/*===============================================================
                        Sass Dashboard
=================================================================*/
// Radial Chart
export const apexRadialChart = {
    options: {
        labels: ['Profit', 'Loss'],
        colors: [primary, secondary],
        stroke: {
          lineCap: "round"
        },
        plotOptions: {
          radialBar: {
              hollow: {
                  size: '40%',
              },
              dataLabels: {
              name: {
                  fontSize: '28px',
              },
              value: {
                  fontSize: '20px',
              },
              total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    return 75
                  }
              }
              },
          }
        },
      },
      series: [ 80, 20]
}

// Area Chart
export const areaSpaline = {
    options: {
        chart: {
          toolbar: {
          show: false
          },
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          borderColor: '#f0f7fa',
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          low: 0,
          offsetX: 0,
          offsetY: 0,
          show: false,
          type: 'datetime',
          labels: {
            low: 0,
            offsetX: 0,
            show: false,
          },
          axisBorder: {
          low: 0,
          offsetX: 0,
            show: false,
          },
          axisTicks: {
            show: false,
          },
          categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00", "2018-09-19T10:30:00", "2018-09-19T11:30:00" , "2018-09-19T12:30:00", "2018-09-19T13:30:00", "2018-09-19T14:30:00"],
        },
        yaxis: {
          tickAmount: 6,
          min: 40,
          max: 70,
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        colors: ['#2bd175'],
        fill: {
          type: 'gradient',
          gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.4,
          stops: [0, 95, 100]
          }
        }
      },
    series: [{
        name: 'series1',
        data: [50, 45, 55, 50, 60, 56, 58, 50, 65, 60, 50, 60, 52, 55, 52]
    }]
}

/*===============================================================
                        CRM Dashboard
=================================================================*/

export const apexTotalUsers= {
  options: {
    chart: {
      toolbar: {
        show: false
      }
    },
    colors: ["#8a4eff"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      show: false,
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
        "2018-09-19T07:30:00",
        "2018-09-19T08:30:00",
        "2018-09-19T09:30:00"
      ],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false
    },
    fill: {
      colors: ["#8a4eff"],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.5,
        stops: [0, 90, 100]
      }
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    }
  },
  series: [
    {
      name: "series1",
      data: [10, 25, 15, 16, 10, 14, 28, 18, 19, 16]
    }
  ]
}

export const crmSmallChart= {
    options: {
      chart: {
        type: "area",
        toolbar: {
          show: false
        }
      },
      colors: [secondary],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: [secondary]
      },
      xaxis: {
        show: false,
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-09-19T02:30:00",
          "2018-09-19T03:30:00",
          "2018-09-19T04:30:00",
          "2018-09-19T05:30:00",
          "2018-09-19T06:30:00"
        ],
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false
      },
      fill: {
        colors: [secondary],
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 80, 100]
        }
      },
      legend: {
        markers: {
          strokeColor: "#fb2e63",
          fillColors: "#fb2e63"
        }
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      }
    },
    series: [
      {
        name: "series1",
        data: [15, 10, 14, 22, 18, 18.3, 10]
      }
    ]
}

export const doneProjectChart= {
  options: {
    chart: {
      type: "area",
      toolbar: {
        show: false
      }
    },
    colors: ["#fc6a0d"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      show: false,
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
        "2018-09-19T07:30:00",
        "2018-09-19T08:30:00",
        "2018-09-19T09:30:00"
      ],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false
    },
    fill: {
      colors: ["#fc6a0d"],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.5,
        stops: [0, 90, 100]
      }
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    }
  },
  series: [
    {
      name: "series1",
      data: [15, 10, 18, 17, 26, 18, 22, 18, 19, 16]
    }
  ]
}

/*===============================================================
                        Crypto Dashboard
=================================================================*/

export const bitcoinBtc = {
  options: {
    chart: {
      toolbar: {
        show: false
      }
    },
    colors: [primary],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    xaxis: {
      show: false,
      type: "datetime",
      categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00"],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false
    },
    fill: {
      colors: [primary],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.5,
        stops: [0, 90, 100]
      }
    },
    markers: {
      size: 6,
      strokeWidth: 3,
      strokeColor: primary,
      colors: ['#ffffff'],
      hover: {
          size: 7,
          sizeOffset: 3
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    }
  },
  series: [
    {
      name: "series1",
      data: [15, 15, 16, 15, 16, 16, 17, 17, 17, 19]
    }
  ]
}

export const litecoinLtc = {
  options: {
    chart: {
      toolbar: {
        show: false
      }
    },
    colors: [secondary],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    xaxis: {
      show: false,
      type: "datetime",
      categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00"],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false
    },
    fill: {
      colors: [secondary],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.5,
        stops: [0, 90, 100]
      }
    },
    markers: {
      size: 6,
      strokeWidth: 3,
      strokeColor: secondary,
      colors: ['#ffffff'],
      hover: {
          size: 7,
          sizeOffset: 3
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    }
  },
  series: [
    {
      name: "series1",
      data: [15, 15, 17, 15, 19, 18, 18, 18, 16]
    }
  ]
}

export const ethereumEtc = {
  options: {
    chart: {
      width: 510,
      height: 205,
      type: "area",
      toolbar: {
        show: false
      }
    },
    colors: ["#fb740d"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    xaxis: {
      show: false,
      type: "datetime",
      categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00"],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false
    },
    fill: {
      colors: ["#fb740d"],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.5,
        stops: [0, 90, 100]
      }
    },
    markers: {
      size: 6,
      strokeWidth: 3,
      strokeColor: '#fb740d',
      colors: ['#ffffff'],
      hover: {
          size: 7,
          sizeOffset: 3
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    }
  },
  series: [
    {
      name: "series1",
      data: [15, 15, 17, 15, 19, 18, 18, 16]
    }
  ]
}

export const candleStick = {
  options: {
    chart: {
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      candlestick: {
          colors: {
              upward: primary,
              downward: secondary
          }
      }
    },
    colors: ["#fb740d"],
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      show: false,
      labels: {
          low: 0,
          offsetX: 0,
          show: false,
      },
      axisBorder: {
          low: 0,
          offsetX: 0,
          show: false,
      },
      axisTicks: {
          show: false,
      },
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.2,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
      }
    },
    grid: {
        borderColor: '#f6f9fd',
    }
  },
  series: [{
    data: [{
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
            x: new Date(1538794800000),
            y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
            x: new Date(1538796600000),
            y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
            x: new Date(1538798400000),
            y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6612]
        },
        {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
            x: new Date(1538803800000),
            y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4]
        },
        {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9]
        },
        {
            x: new Date(1538809200000),
            y: [6614.9, 6626.2, 6613.33, 6623.45]
        },
        {
            x: new Date(1538811000000),
            y: [6623.48, 6627, 6618.38, 6620.35]
        },
        {
            x: new Date(1538812800000),
            y: [6615, 6627.40, 6584.10, 6603.00]
        },
        {
            x: new Date(1538814600000),
            y: [6615.53, 6617.93, 6610, 6615.19]
        },
        {
            x: new Date(1538816400000),
            y: [6615.19, 6621.6, 6608.2, 6620]
        },
        {
            x: new Date(1538818200000),
            y: [6619.54, 6625.17, 6614.15, 6620]
        },
        {
            x: new Date(1538820000000),
            y: [6620.33, 6634.15, 6617.24, 6624.61]
        },
        {
            x: new Date(1538821800000),
            y: [6625.95, 6626, 6611.66, 6617.58]
        },
    ]
  }]
}

export const apexMixedCharts = {
  series: [{
      name: 'Column',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30,45]
    }, {
      name: 'Area',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43,25]
    }, {
      name: 'Line',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39,25]
    }],
    options: {
      chart: {
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '30%'
        }
      },
      
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003', '12/01/2003'
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      colors:[secondary, '#fb740d', primary],
      yaxis: {
        title: {
          text: 'Points',
        },
        min: 0
      },
      grid: {
        borderColor: '#f6f9fd',
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    },

}