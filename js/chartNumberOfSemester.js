d3.csv("static/data.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      numberOfSemesterAvg: data.numberOfSemesterAvg
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
        size: {
            height: 240,
            width: 700,
        },
      
        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['numberOfSemesterAvg']
            },
            type: 'bar'
        },
      
        axis: {
            x: {
                type: 'category'
            },
            y: {
                min: 0,
                label: {text: 'Semester', position: 'outer-center'}
            }
        },
      
        title: {
            text: 'Average number of semester for graduation in each study program'
        },

        bar: {
            width: { ratio: 0.25}
        },

        legend: { show: false },
      
        bindto: '#chartNumberOfSemester'
    });
  });