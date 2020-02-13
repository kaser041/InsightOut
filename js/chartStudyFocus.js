d3.csv("static/Data.csv", function (data) {
    return {
        // Required attributes
        studyProgram: data.studyProgram,
        studyFocus: data.studyFocus
    };
}).then(function (data) {

    // Generate chart
    var chart = c3.generate({

        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['studyFocus']
            },
            type: 'bar',
            names: {
                studyFocus: 'Rating'
            }
        },


        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: 5,
                label: { text: 'Study Focus', position: 'outer-center' }
            }
        },

        title: {
            text: 'Study Focus in each Study Program'
        },

        bar: {
            width: { ratio: 0.25 }
        },

        legend: { show: false },

        bindto: '#chartStudyFocus'
    });
});