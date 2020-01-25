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
                        type: 'bar',
                        names: {
                            linkingTheoryPractice: 'Rating'
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

                    bar: {
                        width: { ratio: 0.25 }
                    },

                    legend: { show: false },

                    title: {
                        text: 'Linking theory and practice'
                    },

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
                        type: 'bar',
                        names: {
                            upToDateness: 'Rating'
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

                    bar: {
                        width: { ratio: 0.25 }
                    },

                    legend: { show: false },

                    title: {
                        text: 'Up-to-dateness of the taught contents'
                    },

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
                            label: { text: 'Rating', position: 'outer-center' }
                        }
                    },

                    bar: {
                        width: { ratio: 0.25 }
                    },

                    legend: { show: false },

                    title: {
                        text: 'Opportunities to select a study focus'
                    },

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
                            label: { text: 'Rating', position: 'outer-center' }
                        }
                    },

                    bar: {
                        width: { ratio: 0.25 }
                    },

                    legend: { show: false },

                    title: {
                        text: 'Preparation for the job'
                    },

                    bindto: '#chartContent'
                });
            });
            break;
    }
}