$(document).ready(function () {
  $('#combo-labels').on('change paste keyup', function () {
    var filteredDataList = [];
    if ($(this).val().length == 0) {
      $('#data-list').hide();
    } else {
      $('#data-list').show();

      filterDataList(dataList, $(this).val());
    }
  });
});

function filterDataList(dataList, input) {
  var lonDataList = dataList.length;
  var i = 0;

  $('#data-list li').remove();

  for (i; i < lonDataList; i++) {
    if (dataList[i].toLowerCase().indexOf(input.toLowerCase()) != -1) {
      $('#data-list').append('<li>' + dataList[i] + '</li>');
    }
  }
}

var dataList = [
  'Andres',
  'Rafael',
  'Hugo',
  'Katherine',
  'Percy',
  'Claudio',
  'Oscar',
  'Bryam',
  'John'
];