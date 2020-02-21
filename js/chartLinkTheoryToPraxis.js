d3.csv("static/Data.csv", function(data) {
    return {
        // Required attributes
        studyProgram: data.studyProgram,
        linkingTheoryPractice: data.linkingTheoryPractice
    };
}).then(function(data) {

    // Generate chart
    var chart = c3.generate({

        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['linkingTheoryPractice']
            },
            type: 'bar',
            names: {
                linkingTheoryPractice: 'Rating'
            },
            colors: {
                linkingTheoryPractice: '#00cadc'
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

        title: {
            text: 'Linking theory and practice'
        },

        bar: {
            width: { ratio: 0.25 }
        },

        legend: { show: false },

        bindto: '#chartContent'
    });
});