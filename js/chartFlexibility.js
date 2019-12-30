d3.csv("static/data.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      Flexibilty: data.Flexibilty
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
      
        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['Flexibilty']
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