$(function () {
  Highcharts.chart('container', {
    title: {
      text: 'Gastós de administración por año'
    },
    subtitle: {
      text: 'BiReport'
    },
    yAxis: {
      title: {
        text: 'Ventas'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2017
      }
    },
    series: [{
      name: 'Ventas',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
      name: 'Gastós de ventas',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
      name: 'Costo de ventas',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  });
});