d3.csv("static/studyprograminformationkomedia.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      mandatoryLectures: data.mandatoryLectures,
      electiveLectures: data.electiveLectures
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
      data: {
        json: data,
        keys: {
          x: 'studyProgram',
          value: ['mandatoryLectures','electiveLectures']
        },
        type: 'pie',
        names: {
            mandatoryLectures: 'Mandatory',
            electiveLectures: 'Elective'
        }
      },
      
      axis: {
        x: {
          type: 'category'
        }
      },

      legend: {
        position: 'right'
      },
      
      title: {
        text: 'Komedia'
      },
      
      bindto: '#chartMandElectKomedia'
    });
  });