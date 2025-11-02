'use client';

import { Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export function LanguageChart() {
  const data = {
    labels: ['English', 'Czech', 'German', 'Dutch', 'Slovak', 'Other'],
    datasets: [
      {
        data: [5072, 3986, 2099, 371, 246, 1828],
        backgroundColor: [
          '#661F29',
          '#0C4537',
          '#883541',
          '#206655',
          '#B34F5E',
          '#378B76',
        ],
        borderWidth: 0,
        borderColor: '#333',
        hoverBackgroundColor: '#188FFF',
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      datalabels: {
        color: '#e3ebee',
        font: {
          size: 11,
        },
        formatter: function (value, context) {
          return context.chart.data.labels?.[context.dataIndex] || '';
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.parsed;
            const sum = (context.chart.data.datasets[0].data as number[]).reduce(
              (a, b) => a + b,
              0
            );
            const percentage = ((value * 100) / sum).toFixed(2) + '%';
            return label + ': ' + percentage;
          },
        },
      },
      legend: { display: false },
      title: {
        display: true,
        text: '30-Day Active Users by Browser Language',
        color: '#0000ff',
        font: {
          size: 14,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export function DeviceChart() {
  const data = {
    labels: ['Mobile', 'Desktop', 'Other'],
    datasets: [
      {
        data: [10384, 3148, 75],
        backgroundColor: ['#60A493', '#E98897', '#8AC7B8'],
        borderWidth: 0,
        borderColor: '#333',
        hoverBackgroundColor: '#188FFF',
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      datalabels: {
        color: '#333',
        font: {
          size: 11,
        },
        formatter: function (value, context) {
          return context.chart.data.labels?.[context.dataIndex] || '';
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.parsed;
            const sum = (context.chart.data.datasets[0].data as number[]).reduce(
              (a, b) => a + b,
              0
            );
            const percentage = ((value * 100) / sum).toFixed(2) + '%';
            return label + ': ' + percentage;
          },
        },
      },
      legend: { display: false },
      title: {
        display: true,
        text: '30-Day Active Users by Device Type',
        color: '#0000ff',
        font: {
          size: 14,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export function ReservationFunnelChart() {
  const data = {
    labels: [
      'Page Viewed',
      'Step 1: Initial',
      'Step 2: Contact Detail',
      'Step 4: Confirmation',
      'Step 5: Payment',
    ],
    datasets: [
      {
        label: 'Percentage of Total Users',
        data: [26.1, 18.19, 4.07, 1.92, 1.36],
        borderColor: '#8AC7B8',
        borderWidth: 4,
        tension: 0.2,
        fill: false,
        pointBackgroundColor: '#8AC7B8',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      datalabels: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + '%';
            }
            return label;
          },
        },
      },
      legend: { display: false },
      title: {
        display: true,
        text: '30-Day Reservation Widget Interactions by Step',
        color: '#0000ff',
        font: {
          size: 14,
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Percentage of Total Users',
          color: '#0000ff',
          font: {
            size: 12,
          },
        },
        grid: {
          color: '#333',
        },
        ticks: {
          callback: function (value) {
            return value + '%';
          },
          color: '#999999',
          font: {
            size: 11,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Step in Reservation Widget Interaction',
          color: '#0000ff',
          font: {
            size: 12,
          },
        },
        grid: {
          color: '#333',
        },
        ticks: {
          color: '#999999',
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

