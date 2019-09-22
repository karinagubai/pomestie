// show-hide main-nav on small devices

$('.open-nav').on('click', function(){
  $('.main-nav').css("display", "block");
});
$('.main-nav').on('click', 'a', function(){
  if($(window).width() < 992) {
    $('.main-nav').hide();
  }
});
$('.close-nav').on('click', function(){
  $('.main-nav').hide();
});

$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
          $('.main-header').addClass('sticky');
      } else {
          $('.main-header').removeClass('sticky');
      }
});

$(window).resize(function(){
  if ($(window).width() > 991) {
        $('.main-nav').css("display", "block");
    } else {
        $('.main-nav').hide();
    }
});

// Filtering

$('.filter2').hide();
$('.btn-filter').on('click', function(){
  const filterValue = $(this).attr('data-filter');
  // if ( filterValue == 'filter2' ) {
  //   $('.filter2').show();
  // }
  $('.project').each(function(index, item){
    if($(item).hasClass(filterValue)){
      $(item).show();
    } else {
      $(item).hide();
    }
  });
  $(this).parent().children().removeClass('btn-filter-active');
  $(this).addClass('btn-filter-active');
});

// carousel

$('.right').on('click', function(){
  $('.project:first').insertAfter('.project:last');
});
$('.left').on('click', function(){
  $('.project:last').insertBefore('.project:first');
});

// inputmask

$(document).ready(function(){
  $('input[type="tel"]').inputmask("+7 (999) 999 99 99");
  $('#date').inputmask("99.99", {"placeholder": "ДД.ММ"});
  $('#time').inputmask("99:99", {"placeholder": "--:--"});
});

// insert div with leaf in 7th service
$( '.service-leaf' ).appendTo($('#services .scrollx-item:nth-of-type(7)'));

// Big-filternav, showing and hiding peaces of text according to clicked button

$('#calculator .btn-filter').on('click', function(){
  $('#calculator .btn-filter').each(function(){
    if ($(this).hasClass('btn-filter-active')) {
      $(this).removeClass('btn-filter-active');
    }
  });
  $('#calculator .collapse').each(function(){
    if ($(this).hasClass('show')) {
      $(this).removeClass('show');
    }
  });
  $(this).addClass('btn-filter-active');
});

// Calculator

let $arrValues = [];
let $arrOptionText = [];
let $arrSelects = [];
let $totalPrice = 0;
const $arrImages = [
  {
    parentId: 'fundament-select',
    value: '240000cokolnii-fundament',
    imgSrc: 'img/cokolnii-fundament.png'
  },
  {
    parentId: 'fundament-select',
    value: '250000ytepl-shved-plitka',
    imgSrc: 'img/ytepl-shvedplitka.png'
  },
  {
    parentId: 'fundament-select',
    value: '200000monolit-plitka',
    imgSrc: 'img/monolit-plita.png'
  },
  {
    parentId: 'fundament-select',
    value: '160000lentochnii',
    imgSrc: 'img/lentochnii-fundament.png'
  },
  {
    parentId: 'fundament-select',
    value: '140000svaino-rostverkovii',
    imgSrc: ''
  },
  {
    parentId: 'fundament-select',
    value: '100000svaino-vintovoi',
    imgSrc: 'img/svaino-vintovoi.png'
  },
  {
    parentId: 'fundament-select',
    value: '60000stolbchatii',
    imgSrc: 'img/stolbchatii-fundament.png'
  },
  {
    parentId: 'fasad-select',
    value: '180000vinilovii-saiding',
    imgSrc: 'img/vinilovii-fasad.png'
  },
  {
    parentId: 'fasad-select',
    value: '180000metallicheskii-saiding',
    imgSrc: 'img/metal-saiding.png'
  },
  {
    parentId: 'fasad-select',
    value: '180000imitacia-brysa',
    imgSrc: 'img/imitacia-brusa.png'
  },
  {
    parentId: 'fasad-select',
    value: '270000oblicovka-kirpichom',
    imgSrc: 'img/oblicovka-kirpichom.png'
  },
  {
    parentId: 'fasad-select',
    value: '270000mokrii-fasad',
    imgSrc: 'img/mokrii-fasad.png'
  },
  {
    parentId: 'fasad-select',
    value: '0bez-obshivki',
    imgSrc: ''
  },
  {
    parentId: 'material-sten-select',
    value: '450000karkasnii-dom',
    imgSrc: ''
  },
  {
    parentId: 'material-sten-select',
    value: '800000kirpich',
    imgSrc: 'img/kirpich-material.png'
  },
  {
    parentId: 'material-sten-select',
    value: '1130000kleenii-brys',
    imgSrc: 'img/kleen-brus.png'
  },
  {
    parentId: 'material-sten-select',
    value: '1200000monolitnii-karkas',
    imgSrc: 'img/monolit-karkas.png'
  },
  {
    parentId: 'material-sten-select',
    value: '700000keramicheskie-blocki',
    imgSrc: 'img/keramich-bloki.png'
  },
  {
    parentId: 'material-sten-select',
    value: '550000keramzitobetonnie-blocki',
    imgSrc: 'img/keramzitobetonnie-bloki.png'
  },
  {
    parentId: 'material-sten-select',
    value: '500000ocilindrovannoe-brevno',
    imgSrc: 'img/ocilindrov-brevno.png'
  },
  {
    parentId: 'material-sten-select',
    value: '450000brys-profilirovannii',
    imgSrc: 'img/brus-profilirovannii.png'
  },
  {
    parentId: 'material-sten-select',
    value: '350000brys-obichnii',
    imgSrc: 'img/brus-obichnii.png'
  },
  {
    parentId: 'material-sten-select',
    value: '450000dvoinoi-brys',
    imgSrc: 'img/dvoinoi-brus.png'
  },
  {
    parentId: 'material-sten-select',
    value: '500000penoblocki',
    imgSrc: 'img/penobloki.png'
  },
  {
    parentId: 'material-sten-select',
    value: '500000gazobetonnie-blocki',
    imgSrc: 'img/gazobetonnie-bloki.png'
  },
  {
    parentId: 'material-sten-select',
    value: '500000gazosilikatnie-blocki',
    imgSrc: 'img/gazosilikatnie-bloki.png'
  },
  {
    parentId: 'material-sten-select',
    value: '600000sip-paneli',
    imgSrc: 'img/sip-paneli.png'
  },
  {
    parentId: 'krovlya-select',
    value: '350000myagkaya-cherepica',
    imgSrc: 'img/myagkaya-cherepica.png'
  },
  {
    parentId: 'krovlya-select',
    value: '200000metallocherepica',
    imgSrc: 'img/metallocherepica.png'
  },
  {
    parentId: 'krovlya-select',
    value: '190000profnastil',
    imgSrc: 'img/profnastil.png'
  },
  {
    parentId: 'krovlya-select',
    value: '200000falcevaya-krovlya',
    imgSrc: 'img/falcevaya-krovlya.png'
  },
  {
    parentId: 'krovlya-select',
    value: '170000ondylin',
    imgSrc: ''
  },
  {
    parentId: 'krovlya-select',
    value: '450000keramicheskaya-cherepica',
    imgSrc: 'img/keramicheskaya-cherepica.png'
  },
  {
    parentId: 'krovlya-select',
    value: '400000kompozitnaya-cherepica',
    imgSrc: 'img/kompozitnaya-cherepica.png'
  },
];

