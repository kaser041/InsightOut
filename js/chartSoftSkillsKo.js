d3.csv("static/DataKomedia.csv", function(data1) {
    d3.select("#chartSoftSkills").selectAll("svg").remove();
    features = ["Teamwork", "Project Management", "Giving Presentations", "Analytical Skills", "Structured Working Methods"];
    dataKo = { "Teamwork": data1.teamWork, "Project Management": data1.projectManagement, "Giving Presentations": data1.givingPresentations, "Analytical Skills": data1.analyticalSkills, "Structured Working Methods": data1.structuredWorkingMethods };
    let data = []

    if (document.getElementById("skillsKomediaChx2").checked) data.push(dataKo)
    let svg = d3.select("#chartSoftSkills").append("svg")
        .attr("width", 800)
        .attr("height", 800);

    let radialScale = d3.scaleLinear()
        .domain([0, 4])
        .range([0, 150]);
    let ticks = [0, 1, 2, 3, 4];

    ticks.forEach(t =>
        svg.append("circle")
        .attr("cx", 300)
        .attr("cy", 300)
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("r", radialScale(t))
    );

    ticks.forEach(t =>
        svg.append("text")
        .attr("x", 305)
        .attr("y", 300 - radialScale(t))
        .text(t.toString())
    );

    function angleToCoordinate(angle, value) {
        let x = Math.cos(angle) * radialScale(value);
        let y = Math.sin(angle) * radialScale(value);
        return { "x": 300 + x, "y": 300 - y };
    }

    for (var i = 0; i < features.length; i++) {
        let ft_name = features[i];
        let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
        let line_coordinate = angleToCoordinate(angle, 4);
        let label_coordinate = angleToCoordinate(angle, 5);

        //draw axis line
        svg.append("line")
            .attr("x1", 300)
            .attr("y1", 300)
            .attr("x2", line_coordinate.x)
            .attr("y2", line_coordinate.y)
            .attr("stroke", "black")

        if (ft_name == "Project Management") {
            svg.append("text")
                .attr("x", label_coordinate.x - 110)
                .attr("y", label_coordinate.y)
                .text(ft_name);
        } else if (ft_name == "Giving Presentations") {
            svg.append("text")
                .attr("x", label_coordinate.x - 110)
                .attr("y", label_coordinate.y)
                .text(ft_name);
        } else {
            //draw axis label
            svg.append("text")
                .attr("x", label_coordinate.x - 30)
                .attr("y", label_coordinate.y + 10)
                .text(ft_name);
        }
    }

    let line = d3.line()
        .x(d => d.x)
        .y(d => d.y);

    let colors = ["darkorange", "gray"];

    function getPathCoordinates(data_point) {
        let coordinates = [];
        for (var i = 0; i < features.length; i++) {
            let ft_name = features[i];
            let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
            coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
        }
        return coordinates;
    }

    for (var i = 0; i < data.length; i++) {
        let d = data[i];
        let color = colors[i];
        let coordinates = getPathCoordinates(d);

        //draw the path element
        svg.append("path")
            .datum(coordinates)
            .attr("d", line)
            .attr("stroke-width", 3)
            .attr("stroke", color)
            .attr("fill", color)
            .attr("stroke-opacity", 1)
            .attr("opacity", 0.5);
    }
});