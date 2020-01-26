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
                        type: 'bar',
                        names: {
                            timeCoordination: 'Rating'
                        },
                        colors: {
                            timeCoordination: '#00cadc'
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

                    bar: {
                        width: { ratio: 0.25 }
                    },

                    legend: { show: false },

                    title: {
                        text: 'Time coordination of the lectures (eg. overlaps)'
                    },

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
                        type: 'bar',
                        names: {
                            comprehensibilityExamination: 'Rating'
                        },
                        colors: {
                            comprehensibilityExamination: '#00cadc'
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

                    bar: {
                        width: { ratio: 0.25 }
                    },

                    legend: { show: false },

                    title: {
                        text: 'Comprehensibility of the examination regulations and module manual'
                    },

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
                        type: 'bar',
                        names: {
                            flexibilty: 'Rating'
                        },
                        colors: {
                            flexibilty: '#00cadc'
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

                    bar: {
                        width: { ratio: 0.25 }
                    },

                    legend: { show: false },

                    title: {
                        text: 'Flexibility of the study plan (eg. not sticking to the given study plan)'
                    },

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
                        type: 'bar',
                        names: {
                            help: 'Rating'
                        },
                        colors: {
                            help: '#00cadc'
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

                    bar: {
                        width: { ratio: 0.25 }
                    },

                    legend: { show: false },

                    title: {
                        text: 'Options to ask for help or advice'
                    },

                    bindto: '#chartOrganization'
                });
            });
            break;
    }
}