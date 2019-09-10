import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  const cards = new Array(16);
  $('#button').click(function() {
    $("#button").hide();
    for(let i=0; i<cards.length; i++) {
      let request = new XMLHttpRequest();
      const url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`;

      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      }

      request.open("GET", url, true);
      request.send();

      const getElements = function(response) {
        // $('img').attr('src', `${response.data.images.original.url}`);
        cards[i] = (response.data.images.original.url);
        // $(`img#${i}`).attr('src', `${response.data.images.original.url}`);
        $(`img#${i}`).attr('src', cards[i]);
      }
    }
    setTimeout(function() {
      console.log(cards);
      $(".card img").fadeOut();
      $("#gif").attr('src', cards[Math.floor(Math.random()*cards.length)]);
    }, 30000);

    $("#gif").click(function() {
      $("#gif").attr('src', cards[Math.floor(Math.random()*cards.length)]);
    });

  });
});
