d3.csv("static/nckomedia.csv", function (data) {
    return {
      // Required attributes
      date: data.date,
      nc: data.nc
    };
  }).then(function (data) {
    
    // Generate chart
    var chart = c3.generate({
      
        data: {
            json: data,
            keys: {
                x: 'date',
                value: ['nc']
            },
            type: 'line'
        },
      
        axis: {
            x: {
                type: 'category'
            },
            y: {
                label: {text: 'NC Value', position: 'outer-center'}
            }
        },
      
        title: {
            text: 'NC Value over the last 6 winter semester'
        },

        legend: { show: false },
      
        bindto: '#chartNCKomedia'
    });
  });