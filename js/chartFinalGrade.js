d3.csv("static/Data.csv", function(data) {
    return {
        // Required attributes
        studyProgram: data.studyProgram,
        finalGrade_avg: data.finalGrade_avg
    };
}).then(function(data) {

    // Generate chart
    var chart = c3.generate({

        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['finalGrade_avg']
            },
            type: 'bar',
            names: {
                finalGrade_avg: 'Grade'
            },
            colors: {
                finalGrade_avg: '#00cadc'
            }
        },

        axis: {
            x: {
                type: 'category'
            },
            y: {
                label: { text: 'Grade', position: 'outer-center' },
                max: 2.9,
            }
        },

        title: {
            text: 'Average final grade of graduated bachelor students'
        },

        bar: {
            width: { ratio: 0.25}
        },

        legend: { show: false },

        bindto: '#chartFinalGrade'
    });
});