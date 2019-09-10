import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Memory} from './memory-game.js';

$(document).ready(function() {
  let cards = [];
  let highScore = -500;
  let findMe;
  $('#button').click(function() {
    $(".card img").hide();
    $("#button").hide();
    $("#gif").slideUp();
    let score = 0;
    console.log(score);
    let timeInterval;
    let timer = -30;
    let start = false;
    $("#time").text(timer);
    $("#score").text(score);


    for(let i=0; i<16; i++) {
      let memory = new Memory();
      let promise = memory.getGifs();
      promise.then(function(response) {
        const body = JSON.parse(response);
        cards[i] = (body.data.images.original.url);
        $(`img#${i}`).attr('src', cards[i]);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
      if(i === 15) {
        setTimeout(function() {
          $(".card img").show();
          timeInterval = setInterval(function() {
            timer++;
            $("#time").text(timer);
          }, 1000);
        }, 5000);
      }
    }


    setTimeout(function() {
      $(".card img").fadeOut();
      start = true;
      $("#rules").hide();
      findMe = cards[Math.floor(Math.random()*cards.length)];
      $("#gif").attr('src', findMe);
      $("#gif").slideDown();
    }, 30000);

    $("#gif").click(function() {
      findMe = cards[Math.floor(Math.random()*cards.length)];
      $("#gif").attr('src', findMe);
      score -= 10;
      $("#score").text(score);
    });

    $(".card").click(function() {
      if(findMe === this.lastElementChild.src) {
        $(`img#${this.title}`).show();
        cards.splice(cards.indexOf(findMe), 1);
        findMe = cards[Math.floor(Math.random()*cards.length)];
        $("#gif").attr('src', findMe);
        score +=20;
        score += (30 - timer) || 0;
        $("#score").text(score);
        console.log(cards);
      } else if(start) {
        score-=5;
        $("#score").text(score);
      }
      if (cards.length === 0 ) {
        if( score > highScore ) {
          highScore = score;
          $("#high-score").text(score);
        }
        clearInterval(timeInterval);
        $("#button").show();
        start = false;
        $("#rules").show();
        console.log(cards);
        $(".card img").fadeOut(5000);
      }
    });



  });
});
