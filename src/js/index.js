/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let suit = generateRandomSuit();
  document.querySelector(".card").classList.add(suit);

  let cardNumber = document.querySelector(".cardnumber");
  cardNumber.innerHTML = generateRandomNumber();
  if (suit === "hearts" || suit === "diamonds") {
    cardNumber.style.color = "red";
  }
};

let generateRandomNumber = () => {
  let cardnumber = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
  let cardnumIndex = Math.floor(Math.random() * cardnumber.length);
  return cardnumber[cardnumIndex];
};

let generateRandomSuit = () => {
  let suits = ["hearts", "spades", "diamonds", "clubs"];
  let suitsIndex = Math.floor(Math.random() * suits.length);
  return suits[suitsIndex];
};
