function contentAspectSwitch(aspect) {
    switch (aspect) {
        case "Linking Theory To Praxis":
            d3.csv("static/data.csv", function(data) {
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

                    bindto: '#chartContent'
                });
            });
            break;
        case "Up-to-dateness":
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

                    bindto: '#chartContent'
                });
            });
            break;

        case "Study Focus":
            d3.csv("static/data.csv", function(data) {
                return {
                    // Required attributes
                    studyProgram: data.studyProgram,
                    studyFocus: data.studyFocus
                };
            }).then(function(data) {

                // Generate chart
                var chart = c3.generate({

                    data: {
                        json: data,
                        keys: {
                            x: 'studyProgram',
                            value: ['studyFocus']
                        },
                        type: 'bar'
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

                    bindto: '#chartContent'
                });
            });
            break;

        case "Job Preperation":
            d3.csv("static/data.csv", function(data) {
                return {
                    // Required attributes
                    studyProgram: data.studyProgram,
                    preparationJob: data.preparationJob
                };
            }).then(function(data) {

                // Generate chart
                var chart = c3.generate({

                    data: {
                        json: data,
                        keys: {
                            x: 'studyProgram',
                            value: ['preparationJob']
                        },
                        type: 'bar'
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

                    bindto: '#chartContent'
                });
            });
            break;
    }
}