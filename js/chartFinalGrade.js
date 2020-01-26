d3.csv("static/data.csv", function(data) {
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
            type: 'scatter',
            names: {
                finalGrade_avg: 'Grade'
            }
        },

        point: {
            r: 5
        },

        axis: {
            x: {
                type: 'category'
            },
            y: {
                label: { text: 'Grade', position: 'outer-center' }
            }
        },

        title: {
            text: 'Average final grade of graduated bachelor students'
        },

        legend: { show: false },

        bindto: '#chartFinalGrade'
    });
});