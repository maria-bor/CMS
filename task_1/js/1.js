var container = document.getElementById('visualization');
var graphdata = '[{"time":"2018-02-01","data":"1.8"},{"time":"2018-02-02","data":"1.5"},{"time":"2018-02-03","data":"1.6"},{"time":"2018-02-04","data":"2.0"},{"time":"2018-02-05","data":"1.9"},{"time":"2018-02-06","data":"1.7"},{"time":"2018-02-07","data":"1.4"},{"time":"2018-02-08","data":"1.6"},{"time":"2018-02-09","data":"1.4"},{"time":"2018-02-10","data":"1.5"}]';

var selectOd = $('#dataOd')
$.each($.parseJSON(graphdata), function (idx, obj) {
    selectOd.append($('<option></option>').text(obj.time))
})

var selectDo = $('#dataDo')
$.each($.parseJSON(graphdata), function (idx, obj) {
    selectDo.append($('<option></option>').text(obj.time))
})


var data = null;
var data = new vis.DataSet();

$('#buttLaduj').click(ladujDane)
function ladujDane() {
    $('#visualization').html('')
    $.each($.parseJSON(graphdata), function (idx, obj) {
        data.add({ x: obj.time, y: Number(obj.data) });
    });

    var options = {
        start: $('#dataOd').find(':selected').text() ,
        end: $('#dataDo').find(':selected').text(),
        height: '300px',
    };
    var graph2d = null
    graph2d = new vis.Graph2d(container, data, options);
}