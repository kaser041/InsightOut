d3.csv("static/dataai.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      age18_20: data.age18_20,
      age21_25: data.age21_25,
      age26_30: data.age26_30,
      age30: data.age30
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
      data: {
        json: data,
        keys: {
          x: 'studyProgram',
          value: ['age18_20', 'age21_25', 'age26_30', 'age30']
        },
        type: 'pie',
        names: {
          age18_20: '18-20',
          age21_25: '21-25',
          age26_30: '26-30',
          age30: '>30'
        }
      },
      
      axis: {
        x: {
          type: 'category'
        }
      },
      
      title: {
        text: 'Applied Computer Science'
      },
      
      bindto: '#chartAgeAI'
    });
  });