d3.csv("static/data.csv", function(data) {
    return {
        // Required attributes
        studyProgram: data.studyProgram,
        upToDateness: data.upToDateness
    };
}).then(function(data) {
    // Generate chart
    var chart = c3.generate({

        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['upToDateness']
            },
            type: 'bar'
        },


        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: 5,
                label: { text: 'Up-to-dateness', position: 'outer-center' }
            }
        },

        title: {
            text: 'Up-to-dateness in each Study Program'
        },

        bar: {
            width: { ratio: 0.25 }
        },

        legend: { show: false },

        bindto: '#chartUpToDateness'
    });
});