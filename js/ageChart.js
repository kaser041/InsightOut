
d3.csv("static/data.csv", function (row) {
  return {
    studyProgram: row.studyProgram,
    age18_20: row.age18_20,
    age21_25: row.age21_25,
    age26_30: row.age26_30,
    age30: row.age30
  };
}).then(function (data) {


  var chart = c3.generate({
    data: {
      json: data,
      keys: {
        x: 'studyProgram',
        value: ['age18_20', 'age21_25', 'age26_30', 'age30']
      },
      type: 'pie'
    },
    axis: {
      x: {
        type: 'category'
      }
    }
  });
});