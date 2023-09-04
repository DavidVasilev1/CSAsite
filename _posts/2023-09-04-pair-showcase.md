---
title: Pair Showcase
author: david
categories: ['Lesson']
tags: ['Javascript', 'HTML', 'CSS']
type: lessons
week: 3
description: Concentration game for pair showcase.
toc: True
comments: True
date: 2023-09-04 12:00:00 +0000
---


<style>
  .game-container {
      margin: 20px auto;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .gameBoard {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
      margin-top: 20px;
  }
  .gameCard {
      width: 100px;
      height: 100px;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      transform: rotateY(180deg);
      transition: transform 0.5s ease;
  }
  .gameCard.flipped {
      background-color: #fff;
  }
  .gameCard img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0px;
  }
  .gameCard.flipped {
    transform: rotateY(0deg);
  }

  .card-back {
      width: 100%;
      height: 100%;
      background-image: url('/CSA/assets/img/post_images/cardBack.png'); /* Specify the path to your card back image */
      background-size: cover;
      position: absolute;
      backface-visibility: hidden; /* Prevents the back from showing when flipped */
      transition: transform 0.5s ease;
  }

  .gameCard.flipped .card-back {
      transform: rotateY(180deg); /* Rotate the card back when flipped */
  }
</style>

<div class="game-container">
    <h1>Concentration Game</h1>
    <p>Moves: <span id="move-count">0</span></p>
    <p>Time: <span id="timer">0</span> seconds</p>
    <div class="gameBoard" id="gameBoard"></div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', async () => {
      const gameBoard = document.getElementById('gameBoard');
      const moveCount = document.getElementById('move-count');
      const timer = document.getElementById('timer');
      const breeds = await fetchDogs();
      const images = [];

      // Duplicate each image to create pairs
      breeds.forEach(breed => {
          images.push(breed.img);
          images.push(breed.img);
      });

      images.sort(() => Math.random() - 0.5); // Shuffle the images

      let flippedCards = [];
      let moves = 0;
      let pairs = 0;
      let timerInterval;
      let startTime;

      // create the game board
      images.forEach((img, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('gameCard');
        cardElement.dataset.cardIndex = index;
    
        // Create a card back element and add the card back image
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardElement.appendChild(cardBack);
    
        const cardImage = document.createElement('img');
        cardImage.src = img;
        cardElement.appendChild(cardImage);
    
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
      });

      // pulling from rapidapi data
      function fetchDogs() {
          const url = 'https://dog-breeds2.p.rapidapi.com/dog_breeds';
          const options = {
              method: 'GET',
              headers: {
                  'X-RapidAPI-Key': '701410bf7emshbaf1fa99b2e4e5bp1c0ee6jsn8f8f51602e3f',
                  'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com',
              },
          };

          return fetch(url, options)
              .then(response => response.json())
              .then(data => {
                const shuffledBreeds = data.slice().sort(() => Math.random() - 0.5); // taking random dogs
                return shuffledBreeds.slice(0, 8); // sending data gathered to frontend
              });
      }

      function flipCard() {
          if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
              this.classList.add('flipped');
              flippedCards.push(this);
              moves++;
              moveCount.textContent = moves;

              if (flippedCards.length === 2) {
                  const card1Index = flippedCards[0].dataset.cardIndex;
                  const card2Index = flippedCards[1].dataset.cardIndex;

                  if (images[card1Index] === images[card2Index]) {
                      pairs++;
                      flippedCards = [];
                  } else {
                      setTimeout(() => {
                          flippedCards.forEach(card => card.classList.remove('flipped'));
                          flippedCards = [];
                      }, 1000);
                  }
              }

              if (pairs === 8) {
                  clearInterval(timerInterval);
                  setTimeout(() => {
                      alert(`Congratulations! You won in ${moves} moves and ${timer.textContent} seconds.`);
                  }, 200);
              }
          }
      }

      function updateTimer() {
          const currentTime = Math.floor((Date.now() - startTime) / 1000);
          timer.textContent = currentTime;
      }

      // Start the timer
      startTime = Date.now();
      timerInterval = setInterval(updateTimer, 1000);
  });


</script>