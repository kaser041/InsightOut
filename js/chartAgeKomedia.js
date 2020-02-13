d3.csv("static/DataKomedia.csv", function(data1) {
    // set the dimensions and margins of the graph
    var width = 350
    height = 350
    margin = 40

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("#chartAgeKomedia")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.append("text").style("text-align", "center").text("Komedia").attr("x", -40).style("font-size", "20px")
        .attr("y", 170);

    var data = { age18_20: data1.age18_20, age21_25: data1.age21_25, age26_30: data1.age26_30, age30: data1.age30 }
    var sum = parseInt(data1.age18_20) + parseInt(data1.age21_25) + parseInt(data1.age26_30) + parseInt(data1.age30)

    // set the color scale
    var color = d3.scaleOrdinal()
        .domain(data)
        .range(d3.schemeSet2);

    // Compute the position of each group on the pie:
    var pie = d3.pie()
        .value(function(d) { return d.value; })
    var data_ready = pie(d3.entries(data))
        // Now I know that group A goes from 0 degrees to x degrees and so on.

    // shape helper to build arcs:
    var arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(radius)

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
        .selectAll('mySlices')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', arcGenerator)
        .attr('fill', function(d) {
            switch (d.data.key) {
                case "age18_20":
                    color = "#00cadc";
                    break;
                case "age21_25":
                    color = "#ff9173"
                    break;
                case "age26_30":
                    color = "#2ac69d"
                    break;
                case "age30":
                    color = "#fff753"
                    break;
            }
            return color
        })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)

    svg
        .selectAll('mySlices')
        .data(data_ready)
        .enter()
        .append('text')
        .text(function(d) { if (d.data.value > 10) return ((parseInt(d.data.value) * 100) / sum).toFixed(0) + '%' })
        .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")"; })
        .style("text-anchor", "middle")
        .style("font-size", 17)
});





/* d3.csv("static/datakomedia.csv", function (data) {
  return {
    // Required attributes
    studyProgram: data.studyProgram,
    age18_20: data.age18_20,
    age21_25: data.age21_25,
    age26_30: data.age26_30,
    age30: data.age30
  };
}).then(function (data) {

  // Generate chart
  var chart = c3.generate({
    data: {
      json: data,
      keys: {
        x: 'studyProgram',
        value: ['age18_20', 'age21_25', 'age26_30', 'age30']
      },
      type: 'pie',
      names: {
        age18_20: '18-20',
        age21_25: '21-25',
        age26_30: '26-30',
        age30: '>30'
      }
    },

    axis: {
      x: {
        type: 'category'
      }
    },

    legend: {
      position: 'right'
    },
    title: {
      text: 'Komedia'
    },

    bindto: '#chartAgeKomedia'
  });
}); */