d3.csv("static/data.csv", function (data) {
    return {
        // Required attributes
        studyProgram: data.studyProgram,
        timeCoordination: data.timeCoordination
    };
}).then(function (data) {

    // Generate chart
    var chart = c3.generate({

        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['timeCoordination']
            },
            type: 'bar',
            names: {
                timeCoordination: 'Rating'
            }
        },


        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: 5,
                label: { text: 'Rating', position: 'outer-center' }
            }
        },

        title: {
            text: 'Time coordination of the lectures (eg. overlaps)'
        },

        bar: {
            width: { ratio: 0.25 }
        },

        legend: { show: false },

        bindto: '#chartOrganization'
    });
});