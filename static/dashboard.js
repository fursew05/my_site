/* globals Chart:false */

(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      // x축 데이터터
      labels: {{x_data | tojson}},
      // y축의 데이터들들
      datasets: [{
        // data -> y축 데이터터
        data: {{y_data | tojson}},
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})
const ctx2 = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      // x축 데이터터
      labels: {{x_data | tojson}},
      // y축의 데이터들들
      datasets: [{
        // data -> y축 데이터터
        data: {{y1_data | tojson}},
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})()
