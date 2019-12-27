
d3.csv("static/data.csv", function (row) {
  return {
    studyProgram: row.studyProgram,
    male: row.male,
    female: row.female
  };
}).then(function (data) {


  var chart = c3.generate({
    data: {
      json: data,
      keys: {
        x: 'studyProgram',
        value: ['male', 'female']
      },
      type: 'pie'},
      axis: {
        x: {
          type: 'category'
        }
      },
      bindto: '#chart1'
  });
});