d3.csv("static/studyprograminformationkomedia.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      creditsLectures: data.creditsLectures,
      /* Lecture Details:
      creditsPsychology: data.creditsPsychology,
      creditsComputerScience: data.creditsComputerScience,
      creditsBusinessEconomics: data.creditsBusinessEconomics,
      creditsMath: data.creditsMath,
      */
      creditsErgaenzungsbereich: data.creditsErgaenzungsbereich,
      creditsProjects: data.creditsProjects,
      creditsBachelorThesis: data.creditsBachelorThesis
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
      data: {
        json: data,
        keys: {
          x: 'studyProgram',
          value: ['creditsLectures', 'creditsErgaenzungsbereich', 'creditsProjects', 'creditsBachelorThesis']
        },
        type: 'pie',
        names: {
            creditsLectures: 'Lectures',
            creditsErgaenzungsbereich: 'Ergänzungsbereich',
            creditsProjects: 'Projects',
            creditsBachelorThesis: 'Bachelor Thesis'
        }
      },
      
      axis: {
        x: {
          type: 'category'
        }
      },
      
      title: {
        text: 'Komedia'
      },
      
      bindto: '#chartStudyContentKomedia'
    });
  });