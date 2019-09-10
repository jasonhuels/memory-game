import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import {Tamagotchi} from './tamagotchi.js';

$(document).ready(function() {
  $('#button').click(function() {
    // const city = $('#location').val();
    // $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/random?api_key=APITMcCcU4sQTAn3bgnInPVQz9f7pX8a`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $('#gif').attr('src', `${response.data.images.original.url}`);
    }
  });
});
