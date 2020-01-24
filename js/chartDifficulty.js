d3.csv("static/data.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      sposDifficulty: data.sposDifficulty
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
  
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
                max: 4.9,
                label: {text: 'Rating', position: 'outer-center'}
            }
        },
      
        title: {
            text: 'Perceived difficulty to graduate in the standard period of study (1="very difficult", 5="very easy")'
        },

        bar: {
            width: { ratio: 0.25}
        },

        legend: { show: false },
      
        bindto: '#chartDifficulty'
    });
  });