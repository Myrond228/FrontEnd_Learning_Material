const bodyTag = document.querySelector("body");

const randomClick = function randColor(){
  const colors = ["blue", "green", "purple", "orange", "navy", "yellow", "aqua", "red"];
    const randomize = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomize];

    bodyTag.style.backgroundColor = randomColor;
    
    console.log("The user clicked and changed the color to" + randomColor)
}

bodyTag.onclick = randomClick;
