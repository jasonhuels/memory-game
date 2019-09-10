import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Memory} from './memory-game.js';

$(document).ready(function() {
  let highScore = -500;
  let findMe;
  $('#button').click(function() {
    $("#gif").slideUp();
    $(".card img").hide();
    let score = 0;
    let timeInterval;
    let timer = -30;
    let start = false;
    const cards = new Array(16);
    $("#time").text(timer);
    $("#score").text(score);
    timeInterval = setInterval(function() {
      timer++;
      $("#time").text(timer);
    }, 1000);
    $("#button").hide();
    for(let i=0; i<cards.length; i++) {
      $(".card img").show();
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
      start = true;
      findMe = cards[Math.floor(Math.random()*cards.length)];
      $("#gif").attr('src', findMe);
      $("#gif").slideDown();
    }, 30000);

    $("#gif").click(function() {
      $("#gif").attr('src', cards[Math.floor(Math.random()*cards.length)]);
    });

    $(".card").click(function() {
      if(findMe === this.lastElementChild.src) {
        $(`img#${this.title}`).show();
        cards.splice(cards.indexOf(findMe), 1);
        findMe = cards[Math.floor(Math.random()*cards.length)];
        $("#gif").attr('src', findMe);
        score +=20;
        score += (30 - timer);
        $("#score").text(score);
        console.log(cards);
      } else if(start) {
        score-=5;
        $("#score").text(score);
      }
      if (cards.length == 0 ) {
        if( score > highScore ) {
          $("#high-score").text(score);
        }
        clearInterval(timeInterval);
        $("#button").show();
        start = false;
      }
    });



  });
});
