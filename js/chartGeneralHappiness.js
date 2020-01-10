d3.csv("static/data.csv", function(data) {
    return {
        // Required attributes
        studyProgram: data.studyProgram,
        generalHappiness: data.generalHappiness
    };
}).then(function(data) {

    // Generate chart
    var chart = c3.generate({

        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['generalHappiness']
            },
            type: 'bar'
        },

        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: 5,
                label: { text: 'General Happiness', position: 'outer-center' }
            }
        },

        title: {
            text: 'General Happiness in each Study Program'
        },

        bar: {
            width: { ratio: 0.25 }
        },

        legend: { show: false },

        bindto: '#chartGeneralHappiness'
    });
});