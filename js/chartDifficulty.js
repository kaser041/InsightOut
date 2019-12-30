d3.csv("static/data.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      sposDifficulty: data.sposDifficulty
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
                value: ['sposDifficulty']
            },
            type: 'bar'
        },
      
        axis: {
            x: {
                type: 'category'
            },
            y: {
                min: 0,
                max: 5,
                label: {text: 'Difficulty', position: 'outer-center'}
            }
        },
      
        title: {
            text: 'Average perceived difficulty to graduate in the standard period of study in each Study Program'
        },

        bar: {
            width: { ratio: 0.25}
        },

        legend: { show: false },
      
        bindto: '#chartDifficulty'
    });
  });