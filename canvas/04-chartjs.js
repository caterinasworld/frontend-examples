//
// Setting up a Horizontal Bar Chart
//
new Chart(document.getElementById('bar-chart'), {
  type: 'horizontalBar',
  data: {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'Numbers',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
        data: [250, 300, 400, 150, 600],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Title of Horizontal Bar Chart',
      fontSize: 30,
    },
  },
});

//
// Setting up the Pie Chart
//
new Chart(document.getElementById('pie-chart'), {
  type: 'pie',
  data: {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'Numbers',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
        data: [500, 300, 400, 200, 600],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Title of Pie Chart',
      fontSize: 30,
    },
  },
});

//
// Setting up a Bar Chart
//
let barChart = document.getElementById('grouped-bar-chart');
new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['1920', '1950', '1980', '2010'],
    datasets: [
      {
        label: 'Group 1',
        backgroundColor: 'rgb(255, 99, 132)',
        data: [32, 231, 300, 750],
      },
      {
        label: 'Group 2',
        backgroundColor: 'rgb(255, 205, 86)',
        data: [54, 231, 400, 100],
      },
      {
        label: 'Group 3',
        backgroundColor: 'rgb(201, 203, 207)',
        data: [45, 123, 740, 110],
      },
      {
        label: 'Group 4',
        backgroundColor: 'rgb(54, 162, 235)',
        data: [67, 234, 748, 1250],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Title of Bar Chart',
      fontSize: 30,
    },
  },
});
