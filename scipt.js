const container = document.querySelector("#container");
const gridCell = document.createElement("div");
let planeDimensions =   16;
const gridCellWidth = container.clientWidth/planeDimensions - 2;
const gridCellHeight = container.clientHeight/planeDimensions -2;
for(let i = 0; i < planeDimensions*planeDimensions;i++){
    const gridCell = document.createElement("div");
    gridCell.setAttribute("class","gridCell");
    gridCell.setAttribute("style",`height:${gridCellHeight}px; width:${gridCellWidth}px; border: 1px solid black;`);
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
