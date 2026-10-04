 const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();

  function playerGame(playerMove) {
    const randomNum = Math.random();
    let computerMove = pickComputerMove();
    let result = '';


    //Scissors Parameters
    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You Lose.';
      } else if (computerMove === 'paper') {
        result = 'You Win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You Win.';
      } else if (computerMove === 'paper') {
        result = 'Tie';
      } else if (computerMove === 'scissors') {
        result = 'You Lose.';
      }
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You Lose.';
      } else if (computerMove === 'scissors') {
        result = 'You Win.';
      }
    }

    if (result === 'You Win.') {
      score.wins++;
    } else if (result === 'You Lose.') {
      score.losses++;
    } else if (result === 'Tie.') {
      score.ties++;
    }

    //Saving into localStorage
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML =
    `You <img class="image" src="../Pictures/${playerMove}-emoji.png"> 
    <img class="image" src="../Pictures/${computerMove}-emoji.png"> 
    Computer.`;

  }

  function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
  }

  function pickComputerMove() {
    let computerMove = '';
    const randomNum = Math.random();

    if (randomNum >= 0 && randomNum < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNum >= 2 / 3 && randomNum < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }