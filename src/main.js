import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Memory} from './memory-game.js';

$(document).ready(function() {
  const cards = new Array(16);
  let findMe;
  $('#button').click(function() {
    $("#button").hide();
    for(let i=0; i<cards.length; i++) {
      let memory = new Memory();
      let promise = memory.getGifs();
      promise.then(function(response) {
        const body = JSON.parse(response);
        cards[i] = (body.data.images.original.url);
        $(`img#${i}`).attr('src', cards[i]);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    }

    setTimeout(function() {
      $(".card img").fadeOut();
      findMe = cards[Math.floor(Math.random()*cards.length)];
      $("#gif").attr('src', findMe);
    }, 10000);

    $("#gif").click(function() {
      $("#gif").attr('src', cards[Math.floor(Math.random()*cards.length)]);
    });

    $(".card").click(function() {
      if(findMe === this.lastElementChild.src) {
        $(`img#${this.title}`).show();
        cards.splice(cards.indexOf(findMe), 1)
        findMe = cards[Math.floor(Math.random()*cards.length)];
        $("#gif").attr('src', findMe);
      }
      console.log(this.lastElementChild.src);
    });



  });
});

// $(document).ready(function() {
//   const cards = new Array(16);
//   $('#button').click(function() {
//     $("#button").hide();
//     for(let i=0; i<cards.length; i++) {
//       let request = new XMLHttpRequest();
//       const url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`;
//
//       request.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//           const response = JSON.parse(this.responseText);
//           getElements(response);
//         }
//       }
//
//       request.open("GET", url, true);
//       request.send();
//
//       const getElements = function(response) {
//         // $('img').attr('src', `${response.data.images.original.url}`);
//         cards[i] = (response.data.images.original.url);
//         // $(`img#${i}`).attr('src', `${response.data.images.original.url}`);
//         $(`img#${i}`).attr('src', cards[i]);
//       }
//     }
//     setTimeout(function() {
//       console.log(cards);
//       $(".card img").fadeOut();
//       $("#gif").attr('src', cards[Math.floor(Math.random()*cards.length)]);
//     }, 30000);
//
//     $("#gif").click(function() {
//       $("#gif").attr('src', cards[Math.floor(Math.random()*cards.length)]);
//     });
//
//   });
// });
