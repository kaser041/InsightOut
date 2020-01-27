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
            type: 'bar',
            names: {
                sposDifficulty: 'Difficulty'
            },
            colors: {
                sposDifficulty: '#00cadc'
            }
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
            text: 'Average perceived difficulty to graduate in the standard period of study (1 = "very easy", 5 = "very difficult")'
        },

        bar: {
            width: { ratio: 0.25}
        },

        legend: { show: false },
      
        bindto: '#chartDifficulty'
    });
  });