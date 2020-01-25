d3.csv("static/StudyProgramInformationAI.csv", function(data1) {
    // set the dimensions and margins of the graph
    var width = 350
    height = 350
    margin = 40

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("#chartStudyContentAI")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.append("text").style("text-align", "center").text("Angewandte Informatik").attr("x", -100).style("font-size", "20px")
        .attr("y", 170);

    var data = { creditsLectures: data1.creditsLectures, creditsErgaenzungsbereich: data1.creditsErgaenzungsbereich, creditsBachelorThesis: data1.creditsBachelorThesis, creditsProjects: data1.creditsProjects }
    var sum = parseInt(data1.creditsLectures) + parseInt(data1.creditsErgaenzungsbereich) + parseInt(data1.creditsBachelorThesis) + parseInt(data1.creditsProjects)

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
        .attr('fill', function(d) { return (color(d.data.key)) })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)

    // Now add the annotation. Use the centroid method to get the best coordinates
    svg
        .selectAll('mySlices')
        .data(data_ready)
        .enter()
        .append('text')
        .text(function(d) { return ((parseInt(d.data.value) * 100) / sum).toFixed(2) + '%' })
        .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")"; })
        .style("text-anchor", "middle")
        .style("font-size", 17)
        /* .on("click", function(d) {
            if (d.data.key == "creditsLectures") {
                console.log(d.data.key);
                handleMousehover(d)
            }
        }) */
        .on("click", handleMousehoverAI);

});


function handleMouseOutAI(d, i) {
    d3.csv("static/StudyProgramInformationAI.csv", function(data1) {
        // set the dimensions and margins of the graph
        var width = 350
        height = 350
        margin = 40
        console.log("mouseOut")
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

        var data = { creditsLectures: data1.creditsLectures, creditsErgaenzungsbereich: data1.creditsErgaenzungsbereich, creditsBachelorThesis: data1.creditsBachelorThesis, creditsProjects: data1.creditsProjects }
        var sum = parseInt(data1.creditsLectures) + parseInt(data1.creditsErgaenzungsbereich) + parseInt(data1.creditsBachelorThesis) + parseInt(data1.creditsProjects)

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
            .attr('fill', function(d) { return (color(d.data.key)) })
            .attr("stroke", "black")
            .style("stroke-width", "2px")
            .style("opacity", 0.7)

        // Now add the annotation. Use the centroid method to get the best coordinates
        svg
            .selectAll('mySlices')
            .data(data_ready)
            .enter()
            .append('text')
            .text(function(d) { return ((parseInt(d.data.value) * 100) / sum).toFixed(2) + '%' })
            .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")"; })
            .style("text-anchor", "middle")
            .style("font-size", 17)
            .on("click", handleMousehoverAI);
    });
}

function handleMousehoverAI(d, i) {
    d3.csv("static/StudyProgramInformationAI.csv", function(data1) {
        // set the dimensions and margins of the graph
        var width = 350
        height = 350
        margin = 40

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

        var data = { creditsComputerScience: data1.creditsComputerScience, creditsMath: data1.creditsMath, creditsErgaenzungsbereich: data1.creditsErgaenzungsbereich, creditsBachelorThesis: data1.creditsBachelorThesis, creditsProjects: data1.creditsProjects }
        var sum = parseInt(data1.creditsComputerScience) + parseInt(data1.creditsMath) + parseInt(data1.creditsErgaenzungsbereich) + parseInt(data1.creditsBachelorThesis) + parseInt(data1.creditsProjects)

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
            .attr('fill', function(d) { return (color(d.data.key)) })
            .attr("stroke", "black")
            .style("stroke-width", "2px")
            .style("opacity", 0.7)

        // Now add the annotation. Use the centroid method to get the best coordinates
        svg
            .selectAll('mySlices')
            .data(data_ready)
            .enter()
            .append('text')
            .text(function(d) { return ((parseInt(d.data.value) * 100) / sum).toFixed(2) + '%' })
            .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")"; })
            .style("text-anchor", "middle")
            .style("font-size", 17)
            .on("click", handleMouseOutAI)

    });
}