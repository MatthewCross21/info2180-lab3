document.addEventListener("DOMContentLoaded", function() {
    // Select all divs within the board and add the 'square' class
    const boxes = document.querySelectorAll("#board div");
  
    boxes.forEach((square) => {
      square.classList.add("square");

          //events to add and remove hover effect
    square.addEventListener("mouseover", function() {
        square.classList.add("hover");
      });
      square.addEventListener("mouseout", function() {
        square.classList.remove("hover");
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    // Select all divs within the board and add the 'square' class
    const boxes = document.querySelectorAll("#board div");
    const State = Array(9).fill(null); // Array to track X and O state for each square
    let Player1 = "X"; // Start with player X
    
    boxes.forEach((square, index) => {
      square.classList.add("square");
  
      //click event listener to alternate between X and O
      square.addEventListener("click", function() {
        // Check if the square is already filled
        if (State[index] === null) {
          // Set the current player's mark (X or O) in the State array
          State[index] = Player1;
          // Update the square's text content and class to show the current player's symbol
          square.textContent = Player1;
          square.classList.add(Player1);
  
          // Alternate between X and O
          Player1 = Player1 === "X" ? "O" : "X";
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll("#board div");
    const State = Array(9).fill(null); // Array to track X and O state for each square
    let Player1 = "X"; // Start with player X
    const statusDiv = document.getElementById("status"); //status div
    
    // Define possible combinations to win
    const winningCombinations = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // main diagonal
      [2, 4, 6]  // other diagonal
    ];
  
    function checkWinner() {
      // Check each combination
      for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (State[a] && State[a] === State[b] && State[a] === State[c]) {
          return State[a]; // Return "X" or "O"
        }
      }
      return null; // No winner yet
    }
  
    boxes.forEach((square, index) => {
      square.classList.add("square");
  
      // hover effects
      square.addEventListener("mouseover", function() {
        square.classList.add("hover");
      });
      square.addEventListener("mouseout", function() {
        square.classList.remove("hover");
      });
  
      // Click event listener to alternate between X and O
      square.addEventListener("click", function() {
        if (State[index] === null && !statusDiv.classList.contains("you-won")) {
          State[index] = Player1;
          square.textContent = Player1;
          square.classList.add(Player1);
  
          const winner = checkWinner();
          if (winner) {
            statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
            statusDiv.classList.add("you-won");
          } else {
            Player1 = Player1 === "X" ? "O" : "X";
          }
        }
      });
    });
  });
  








   