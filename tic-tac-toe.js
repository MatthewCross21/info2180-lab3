document.addEventListener("DOMContentLoaded", function() {
    // Select all divs within the board and add the 'square' class
    const squares = document.querySelectorAll("#board div");
  
    squares.forEach((square) => {
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
  
      // Add click event listener to alternate between X and O
      square.addEventListener("click", function() {
        // Check if the square is already filled
        if (State[index] === null) {
          // Set the current player's mark (X or O) in the gameState array
          State[index] = Player1;
          // Update the square's text content and class to show the current player's symbol
          square.textContent = Player1;
          square.classList.add(Player1);
  
          // Toggle between X and O
          Player1 = Player1 === "X" ? "O" : "X";
        }
      });
    });
  });






   