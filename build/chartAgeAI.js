d3.csv("static/dataai.csv",(function(e){return{studyProgram:e.studyProgram,age18_20:e.age18_20,age21_25:e.age21_25,age26_30:e.age26_30,age30:e.age30}})).then((function(e){c3.generate({data:{json:e,keys:{x:"studyProgram",value:["age18_20","age21_25","age26_30","age30"]},type:"pie",names:{age18_20:"18-20",age21_25:"21-25",age26_30:"26-30",age30:">30"}},axis:{x:{type:"category"}},title:{text:"Applied Computer Science"},bindto:"#chartAgeAI"})}));