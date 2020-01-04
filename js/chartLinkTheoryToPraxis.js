d3.csv("static/data.csv", function (data) {
    return {
        // Required attributes
        studyProgram: data.studyProgram,
        linkingTheoryPractice: data.linkingTheoryPractice
    };
}).then(function (data) {

    // Generate chart
    var chart = c3.generate({

        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['linkingTheoryPractice']
            },
            type: 'bar'
        },


        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: 5,
                label: { text: 'Linking Theory To Praxis', position: 'outer-center' }
            }
        },

        title: {
            text: 'Linking Theory To Praxis in each Study Program'
        },

        bar: {
            width: { ratio: 0.25 }
        },

        legend: { show: false },

        bindto: '#chartLinkTheoryToPraxis'
    });
});