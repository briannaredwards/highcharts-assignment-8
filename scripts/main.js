Highcharts.chart('container1', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'American Time Consumption in 2018'
    },
    xAxis: {
      categories: ['Working', 'Leisure and Sports', 'Watching TV', 'Household Activities', 'Socializing', 'Food Prep and Cleanup']
    },
    yAxis: {
      title: {
        text: 'Hours Spent on Activity'
      }
    },
    series: [{
      name: 'Hours Spent on Activity',
      data: [7.62, 5.27, 2.84, 1.78, 0.64, 0.59]
  }]
});

  Highcharts.chart('container2', {
      title: {
          text: 'Top American Time Consumption, 2008-2018'
      },

      yAxis: {
          title: {
              text: 'Hours'
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
              pointStart: 2008
          }
      },

      series: [{
          name: 'Working',
          data: [7.59, 7.48, 7.50, 7.64, 7.65, 7.58, 7.75, 7.60, 7.63, 7.69, 7.62]
      }, {
          name: 'Leisure and Sports',
          data: [5.18, 5.25, 5.18, 5.21, 5.37, 5.26, 5.30, 5.21, 5.13, 5.24, 5.27]
      }, {
          name: 'Watching TV',
          data: [2.77, 2.82, 2.73, 2.75, 2.83, 2.77, 2.82, 2.78, 2.73, 2.77, 2.84]
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
