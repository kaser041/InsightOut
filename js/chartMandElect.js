d3.csv("static/studyprograminformation.csv", function(data) {
    return {
        // Required attributes
        studyProgram: data.studyProgram,
        electiveLectures: data.electiveLectures,
        mandatoryLectures: data.mandatoryLectures
    };
}).then(function(data) {

    // Generate chart
    var chart = c3.generate({

        data: {
            json: data,
            keys: {
                x: 'studyProgram',
                value: ['mandatoryLectures', 'electiveLectures']
            },
            groups: [
                ['mandatoryLectures', 'electiveLectures']
            ],
            type: 'bar',
            names: {
                mandatoryLectures: 'Mandatory Lectures',
                electiveLectures: 'Elective Lectures'
            }
        },

        axis: {
            x: {
                type: 'category'
            },
            y: {
                label: { text: 'Number of exams', position: 'outer-center' }
            }
        },

        title: {
            text: 'Mandatory and Elective Lectures'
        },

        bar: {
            width: { ratio: 0.25 }
        },

        bindto: '#chartMandElect'
    });
});