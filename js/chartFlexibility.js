d3.csv("static/Data.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      flexibilty: data.flexibilty
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
      
        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['flexibilty']
            },
            type: 'bar'
        },
      
        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: 5,
                label: {text: 'Flexibilty', position: 'outer-center'}
            }
        },
      
        title: {
            text: 'Flexibilty in each Study Program'
        },

        bar: {
            width: { ratio: 0.25}
        },

        legend: { show: false },
      
        bindto: '#chartFlexibility'
    });
  });