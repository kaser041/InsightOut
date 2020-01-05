d3.csv("static/datakomedia.csv",(function(t){features=["programming","math","physics","teamWork","projectManagement","givingPresentations","analyticalSkills","structuredWorkingMethods"],data=[{programming:t.programming,math:t.math,physics:t.physics,teamWork:t.teamWork,projectManagement:t.projectManagement,givingPresentations:t.givingPresentations,analyticalSkills:t.analyticalSkills,structuredWorkingMethods:t.structuredWorkingMethods}],console.log(data);let a=d3.select("#chartSkills").append("svg").attr("width",1500).attr("height",1500),e=d3.scaleLinear().domain([0,3]).range([0,150]),r=[0,1,2,3,4];function n(t,a){return{x:300+Math.cos(t)*e(a),y:300-Math.sin(t)*e(a)}}r.forEach(t=>a.append("circle").attr("cx",300).attr("cy",300).attr("fill","none").attr("stroke","gray").attr("r",e(t))),r.forEach(t=>a.append("text").attr("x",305).attr("y",300-e(t)).text(t.toString()));for(var i=0;i<features.length;i++){let t=features[i],e=Math.PI/2+2*Math.PI*i/features.length,r=n(e,4),s=n(e,5);a.append("line").attr("x1",300).attr("y1",300).attr("x2",r.x).attr("y2",r.y).attr("stroke","black"),a.append("text").attr("x",s.x-20).attr("y",s.y).text(t)}let s=d3.line().x(t=>t.x).y(t=>t.y);function o(t){let a=[];for(var e=0;e<features.length;e++){let r=features[e],i=Math.PI/2+2*Math.PI*e/features.length;a.push(n(i,t[r]))}return a}for(i=0;i<data.length;i++){let t="darkorange",e=o(data[i]);a.append("path").datum(e).attr("d",s).attr("stroke-width",3).attr("stroke",t).attr("fill",t).attr("stroke-opacity",1).attr("opacity",.5)}}));