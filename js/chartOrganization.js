function organizationAspectSwitch(aspect) {
    switch (aspect) {
        case "Time Coordination":
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
                        type: 'bar'
                    },
                    axis: {
                        x: {
                            type: 'category'
                        },
                        y: {
                            max: 5,
                            label: { text: 'Time Coordination', position: 'outer-center' }
                        }
                    },

                    title: {
                        text: 'Time Coordination in each Study Program'
                    },

                    bar: {
                        width: { ratio: 0.25 }
                    },

                    legend: { show: false },

                    bindto: '#chartOrganization'
                });
            });
            break;
        case "Exam Comprehensibility":
            d3.csv("static/data.csv", function (data) {
                return {
                    // Required attributes
                    studyProgram: data.studyProgram,
                    comprehensibilityExamination: data.comprehensibilityExamination
                };
            }).then(function (data) {

                // Generate chart
                var chart = c3.generate({

                    data: {
                        json: data,
                        keys: {
                            x: 'studyProgram',
                            value: ['comprehensibilityExamination']
                        },
                        type: 'bar'
                    },

                    axis: {
                        x: {
                            type: 'category'
                        },
                        y: {
                            max: 5,
                            label: { text: 'Exam Comprehensibility', position: 'outer-center' }
                        }
                    },

                    title: {
                        text: 'Exam Comprehensibility in each Study Program'
                    },

                    bar: {
                        width: { ratio: 0.25 }
                    },

                    legend: { show: false },

                    bindto: '#chartOrganization'
                });
            });
            break;
        case "Flexibilty":
            d3.csv("static/data.csv", function (data) {
                return {
                    // Required attributes
                    studyProgram: data.studyProgram,
                    flexibilty: data.flexibilty
                };
            }).then(function (data) {

                // Generate chart
                var chart = c3.generate({

                    data: {
                        json: data,
                        keys: {
                            x: 'studyProgram',
                            value: ['flexibilty']
                        },
                        type: 'bar'
                    },

                    axis: {
                        x: {
                            type: 'category'
                        },
                        y: {
                            max: 5,
                            label: { text: 'Flexibilty', position: 'outer-center' }
                        }
                    },

                    title: {
                        text: 'Flexibilty in each Study Program'
                    },

                    bar: {
                        width: { ratio: 0.25 }
                    },

                    legend: { show: false },

                    bindto: '#chartOrganization'
                });
            });
            break;
        case "Asking For Help":
            d3.csv("static/data.csv", function (data) {
                return {
                    // Required attributes
                    studyProgram: data.studyProgram,
                    help: data.help
                };
            }).then(function (data) {

                // Generate chart
                var chart = c3.generate({

                    data: {
                        json: data,
                        keys: {
                            x: 'studyProgram',
                            value: ['help']
                        },
                        type: 'bar'
                    },

                    axis: {
                        x: {
                            type: 'category'
                        },
                        y: {
                            max: 5,
                            label: { text: 'Asking For Help', position: 'outer-center' }
                        }
                    },

                    title: {
                        text: 'Asking For Help in each Study Program'
                    },

                    bar: {
                        width: { ratio: 0.25 }
                    },

                    legend: { show: false },

                    bindto: '#chartOrganization'
                });
            });
            break;
    }
}