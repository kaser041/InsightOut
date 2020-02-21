d3.csv("static/DataISE.csv", function(data1) {
    // set the dimensions and margins of the graph
    var width = 350
    height = 350
    margin = 40

    // The radius of the pieplot is half the width or half the height (smallest one). 
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("#chartAgeISE")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.append("text").style("text-align", "center").text("Computer Engineering").attr("x", -100).style("font-size", "20px")
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

    // Now add the annotation. Use the centroid method to get the best coordinates
    svg
        .selectAll('mySlices')
        .data(data_ready)
        .enter()
        .append('text')
        .text(function(d) { if (d.data.value > 0) return ((parseInt(d.data.value) * 100) / sum).toFixed(0) + '%' })
        .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")"; })
        .style("text-anchor", "middle")
        .style("font-size", 17)
});