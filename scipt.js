const container = document.querySelector("#container");
const newGridButton = document.querySelector("#newGrid");
const rainbowModeButton = document.querySelector("#rainbowMode");
const gridCell = document.createElement("div");
let planeDimensions =   16;
let rainbowMode = false;

function createGrid (){
    const gridCellWidth = container.clientWidth/planeDimensions ;
    const gridCellHeight = container.clientHeight/planeDimensions;
    for(let i = 0; i < planeDimensions*planeDimensions;i++){
        const gridCell = document.createElement("div");
        gridCell.setAttribute("class","gridCell");
        gridCell.setAttribute("style",`height:${gridCellHeight}px; width:${gridCellWidth}px; opacity:10%;`);
        container.appendChild(gridCell);
    }
    container.addEventListener("mouseover",(event) => {
        let target = event.target;

        if (target.className === "gridCell"){
            if(rainbowMode){
                target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
                target.style.opacity-= "-0.1";
            }else{
                target.style.backgroundColor = 'red';
                target.style.opacity-= "-0.1";
            }

        }
    })
}
createGrid();

function removeGrid(){
    const gridCells = document.querySelectorAll(".gridCell");
    console.log(gridCells);
    for(let cell =0; cell < gridCells.length;cell++){
        gridCells[cell].remove();
    }
}


newGridButton.addEventListener("click",() =>{
  newGridDimensions = prompt("Please enter new grid dimensions(1-100)","16")
    if(newGridDimensions<=100 && newGridDimensions>0){
        planeDimensions = newGridDimensions;
        removeGrid();
        createGrid();
    }else{
        alert("hell nah bruh");
    }
})

rainbowModeButton.addEventListener("click",() =>{
    if(rainbowMode){
        rainbowMode = false;
    }else{
        rainbowMode = true;
    }
})
