var width = 850
height = 850

// select the svg area
var svg = d3.select("#legendsStudyContent")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

// Handmade legend
svg.append("circle").attr("cx", 550).attr("cy", 50).attr("r", 6).style("fill", "#fff753")
svg.append("circle").attr("cx", 500).attr("cy", 50).attr("r", 6).style("fill", "#00ada9")
svg.append("circle").attr("cx", 690).attr("cy", 50).attr("r", 6).style("fill", "#ff9173")
svg.append("circle").attr("cx", 740).attr("cy", 50).attr("r", 6).style("fill", "#9f4792")
svg.append("circle").attr("cx", 790).attr("cy", 50).attr("r", 6).style("fill", "#6bdc85 ")
svg.append("text").attr("x", 540).attr("y", 70).text("Erganzungsbereich").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 670).attr("y", 70).text("Thesis").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 720).attr("y", 70).text("Project").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 770).attr("y", 70).text("Internship").style("font-size", "15px").attr("alignment-baseline", "middle")
svg.append("text").attr("x", 480).attr("y", 70).text("Lectures").style("font-size", "15px").attr("alignment-baseline", "middle")