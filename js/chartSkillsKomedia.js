// generate Komedia radar chart as default start
d3.csv("static/DataKomedia.csv", function(data1) {
    d3.csv("static/DataISE.csv", function(data2) {
        // Define the data used in the radar chart
        features = ["Programming", "Math", "Physics", "Psychology", "Statistics", "Business Economics"];
        dataKo = { "Programming": data1.programming, "Math": data1.math, "Physics": data1.physics, "Psychology": data1.psychology, "Statistics": data1.statistics, "Business Economics": data1.businessEconomics };
        let data = []
        data.push(dataKo)

        // Create the svg for the radar chart
        let svg = d3.select("#chartSkills").append("svg")
            .attr("width", 600)
            .attr("height", 600);

        // Define the range and domain
        let radialScale = d3.scaleLinear()
            .domain([0, 4])
            .range([0, 150]);
        let ticks = [0, 1, 2, 3, 4];
        
        // Append chart elements (circle and ticks)
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

        // Helper functions to define fixed coordinates
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

            //draw axis label
            svg.append("text")
                .attr("x", label_coordinate.x - 20)
                .attr("y", label_coordinate.y)
                .text(ft_name);
        }

        let line = d3.line()
            .x(d => d.x)
            .y(d => d.y);

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
            let coordinates = getPathCoordinates(d);

            //draw the path element
            svg.append("path")
                .datum(coordinates)
                .attr("d", line)
                .attr("stroke-width", 3)
                .attr("stroke", "#95f5fd")
                .attr("fill", "#95f5fd")
                .attr("stroke-opacity", 1)
                .attr("opacity", 0.5);
        }
    });
});