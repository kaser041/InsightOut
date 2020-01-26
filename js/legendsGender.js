var width = 800
height = 800

// select the svg area
var svg = d3.select("#legendsGender")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

// Handmade legend
svg.append("circle").attr("cx", 550).attr("cy", 50).attr("r", 6).style("fill", "#cb568b")
svg.append("circle").attr("cx", 500).attr("cy", 50).attr("r", 6).style("fill", "#008ed4")
svg.append("text").attr("x", 540).attr("y", 70).text("Female").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 480).attr("y", 70).text("Male").style("font-size", "15px").attr("alignment-baseline", "middle")