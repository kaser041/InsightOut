var width = 1000
height = 1000

// select the svg area
var svg = d3.select("#legendsSkills")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

// Handmade legend
svg.append("circle").attr("cx", 620).attr("cy", 50).attr("r", 6).style("fill", "gray")
svg.append("circle").attr("cx", 500).attr("cy", 50).attr("r", 6).style("fill", "darkorange")
svg.append("circle").attr("cx", 780).attr("cy", 50).attr("r", 6).style("fill", "navy")
svg.append("text").attr("x", 550).attr("y", 70).text("Computer Engineering").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 710).attr("y", 70).text("Applied Computer Science").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 480).attr("y", 70).text("Komedia").style("font-size", "15px").attr("alignment-baseline", "middle")