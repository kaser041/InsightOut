d3.csv("static/studyprograminformationisecomm.csv", function (data) {
    return {
      // Required attributes
      studyProgram: data.studyProgram,
      creditsLectures: data.creditsLectures,
      /* Lecture Details:
      creditsComputerScience: data.creditsComputerScience,
      creditsElectricalEngineering: data.creditsElectricalEngineering,
      creditsBusinessEconomics: data.creditsBusinessEconomics,
      creditsMath: data.creditsMath,
      creditsPhysics: data.creditsPhysics,
      creditsFundamentals: data.creditsFundamentals
      */
      creditsErgaenzungsbereich: data.creditsErgaenzungsbereich,
      creditsProjects: data.creditsProjects,
      creditsInternship: data.creditsInternship,
      creditsBachelorThesis: data.creditsBachelorThesis
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
      data: {
        json: data,
        keys: {
          x: 'studyProgram',
          value: ['creditsLectures', 'creditsErgaenzungsbereich', 'creditsProjects', 'creditsInternship', 'creditsBachelorThesis']
        },
        type: 'pie',
        names: {
            creditsLectures: 'Lectures',
            creditsErgaenzungsbereich: 'Ergänzungsbereich',
            creditsProjects: 'Projects',
            creditsInternship: 'Internship',
            creditsBachelorThesis: 'Bachelor Thesis'
        }
      },
      
      axis: {
        x: {
          type: 'category'
        }
      },
      
      title: {
        text: 'Computer Engineering (Communication)'
      },
      
      bindto: '#chartStudyContentISEComm'
    });
  });