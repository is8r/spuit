import $ from 'jquery'
import bootstrap from 'bootstrap'
import HugoSearch from './classes/HugoSearch'
import Onof from './classes/onof'

document.addEventListener("DOMContentLoaded", function () {
  var onof = new Onof()
})

document.body.addEventListener('on.onof', function (e) {
  if (e.detail.target.id === 'hamburger') {
    $('body').addClass('noscroll')
  }
})

document.body.addEventListener('off.onof', function (e) {
  if (e.detail.target.id === 'hamburger') {
    $('body').delay(200).queue(() => {
      $(this).removeClass('noscroll').dequeue()
    })
  }
})

$(function() {
  var hugoSearch = new HugoSearch()
});
