let body = document.body;
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column";

let chess=document.createElement("div")
body.appendChild(chess);

let parentDiv = document.createElement("div");
parentDiv.classList.add("parent-div");
chess.appendChild(parentDiv);

parentDiv.style.border = "2px solid black";
parentDiv.style.width = "400px";
parentDiv.style.height = "400px"; 
parentDiv.style.display = "grid";
parentDiv.style.gridTemplateColumns = "repeat(8, 50px)";

let num=1;
for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
        let cell= document.createElement("div");
        parentDiv.appendChild(cell);
        cell.style.border=" 1px  solid black";

        if((i+j)%2==0){
            cell.style.backgroundColor="black";
            cell.style.color="white";
            cell.addEventListener("mouseover",function(){
                cell.style.backgroundColor="light grey";
            });
            cell.addEventListener("mouseout",function(){
                cell.style.backgroundColor="black";
            });

        }
        else{
            cell.style.backgroundColor="white";
            cell.addEventListener("mouseover",function(){
                cell.style.backgroundColor=" grey";
            });
            cell.addEventListener("mouseout",function(){
                cell.style.backgroundColor="white";
            });
        }
        cell.innerHTML=num;
        num++;

        cell.style.display="flex";
        cell.style.alignItems="center";
        cell.style.justifyContent="center";
        
        
    }
}






