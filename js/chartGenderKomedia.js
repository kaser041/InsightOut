
d3.csv("static/datakomedia.csv", function (data) {
  return {
    // Required attributes
    studyProgram: data.studyProgram,
    Male: data.male,
    Female: data.female
  };
}).then(function (data) {
  
  // Generate chart
  var chart = c3.generate({
    data: {
      json: data,
      keys: {
        x: 'studyProgram',
        value: ['Male', 'Female']
      },
      type: 'pie'
    },
    
    axis: {
      x: {
        type: 'category'
      }
    },

    title: {
      text: 'Komedia'
    },
    
    bindto: '#chartGenderKomedia'
  });
});