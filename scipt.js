const container = document.querySelector("#container");
const newGridButton = document.querySelector("#newGrid");
const gridCell = document.createElement("div");
let planeDimensions =   16;

function createGrid (){
    const gridCellWidth = container.clientWidth/planeDimensions - 2;
    const gridCellHeight = container.clientHeight/planeDimensions -2;
    for(let i = 0; i < planeDimensions*planeDimensions;i++){
        const gridCell = document.createElement("div");
        gridCell.setAttribute("class","gridCell");
        gridCell.setAttribute("style",`height:${gridCellHeight}px; width:${gridCellWidth}px; border: 0.5px solid black;`);
        container.appendChild(gridCell);
    }
    container.addEventListener("mouseover",(event) => {
        let target = event.target;
        console.log(target.className);
        console.log("smth happened");
        if (target.className === "gridCell"){
            target.style.backgroundColor = 'red';
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
