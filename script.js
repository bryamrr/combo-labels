$(document).ready(function () {
  $('#combo-labels').on('paste keyup', function () {
    var filteredDataList = [];
    if ($(this).val().length == 0) {
      $('#data-list').hide();
    } else {
      $('#data-list').show();

      filterDataList(dataList, $(this).val());
    }
  });

  calcInputWidth();
});

$(document).on('mouseenter', '#data-list li', function () {
  $('#data-list li').removeClass('active');
  $(this).addClass('active');
});

$(document).on('mouseleave', '#data-list li', function () {
  $('#data-list li').removeClass('active');
});

$(document).on('click', '#data-list li', function () {
  var id = $(this).data("id");
  var title = $(this).text();

  $('#selected-items').append('<li data-id="' + id + '">' + title + '</li>');
  removeItemFromList(id);
  $('#combo-labels').val('');

  calcInputWidth();
});

function filterDataList(dataList, input) {
  var lonDataList = dataList.length;
  var i = 0;

  $('#data-list li').remove();

  for (i; i < lonDataList; i++) {
    if (dataList[i].title.toLowerCase().indexOf(input.toLowerCase()) != -1) {
      $('#data-list').append('<li data-id="' + dataList[i].id+ '">' + dataList[i].title + '</li>');
    }
  }

  $($('#data-list li')[0]).addClass('active');
}

function removeItemFromList(id) {
  var lonDataList = dataList.length;
  var i = 0;

  for (i; i < lonDataList; i++) {
    if (dataList[i].id === parseInt(id)) {
      $('#data-list li[data-id="' + id + '"]').remove();
      dataList.splice(i, 1);
      break;
    }
  }
}

function calcInputWidth() {

  var containerWidth = $('.input-container').width();
  var itemsWidth = $('#selected-items').width();

  $('.input-container input').width(containerWidth - 6 - itemsWidth);
}

var dataList = [
  { id: 1, title: 'Andres' },
  { id: 2, title: 'Rafael' },
  { id: 3, title: 'Hugo' },
  { id: 4, title: 'Katherine' },
  { id: 5, title: 'Percy' },
  { id: 6, title: 'Claudio' },
  { id: 7, title: 'Oscar' },
  { id: 8, title: 'Bryam' },
  { id: 9, title: 'John' }
];

var originalList = [
  { id: 1, title: 'Andres' },
  { id: 2, title: 'Rafael' },
  { id: 3, title: 'Hugo' },
  { id: 4, title: 'Katherine' },
  { id: 5, title: 'Percy' },
  { id: 6, title: 'Claudio' },
  { id: 7, title: 'Oscar' },
  { id: 8, title: 'Bryam' },
  { id: 9, title: 'John' }
];