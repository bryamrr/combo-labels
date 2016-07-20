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

  $('#selected-items').append('<li data-id="' + id + '">' + title + '<span>x</span></li>');
  removeItemFromList(id);
});

$(document).on('click', '#selected-items span', function () {
  var id = $(this).parent().data("id");
  var title = $(this).parent().text();

  removeItemFromSelected(id, title);
});

$(document).keypress(function(e) {
  if ($('#combo-labels').is(":focus")) {
    if (e.which == 13) {
      var id = $(".active").data('id');
      addItemWithId(id);
      removeItemFromList(id);
    }
  }
});
$(document).keyup(function(e) {
  if ($('#combo-labels').is(":focus")) {
    if (e.keyCode == 8) {
      removeLastItem();
    }
  }
});

$(window).click(function() {
  $('#data-list li').remove();
});

$( window ).resize(function() {
  calcInputWidth();
});

$('#data-list').click(function(event){
    event.stopPropagation();
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

  $('#combo-labels').val('');

  calcInputWidth();
  $('#combo-labels').focus();
}

function removeItemFromSelected(id, title) {
  $('#selected-items li[data-id =' + id + ']').remove();

  title = title.substring(0, title.length - 1);
  dataList.push({ id: id, title: title });
}

function calcInputWidth() {

  var containerWidth = $('.input-container').width();
  var itemsWidth = $('#selected-items').width();

  $('.input-container input').width(containerWidth - 7 - itemsWidth);
}

function addItemWithId(id) {
  var lonDataList = dataList.length;
  var i = 0;

  for (i; i < lonDataList; i++) {
    if (dataList[i].id === parseInt(id)) {
      $('#selected-items').append('<li data-id="' + id + '">' + dataList[i].title + '<span>x</span></li>');
    }
  }
}

function removeLastItem() {
  var id = $('#selected-items li').last().data('id');
  var title = $('#selected-items li').last().text();
  title = title.substring(0, title.length - 1);

  $('#selected-items li').last().remove();

  dataList.push({ id: id, title: title });
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