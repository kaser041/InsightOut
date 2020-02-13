d3.csv("static/Data.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      help: data.help
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
      
        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['help']
            },
            type: 'bar',
            names: {
                help: 'Rating'
            }
        },
      
        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: 5,
                label: {text: 'Asking For Help', position: 'outer-center'}
            }
        },
      
        title: {
            text: 'Asking For Help in each Study Program'
        },

        bar: {
            width: { ratio: 0.25}
        },

        legend: { show: false },
      
        bindto: '#chartAskingForHelp'
    });
  });