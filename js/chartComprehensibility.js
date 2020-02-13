d3.csv("static/Data.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      comprehensibilityExamination: data.comprehensibilityExamination
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
      
        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['comprehensibilityExamination']
            },
            type: 'bar',
            names: {
                comprehensibilityExamination: 'Rating'
            }
        },
      
        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: 5,
                label: {text: 'Exam Comprehensibility', position: 'outer-center'}
            }
        },
      
        title: {
            text: 'Exam Comprehensibility in each Study Program'
        },

        bar: {
            width: { ratio: 0.25}
        },

        legend: { show: false },
      
        bindto: '#chartComprehensibility'
    });
  });