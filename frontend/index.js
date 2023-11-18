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
  
  
  //Gráfico de columnas. Mi 1º gráfico
  var visualization = d3plus
    .viz()
    .container('#viz1qqq')
    .data([
      { year: 1991, name: 'alpha', value: 15 },
      { year: 1992, name: 'alpha', value: 20 },
    ])
    .type('bar')
    .id('name')
    .x('year')
    .y('value')
    .width('80%')
    .height(800)
    .draw();
  
    const svg = d3
  .select('#viz1')
  .attr('viewBox', '0 0 960 600')
  .attr('width', this.width)
  .attr('height', this.height);
this.getUSData().subscribe(us => {
  svg
    .selectAll(undefined)
    .data(this.uRegionPaths)
    .enter()
    .append('path')
    .attr('d', datum => {
      const feature = topojson.merge(
        us,
        us.objects.states.geometries.filter(state => {
          return datum.contains.indexOf(this.lookup[state.id]) > -1;
        })
      );

      return path(feature);
    })
    .attr('fill', d => {
      return this.sampleRegionData[d.name].color;
    })
    .attr('stroke', 'white')
    .attr('stroke-width', 3);
});