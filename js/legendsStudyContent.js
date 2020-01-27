var width = 920
height = 920

// select the svg area
var svg = d3.select("#legendsStudyContent")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

// Handmade legend
svg.append("circle").attr("cx", 550).attr("cy", 50).attr("r", 10).style("fill", "#fff753")
svg.append("circle").attr("cx", 500).attr("cy", 50).attr("r", 10).style("fill", "#00cadc")
svg.append("circle").attr("cx", 690).attr("cy", 50).attr("r", 10).style("fill", "#ff9173")
svg.append("circle").attr("cx", 800).attr("cy", 50).attr("r", 10).style("fill", "#9f4792")
svg.append("circle").attr("cx", 850).attr("cy", 50).attr("r", 10).style("fill", "#6bdc85 ")
svg.append("text").attr("x", 540).attr("y", 70).text("Ergänzungsbereich").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 670).attr("y", 70).text("Bachelor thesis").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 780).attr("y", 70).text("Projects").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 840).attr("y", 70).text("Internship").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 480).attr("y", 70).text("Lectures").style("font-size", "15px").attr("alignment-baseline", "middle")