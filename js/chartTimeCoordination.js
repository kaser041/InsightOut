d3.csv("static/data.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      Time_coor: data.Time_coor
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
      
        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['Time_coor']
            },
            type: 'bar'
        },
      
        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: 5,
                label: {text: 'Time Coordination', position: 'outer-center'}
            }
        },
      
        title: {
            text: 'Time Coordination in each Study Program'
        },

        bar: {
            width: { ratio: 0.25}
        },

        legend: { show: false },
      
        bindto: '#chartTimeCoordination'
    });
  });