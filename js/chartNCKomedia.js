d3.csv("static/nckomedia.csv", function(data) {
    return {
        // Required attributes
        date: data.date,
        NC: data.NC
    };
}).then(function(data) {

    // Generate chart
    var chart = c3.generate({

        data: {
            json: data,
            keys: {
                x: 'date',
                value: ['NC']
            },
            type: 'line'
        },

        point: {
            show: true
        },

        axis: {
            x: {
                type: 'category',
                label: { text: 'Winter semester', position: 'outer-center' }
            },
            y: {
                label: { text: 'NC Value', position: 'outer-center' }
            }
        },

        legend: { show: false },

        bindto: '#chartNCKomedia'
    });
});