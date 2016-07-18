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

$(document).on('mouseenter', '#data-list li', function () {
  $('#data-list li').removeClass('active');
  $(this).addClass('active');
});

$(document).on('mouseleave', '#data-list li', function () {
  $('#data-list li').removeClass('active');
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

  $($('#data-list li')[0]).addClass('active');
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