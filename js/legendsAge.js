var width = 800
height = 800

// select the svg area
var svg = d3.select("#legendsAge")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

// Handmade legend
svg.append("circle").attr("cx", 550).attr("cy", 50).attr("r", 6).style("fill", "#fc8d62")
svg.append("circle").attr("cx", 500).attr("cy", 50).attr("r", 6).style("fill", "#66c2a5")
svg.append("circle").attr("cx", 600).attr("cy", 50).attr("r", 6).style("fill", "#8da0cb")
svg.append("circle").attr("cx", 650).attr("cy", 50).attr("r", 6).style("fill", "#e78ac3")
svg.append("text").attr("x", 530).attr("y", 70).text("21-25").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 580).attr("y", 70).text("26-30").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 640).attr("y", 70).text(">30").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 480).attr("y", 70).text("18-20").style("font-size", "15px").attr("alignment-baseline", "middle")