$( "select option:selected" ).each(function() {
    let $textSelected = $(this).text();
    let $priceSelected = parseInt($(this).attr('value'), 10);
    if (isNaN($priceSelected)) {
      $arrValues.push(0);
      $arrOptionText.push("");
    } else {
      $arrValues.push($priceSelected);
      $arrOptionText.push($textSelected);
    }
    $(this).removeAttr('selected');
  });

$('select').each(function(i){
  let $selectId = $(this).attr('id');
  $arrSelects.push($selectId);
});

function writeOptionText() {
  $('.selectedOption').each(function(i){
    $(this).text($arrOptionText[i]);
  });
}

function countTotalPrice() {
  $totalPrice = 0;
  $.each($arrValues, function(i, val){
      $totalPrice += val;
  });
  return $totalPrice;
}

function writeTotalPrice() {
  if ($totalPrice > 0) {
    $('.totalPrice').text($totalPrice);
  }
}

writeOptionText();
countTotalPrice();
writeTotalPrice();

$('select').change(function(){
  let $optionSelected = $(this).children().filter(":selected");
  let $valueSelected = $optionSelected.attr('value');
  let $priceSelected = parseInt($valueSelected, 10);
  let $textSelected = $optionSelected.text();
  let $parentId = $(this).attr('id');

  $.each($arrSelects, function(i, val){
    if ($parentId === $arrSelects[i]) {
      $arrValues[i] = $priceSelected;
      $arrOptionText[i] = $textSelected;
    }
  });
  $(this).children().removeAttr('selected');
  let $noValueOption = $(this).children();
  $(this).children("option[value='']").attr('selected', 'true');
  writeOptionText();
  countTotalPrice();
  writeTotalPrice();

  $.each($arrImages, function(i, val){
    if ($valueSelected === $arrImages[i]["value"]) {
      if ($arrImages[i].parentId === 'krovlya-select') {
        $('.krovlya img').attr('src', $arrImages[i]["imgSrc"]);
      } else if ($arrImages[i].parentId === 'material-sten-select') {
        $('.material img').attr('src', $arrImages[i]["imgSrc"]);
      } else if ($arrImages[i].parentId === 'fasad-select') {
        $('.fasad img').attr('src', $arrImages[i]["imgSrc"]);
      } else {
        $('.fundament img').attr('src', $arrImages[i]["imgSrc"]);
      }
    }
  });
});
// $('.scrollx-container').on('scroll', function(){
//   const $numOfItems = $(this).children('.scrollx-item').length;
//   const $itemWidth = $(this).children('.scrollx-item').width();
//   const contParent = $(this).parent().parent().prev().attr('class');
//   alert(contParent);
//   $(this).parent().parent().prev().css('animation-play-state', 'paused');
//   if ($(this).scrollLeft() > ($itemWidth * ( $numOfItems - 1 ))) {
//     $(this).parent().parent().prev().hide();
//   }
// });
