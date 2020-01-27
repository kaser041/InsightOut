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
            type: 'bar',
            names: {
                generalHappiness: 'Rating'
            },
            colors: {
                generalHappiness: '#00cadc'
            }
        },

        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: 4.9,
                label: { text: 'Rating', position: 'outer-center' }
            }
        },

        bar: {
            width: { ratio: 0.25 }
        },

        legend: { show: false },

        bindto: '#chartGeneralHappiness'
    });
});