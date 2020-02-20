/*
import HugoSearch from './classes/HugoSearch';
$(function() {
  var hugoSearch = new HugoSearch();
});
*/

import $ from 'jquery'
import lunr from 'lunr'

export default class HugoSearch {
  constructor() {
    this.searchOverlay = document.querySelector('.search-form')
    this.searchButton = document.getElementById('search-button')
    this.searchInput = document.getElementById('search-input')
    this.closeSearch = document.getElementById('close-search')
    this.searchInput = document.getElementById('search-input')

    this.init()
  }

  init() {
    if(this.closeSearch != null) {
      this.closeSearch.addEventListener('click', (event) => {
        if (this.searchOverlay.classList.contains('open')) {
          this.searchOverlay.classList.remove('open');
        }
      }, true);
    }

    if(this.searchButton) {
      this.searchButton.addEventListener('click', (event) => {
          this.searchOverlay.classList.toggle('open');
          searchInput.focus();
      }, true);
    }

    if (this.searchInput) {
      this.searchInput.addEventListener('keyup', (event) => {
        var query = document.querySelector("#search-input").value;
        var searchResults = document.querySelector('#search-results');
        if (query.length === 0) {
          searchResults.innerHTML = '';
        }
        if ((event.keyCode !== 9) && (query.length > 2)) {
          var matches = window.index.search(query);
          this.displayResults(matches);
        }
      }, true);
    }

    this.initLunr()
    this.initModal()
  }

  initModal() {
    $('#search').on('shown.bs.modal', function() {
      $('#search-input').trigger('focus')
    })
    $('#search').on('hidden.bs.modal', function() {
      $('#search-input').val('')
      $('#search-results')[0].innerHTML = ''
    })
  }

  initLunr() {
    var scope = this;
    fetch('/search.json')
      .then((response) => {
        if(response.ok) {
          return response.json()
        } else {
          throw new Error()
        }
      })
      .then((json) => {
        scope.searchData = json
        window.index = lunr(function() {
          this.field('id')
          this.field('url')
          this.field('title', { boost: 50 })
          this.field('tags',{ boost: 30})
          this.field('content', { boost: 10 })

          scope.searchData.forEach(function (obj, index) {
            obj['id'] = index
            this.add(obj)
          }, this)
        })
      })
      .catch((error) => console.log(error));
  }

  displayResults(results) {
    var searchResults = document.querySelector('#search-results');
    var inputVal = document.querySelector('#search-input').value;
    if (results.length) {
      searchResults.innerHTML = '';
      results.forEach((result) => {
        var item = this.searchData[result.ref];
        var section = item.section.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        var appendString = '';
        appendString += '<li class=\"search-result\"><h5><a href=\"' + item.url + '\">' + item.title + '</a></h5><p>' + item.summary + '</p>';
        // appendString += '<div class=\"in-section\">In: ' + section + '</div><ul class=\"tags\">';
        // appendString += '<ul class=\"tags\">';
        // var tags = '';
        // for (var i = 0; i < item.tags.length; i++) {
        //   appendString += '<li><a href=\"/tags/' + item.tags[i] + '\" class=\"tag\">' + item.tags[i] + '</a> ';
        // }
        appendString += '</ul></li>';
        searchResults.innerHTML += appendString;
      })
    }
  }
}
