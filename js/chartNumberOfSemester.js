d3.csv("static/data.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      numberOfSemesterAvg: data.numberOfSemesterAvg
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({

        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['numberOfSemesterAvg']
            },
            type: 'bar',
            names: {
                numberOfSemesterAvg: 'Semester'
            }
        },
      
        axis: {
            x: {
                type: 'category'
            },
            y: {
                label: {text: 'Semesters', position: 'outer-center'}
            }
        },
      
        title: {
            text: 'Average number of semesters for graduation'
        },

        bar: {
            width: { ratio: 0.25}
        },

        legend: { show: false },
      
        bindto: '#chartNumberOfSemester'
    });
  });