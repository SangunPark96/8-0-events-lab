// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!


//Sets currentColor Box
let currentColor = document.querySelector("#current-color");

 

document.querySelectorAll(".color").forEach((color) => {
   color.addEventListener("click", () => {
     currentColor.style.background = color.style.background;
   });
 });

 
 
 document.querySelectorAll(".cell").forEach((cell) => {
   cell.addEventListener("click", () => {
     cell.style.background = currentColor.style.background;
   });
  });   
  
  
  
  
  const resetBtn = document.querySelector(".resetter");

  resetBtn.addEventListener("click", () => {
  
    const colorPaletteCells = document.querySelectorAll(".cell");
  
    colorPaletteCells.forEach( cell => cell.style.background = "white");
    
    currentColor.style.background = "white";
    
  });

  // const paintAll = document.querySelector(".paintAll");

  // paintAll.addEventListener("click", () => {

  //   colorPaletteCells.forEach( cell => {
      
  //     cell.style.background = currentColor.style.background 
    
  //   });
  // });

