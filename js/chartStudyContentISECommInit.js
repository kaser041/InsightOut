d3.csv("static/StudyProgramInformationISEComm.csv", function(data1) {
    // set the dimensions and margins of the graph
    var width = 350
    height = 350
    margin = 40

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("#chartStudyContentISEComm")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.append("text").style("text-align", "center").text("Computer Engineering Communication").attr("x", -170).style("font-size", "20px")
        .attr("y", 170);

    var data = { creditsLectures: data1.creditsLectures, creditsBachelorThesis: data1.creditsBachelorThesis, creditsInternship: data1.creditsInternship, creditsErgaenzungsbereich: data1.creditsErgaenzungsbereich, creditsProjects: data1.creditsProjects }
    var sum = parseInt(data1.creditsLectures) + parseInt(data1.creditsBachelorThesis) + parseInt(data1.creditsInternship) + parseInt(data1.creditsErgaenzungsbereich) + parseInt(data1.creditsProjects)

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
        .on("click", handleMousehoverISECom);

});


function handleMouseOutISECom(d, i) {
    d3.csv("static/StudyProgramInformationISEComm.csv", function(data1) {
        // set the dimensions and margins of the graph
        var width = 350
        height = 350
        margin = 40
        console.log("mouseOut")
            // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        var radius = Math.min(width, height) / 2 - margin
        d3.select("#chartStudyContentISEComm").selectAll("svg").remove();
        // append the svg object to the div called 'my_dataviz'
        var svg = d3.select("#chartStudyContentISEComm")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        svg.append("text").style("text-align", "center").text("Computer Engineering Communication").attr("x", -40).style("font-size", "20px")
            .attr("y", 170);

        var data = { creditsLectures: data1.creditsLectures, creditsBachelorThesis: data1.creditsBachelorThesis, creditsInternship: data1.creditsInternship, creditsErgaenzungsbereich: data1.creditsErgaenzungsbereich, creditsProjects: data1.creditsProjects }
        var sum = parseInt(data1.creditsLectures) + parseInt(data1.creditsBachelorThesis) + parseInt(data1.creditsInternship) + parseInt(data1.creditsErgaenzungsbereich) + parseInt(data1.creditsProjects)

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
            .on("click", handleMousehoverISECom);
    });
}

function handleMousehoverISECom(d, i) {
    d3.csv("static/StudyProgramInformationISEComm.csv", function(data1) {
        // set the dimensions and margins of the graph
        var width = 350
        height = 350
        margin = 40

        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        var radius = Math.min(width, height) / 2 - margin
        d3.select("#chartStudyContentISEComm").selectAll("svg").remove();
        // append the svg object to the div called 'my_dataviz'
        var svg = d3.select("#chartStudyContentISEComm")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        svg.append("text").style("text-align", "center").text("Computer Engineering Communication").attr("x", -40).style("font-size", "20px")
            .attr("y", 170);

        var data = { creditsComputerScience: data1.creditsComputerScience, creditsMath: data1.creditsMath, creditsElectricalEngineering: data1.creditsElectricalEngineering, creditsFundamentals: data1.creditsFundamentals, creditsPhysics: data1.creditsPhysics, creditsBusinessEconomics: data1.creditsBusinessEconomics, creditsBachelorThesis: data1.creditsBachelorThesis, creditsInternship: data1.creditsInternship, creditsErgaenzungsbereich: data1.creditsErgaenzungsbereich, creditsProjects: data1.creditsProjects }
        var sum = parseInt(data1.creditsComputerScience) + parseInt(data1.creditsMath) + parseInt(data1.creditsElectricalEngineering) + parseInt(data1.creditsFundamentals) + parseInt(data1.creditsPhysics) + parseInt(data1.creditsBusinessEconomics) + parseInt(data1.creditsBachelorThesis) + parseInt(data1.creditsInternship) + parseInt(data1.creditsErgaenzungsbereich) + parseInt(data1.creditsProjects)

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
            .on("click", handleMouseOutISECom)

    });
}

/*
d3.csv("static/studyprograminformationkomedia.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      creditsLectures: data.creditsLectures,
      creditsErgaenzungsbereich: data.creditsErgaenzungsbereich,
      creditsProjects: data.creditsProjects,
      creditsBachelorThesis: data.creditsBachelorThesis
    };
}).then(function(data) {
    // Generate chart
    var chart = c3.generate({
        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['creditsLectures', 'creditsErgaenzungsbereich', 'creditsProjects', 'creditsBachelorThesis']
            },
            type: 'pie',
            names: {
                creditsLectures: 'Lectures',
                creditsErgaenzungsbereich: 'Ergänzungsbereich',
                creditsProjects: 'Projects',
                creditsBachelorThesis: 'Bachelor Thesis'
            }
        },
        axis: {
            x: {
                type: 'category'
            }
        },
        legend: {
            show: false
        },
        title: {
            text: 'Komedia'
        },
        bindto: '#chartStudyContentKomedia'
    });
  });
  */