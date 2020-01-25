var width = 800
height = 800

// select the svg area
var svg = d3.select("#legendsStudyContent")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

// Handmade legend
svg.append("circle").attr("cx", 550).attr("cy", 50).attr("r", 6).style("fill", "#fc8d62")
svg.append("circle").attr("cx", 500).attr("cy", 50).attr("r", 6).style("fill", "#66c2a5")
svg.append("circle").attr("cx", 690).attr("cy", 50).attr("r", 6).style("fill", "#8da0cb")
svg.append("circle").attr("cx", 740).attr("cy", 50).attr("r", 6).style("fill", "#e78ac3")
svg.append("text").attr("x", 540).attr("y", 70).text("Erganzungsbereich").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 670).attr("y", 70).text("Thesis").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 720).attr("y", 70).text("Project").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 480).attr("y", 70).text("Lectures").style("font-size", "15px").attr("alignment-baseline", "middle")