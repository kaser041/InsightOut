d3.csv("static/data.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      Compr_examina: data.Compr_examina
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
      
        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['Compr_examina']
            },
            type: 'bar'
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