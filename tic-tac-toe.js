//Exercise 1
document.addEventListener("DOMContentLoaded", function() {
    // Select all divs within the board and add the 'square' class
    const boxes = document.querySelectorAll("#board div");
  
    boxes.forEach((square) => {
      square.classList.add("square");

       //Exercise 3
          //events to add and remove hover effect
    square.addEventListener("mouseover", function() {
        square.classList.add("hover");
      });
      square.addEventListener("mouseout", function() {
        square.classList.remove("hover");
      });
    });
  });
  
  //Exercise 2
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
  
          // Alternate between X and O and does not allow cheating
          Player1 = Player1 === "X" ? "O" : "X";
        }
      });
    });
  });

  //Exercise 4 and 5
  document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll("#board div");
    const State = Array(9).fill(null); // Array to track X and O state for each square
    let Player1 = "X"; // Start with player X
    const statusDiv = document.getElementById("status"); //status div
    const newGameButton = document.querySelector(".btn");
    
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
    newGameButton.addEventListener("click", function() {
        // Reset state array
        State.fill(null);
        
        // Clear each square
        boxes.forEach((square) => {
          square.textContent = "";         // Clears displayed text
          square.classList.remove("X", "O"); // Clears the game space
        });
        
        // Reset the status message
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won"); // Remove the winner style
        
        // Sets current player to X
        Player1 = "X";
      });

  });
  








   