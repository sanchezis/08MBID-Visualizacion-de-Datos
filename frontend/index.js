// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

const clinical_data =
  'https://raw.githubusercontent.com/sanchezis/08MBID-Visualizacion-de-Datos/main/data/clinical-sentinel-laboratory-influenza-and-other-respiratory-virus-surveillance-data-by-region-and-influenza-season.csv';

const dataa = [
  {
    type: 'scatterpolar',
    r: [24, 14, 6, 0, 0, 0, 0, 0, 0, 0, 1, 16, 24],
    theta: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
      'Enero',
    ],
    fill: 'toself',
    name: 'Influenza A',
  },
  {
    type: 'scatterpolar',
    r: [288, 667, 450, 38, 10, 2, 1, 1, 1, 12, 72, 404, 288],
    theta: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
      'Enero',
    ],
    fill: 'toself',
    name: 'RSV',
  },
];

var layouta = {
  title: {
    text: '2010',
    font: {
      family: 'Courier New, monospace',
      size: 24,
    },
  },
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 650],
    },
  },
  showlegend: true,
  autosize: false,
  width: 700,
  height: 500,
};

const datab = [
  {
    type: 'scatterpolar',
    r: [641.0, 611.0, 214.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    theta: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
      'Enero',
    ],
    fill: 'toself',
    name: 'Influenza A',
  },
  {
    type: 'scatterpolar',
    r: [366.0, 373.0, 155.0, 7.0, 1.0, 0.0, 0.0, 0.0, 0.0],
    theta: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
      'Enero',
    ],
    fill: 'toself',
    name: 'RSV',
  },
];

var layoutb = {
  title: {
    text: '2020',
    font: {
      family: 'Courier New, monospace',
      size: 24,
    },
  },
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 700],
    },
  },
  showlegend: true,
  autosize: false,
  width: 700,
  height: 500,
};

Plotly.newPlot('viz1', dataa, layouta);
Plotly.newPlot('viz2', datab, layoutb);

//Plotly.newPlot('viz3', dataa, layouta);
//Plotly.newPlot('viz4', datab, layoutb);
//Plotly.newPlot('viz5', dataa, layouta);
//Plotly.newPlot('viz6', datab, layoutb);
//Plotly.newPlot('viz7', dataa, layouta);
//Plotly.newPlot('viz8', datab, layoutb);
//Plotly.newPlot('viz9', dataa, layouta);
//Plotly.newPlot('viz10', datab, layoutb);
//Plotly.newPlot('viz11', dataa, layouta);
