d3.csv("static/data.csv",(function(t){return{studyProgram:t.studyProgram,preparationJob:t.preparationJob}})).then((function(t){c3.generate({data:{json:t,keys:{x:"studyProgram",value:["preparationJob"]},type:"bar"},axis:{x:{type:"category"},y:{max:5,label:{text:"Job Preperation",position:"outer-center"}}},title:{text:"Job Preperation in each Study Program"},bar:{width:{ratio:.25}},legend:{show:!1},bindto:"#chartPreperationForTheJob"})}));