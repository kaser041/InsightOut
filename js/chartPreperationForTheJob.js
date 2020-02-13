d3.csv("static/Data.csv", function (data) {
    return {
        // Required attributes
        studyProgram: data.studyProgram,
        preparationJob: data.preparationJob
    };
}).then(function (data) {

    // Generate chart
    var chart = c3.generate({

        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['preparationJob']
            },
            type: 'bar',
            names: {
                preparationJob: 'Rating'
            }
        },


        axis: {
            x: {
                type: 'category'
            },
            y: {
                max: 5,
                label: { text: 'Job Preperation', position: 'outer-center' }
            }
        },

        title: {
            text: 'Job Preperation in each Study Program'
        },

        bar: {
            width: { ratio: 0.25 }
        },

        legend: { show: false },

        bindto: '#chartPreperationForTheJob'
    });
});