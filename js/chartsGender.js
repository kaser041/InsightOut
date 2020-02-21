function generateGnderChart(checkBoxId) {
    var checkbox = document.getElementById(checkBoxId);
    switch (checkBoxId) {
        case "komediaChx":
            if (checkbox.checked) {
                d3.csv("static/DataKomedia.csv", function(data1) {
                    // set the dimensions and margins of the graph
                    var width = 350
                    height = 350
                    margin = 40

                    // The radius of the pieplot is half the width or half the height (smallest one). 
                    var radius = Math.min(width, height) / 2 - margin

                    // append the svg object to the div called 'my_dataviz'
                    var svg = d3.select("#chartGenderKomedia")
                        .append("svg")
                        .attr("width", width)
                        .attr("height", height)
                        .append("g")
                        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                    svg.append("text").style("text-align", "center").text("Komedia").attr("x", -40).style("font-size", "20px")
                        .attr("y", 170);

                    var data = { Male: data1.male, Female: data1.female }
                    var sum = parseInt(data1.male) + parseInt(data1.female)

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
            } else {
                console.log("ELSE")
                d3.select("#chartGenderKomedia").selectAll("svg").remove();
            }
            break;
        case "iseChx":
            if (checkbox.checked) {
                d3.csv("static/DataISE.csv", function(data1) {
                    // set the dimensions and margins of the graph
                    var width = 350
                    height = 350
                    margin = 40

                    // The radius of the pieplot is half the width or half the height (smallest one). 
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
            } else {
                d3.select("#chartGenderISE").selectAll("svg").remove();
            }
            break;
        case "aiChx":
            if (checkbox.checked) {
                d3.csv("static/DataAI.csv", function(data1) {
                    // set the dimensions and margins of the graph
                    var width = 350
                    height = 350
                    margin = 40

                    // The radius of the pieplot is half the width or half the height (smallest one). 
                    var radius = Math.min(width, height) / 2 - margin

                    // append the svg object to the div called 'my_dataviz'
                    var svg = d3.select("#chartGenderAI")
                        .append("svg")
                        .attr("width", width)
                        .attr("height", height)
                        .append("g")
                        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                    svg.append("text").style("text-align", "center").text("Applied Computer Science").attr("x", -100).style("font-size", "20px")
                        .attr("y", 170);

                    var data = { Male: data1.male, Female: data1.female }
                    var sum = parseInt(data1.male) + parseInt(data1.female)

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
            } else {
                d3.select("#chartGenderAI").selectAll("svg").remove();
            }
            break;

    }
}