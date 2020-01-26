d3.csv("static/StudyProgramInformationAI.csv", function(data1) {
    // set the dimensions and margins of the graph
    var width = 350
    height = 350
    margin = 40

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("#chartStudyContentAI")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.append("text").style("text-align", "center").text("Angewandte Informatik").attr("x", -100).style("font-size", "20px")
        .attr("y", 170);

    var data = { creditsLectures: data1.creditsLectures, Ergaenzungsbereich: data1.Ergaenzungsbereich, BachelorThesis: data1.BachelorThesis, Projects: data1.Projects }
    var sum = parseInt(data1.creditsLectures) + parseInt(data1.Ergaenzungsbereich) + parseInt(data1.BachelorThesis) + parseInt(data1.Projects)

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
                case "creditsLectures":
                    color = "#00cadc";
                    break;
                case "Ergaenzungsbereich":
                    color = "#fff753"
                    break;
                case "BachelorThesis":
                    color = "#ff9173"
                    break;
                case "Projects":
                    color = "#9f4792"
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
        /* .on("click", function(d) {
            if (d.data.key == "creditsLectures") {
                console.log(d.data.key);
                handleMousehover(d)
            }
        }) */
        .on("click", function() {
            tooltip.style("visibility", "hidden");
            handleMousehoverAI()
        })
        .on("mouseover", function(d) { return tooltip.style("visibility", "visible").text(d.data.key) })
        .on("mousemove", function() { return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px"); })
        .on("mouseout", function() { return tooltip.style("visibility", "hidden"); });

});


function handleMouseOutAI(d, i) {
    d3.csv("static/StudyProgramInformationAI.csv", function(data1) {
        // set the dimensions and margins of the graph
        var width = 350
        height = 350
        margin = 40

        var tooltip = d3.select("body")
            .append("div")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("visibility", "hidden")
            // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        var radius = Math.min(width, height) / 2 - margin
        d3.select("#chartStudyContentAI").selectAll("svg").remove();
        // append the svg object to the div called 'my_dataviz'
        var svg = d3.select("#chartStudyContentAI")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        svg.append("text").style("text-align", "center").text("Angewandte Informatik").attr("x", -100).style("font-size", "20px")
            .attr("y", 170);

        var data = { creditsLectures: data1.creditsLectures, Ergaenzungsbereich: data1.Ergaenzungsbereich, BachelorThesis: data1.BachelorThesis, Projects: data1.Projects }
        var sum = parseInt(data1.creditsLectures) + parseInt(data1.Ergaenzungsbereich) + parseInt(data1.BachelorThesis) + parseInt(data1.Projects)

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
                    case "creditsLectures":
                        color = "#00cadc";
                        break;
                    case "Ergaenzungsbereich":
                        color = "#fff753"
                        break;
                    case "BachelorThesis":
                        color = "#ff9173"
                        break;
                    case "Projects":
                        color = "#9f4792"
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
            .on("click", function() {
                tooltip.style("visibility", "hidden");
                handleMousehoverAI()
            })
            .on("mouseover", function(d) { return tooltip.style("visibility", "visible").text(d.data.key) })
            .on("mousemove", function() { return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px"); })
            .on("mouseout", function() { return tooltip.style("visibility", "hidden"); });
    });
}

function handleMousehoverAI(d, i) {
    d3.csv("static/StudyProgramInformationAI.csv", function(data1) {
        // set the dimensions and margins of the graph
        var width = 350
        height = 350
        margin = 40

        var tooltip = d3.select("body")
            .append("div")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("visibility", "hidden")

        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        var radius = Math.min(width, height) / 2 - margin
        d3.select("#chartStudyContentAI").selectAll("svg").remove();
        // append the svg object to the div called 'my_dataviz'
        var svg = d3.select("#chartStudyContentAI")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        svg.append("text").style("text-align", "center").text("Angewandte Informatik").attr("x", -100).style("font-size", "20px")
            .attr("y", 170);

        var data = { ComputerScience: data1.ComputerScience, Math: data1.Math, Ergaenzungsbereich: data1.Ergaenzungsbereich, BachelorThesis: data1.BachelorThesis, Projects: data1.Projects }
        var sum = parseInt(data1.ComputerScience) + parseInt(data1.Math) + parseInt(data1.Ergaenzungsbereich) + parseInt(data1.BachelorThesis) + parseInt(data1.Projects)

        // set the color scale
        var color = d3.scaleOrdinal()
            .domain(data)
            .range(d3.schemeSet2);

        // Compute the position of each group on the pie:
        var pie = d3.pie()
            .value(function(d) { return d.value; }).sort(null);
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
                    case "Ergaenzungsbereich":
                        color = "#fff753"
                        break;
                    case "BachelorThesis":
                        color = "#ff9173"
                        break;
                    case "Projects":
                        color = "#9f4792"
                        break;
                    default:
                        color = "#99f8ff"
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
            .on("click", function() {
                tooltip.style("visibility", "hidden");
                handleMouseOutAI()
            })
            .on("mouseover", function(d) { return tooltip.style("visibility", "visible").text(d.data.key) })
            .on("mousemove", function() { return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px"); })
            .on("mouseout", function() { return tooltip.style("visibility", "hidden"); });


    });
}