// Import stylesheets
import './style.css';

const clinical_data =
  'https://raw.githubusercontent.com/sanchezis/08MBID-Visualizacion-de-Datos/main/data/clinical-sentinel-laboratory-influenza-and-other-respiratory-virus-surveillance-data-by-region-and-influenza-season.csv';

  
var data = [
  { year: 1991, name: 'alpha', value: 15 },
  { year: 1991, name: 'beta', value: 10 },
  { year: 1991, name: 'gamma', value: 5 },
  { year: 1991, name: 'delta', value: 50 },
  { year: 1992, name: 'alpha', value: 20 },
  { year: 1992, name: 'beta', value: 10 },
  { year: 1992, name: 'gamma', value: 10 },
  { year: 1992, name: 'delta', value: 43 },
  { year: 1993, name: 'alpha', value: 30 },
  { year: 1993, name: 'beta', value: 40 },
  { year: 1993, name: 'gamma', value: 20 },
  { year: 1993, name: 'delta', value: 17 },
  { year: 1994, name: 'alpha', value: 60 },
  { year: 1994, name: 'beta', value: 60 },
  { year: 1994, name: 'gamma', value: 25 },
  { year: 1994, name: 'delta', value: 32 },
];

// Sample data
var data = [10, 25, 15, 30, 20];

// Set up SVG dimensions
var width = 400;
var height = 200;

// Create an SVG container
var svg = d3
  .select('#viz1')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

// Create scales
var xScale = d3
  .scaleBand()
  .domain(d3.range(data.length))
  .range([0, width])
  .padding(0.1);

var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .range([height, 0]);

// Create bars
svg
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', function (d, i) {
    return xScale(i);
  })
  .attr('y', function (d) {
    return yScale(d);
  })
  .attr('width', xScale.bandwidth())
  .attr('height', function (d) {
    return height - yScale(d);
  })
  .attr('fill', 'steelblue');

// Create x-axis
var xAxis = d3.axisBottom(xScale);
svg
  .append('g')
  .attr('transform', 'translate(0,' + height + ')')
  .call(xAxis);

// Create y-axis
var yAxis = d3.axisLeft(yScale);
svg.append('g').call(yAxis);









<iframe
src=""
title="Comparativa del precio del seguro médico"
aria-label="Diagrama BoxPlot"
id="fig1_boxplot"
scrolling="no"
frameborder="0"
style="width: 0; min-width: 100% !important; border: none"
height="640"
data-external="1"
></iframe>
<script>
  fetch('https://raw.githubusercontent.com/sanchezis/sanchezis.github.io/master/fig1_boxplot.html', {
      mode: 'cors',
      headers: {
          'Access-Control-Allow-Origin':'*'
      }
      })
    .then(function(response) {
      console.log(response.xml())
      return response.json();
    }).then(function(data) {
      iframe = document.getElementById('github-iframe');
      alert(data["html"]);
      iframe.src = 'data:text/html,' + encodeURIComponent(data['content']);
    });

</script>












  // Fetch GeoJSON data
  fetch("https://raw.githubusercontent.com/Esri/gis-tools-for-hadoop/master/samples/data/counties-data/california-counties.json")
    .then(response => response.json())
    .then(data => {
      // Extract GeoJSON features
      var geojsonFeatures = data.features;

      // Extract feature properties (you may need to adjust this based on your GeoJSON structure)
      var featureProperties = geojsonFeatures.map(feature => feature.attributes);

      // Extract feature geometry
      var featureGeometry = geojsonFeatures.map(feature => feature.geometry.rings);

      // Create a choropleth map
      var map = Plotly.newPlot('map', [{
        type: 'choroplethmapbox',
        geojson: data,
        locations: featureProperties.map(properties => properties.yourLocationProperty), // Replace with your GeoJSON property
        z: featureProperties.map(properties => properties.yourValueProperty), // Replace with your GeoJSON property
        colorscale: 'Viridis', // You can choose other color scales
        colorbar: { title: 'Número de Positivos Clínicos' }, // Customize color bar
      }], {
        mapbox: { style: 'mapbox://styles/mapbox/light-v9', center: 
                 { lon: -119, lat: 37.4 }, 
                 zoom: 10 
                }, // Adjust center and zoom as needed
      });

    })
    .catch(error => console.error('Error fetching GeoJSON:', error));




















  // Fetch GeoJSON data
  fetch("https://raw.githubusercontent.com/Esri/gis-tools-for-hadoop/master/samples/data/counties-data/california-counties.json")
    .then(response => response.json())
    .then(data => {
      // Extract GeoJSON features
        console.log('OK');
    
    
    
var map = L.map('map').setView([-119, 37.4], 10);
var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    
// L.geoJson(data).addTo(map);
    
    
    
    
    
    
    
    })
    .catch(error => console.error('Error fetching GeoJSON:', error));










  // Fetch GeoJSON data
  fetch("https://raw.githubusercontent.com/Esri/gis-tools-for-hadoop/master/samples/data/counties-data/california-counties.json")
    .then(response => response.json())
    .then(data => {
      // Extract GeoJSON features
      var geojsonFeatures = data.features;
      // Extract feature properties (you may need to adjust this based on your GeoJSON structure)
      var featureProperties = geojsonFeatures.map(feature => feature.attributes);
      // Extract feature geometry
      var featureGeometry = geojsonFeatures.map(feature => feature.geometry.rings);
    
    
var map = L.map('map').setView([-119, 37.4], 10);
var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    console.log('OK');

    
L.geoJson(featureGeometry).addTo(map);
    
    
    
    })
    .catch(error => console.error('Error fetching GeoJSON:', error));



























