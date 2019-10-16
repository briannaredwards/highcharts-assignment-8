Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apricot', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week by Harry and Shawn'
      }
    },
    series: [{
      name: 'Harry Styles',
      data: [6, 1, 0, 4]
    }, {
      name: 'Shawn Mendes',
      data: [6, 5, 7, 3]
    }]
  });
