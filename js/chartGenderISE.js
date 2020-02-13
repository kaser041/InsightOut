/*
d3.csv("static/dataise.csv", function (data) {
  return {
    // Required attributes
    studyProgram: data.studyProgram,
    Male: data.male,
    Female: data.female
  };
}).then(function (data) {
  
  // Generate chart
  var chart = c3.generate({
    data: {
      json: data,
      keys: {
        x: 'studyProgram',
        value: ['Male', 'Female']
      },
      type: 'pie'
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
      text: 'Computer Engineering'
    },
    
    bindto: '#chartGenderISE'
  });
  */

d3.csv("static/DataISE.csv", function(data1) {
    // set the dimensions and margins of the graph
    var width = 350
    height = 350
    margin = 40

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("#chartGenderISE")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.append("text").style("text-align", "center").text("Computer Engineering").attr("x", -100).style("font-size", "20px")
        .attr("y", 170);

    var data = { Male: data1.male, Female: data1.female }
    var sum = parseInt(data1.male) + parseInt(data1.female)
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
                case "Male":
                    color = "#008ed4";
                    break;
                case "Female":
                    color = "#cb568b"
                    break;
            }
            return color
        })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)

    // Now add the annotation. Use the centroid method to get the best coordinates
    svg
        .selectAll('mySlices')
        .data(data_ready)
        .enter()
        .append('text')
        .text(function(d) { return ((parseInt(d.data.value) * 100) / sum).toFixed(0) + '%' })
        .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")"; })
        .style("text-anchor", "middle")
        .style("font-size", 17)
});