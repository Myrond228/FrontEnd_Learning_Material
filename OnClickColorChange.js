// Store body of an HTML page in var
const bodyTag = document.querySelector("body");

// Initialize function that selects a random color from the color array
const randomClick = function randColor(){
  const colors = ["blue", "green", "purple", "orange", "navy", "yellow", "aqua", "red"];
  
  // Choose random number from 0 to length of colors array
  const randomize = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomize];

  bodyTag.style.backgroundColor = randomColor;
    
  console.log("The user clicked and changed the color to" + randomColor)
}

// Call function everytime webpage is clicked
bodyTag.onclick = randomClick;
