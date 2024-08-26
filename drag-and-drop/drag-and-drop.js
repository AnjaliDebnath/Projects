let body=document.body;
let smallbox=document.createElement("div");
smallbox.classList.add("small");
body.appendChild(smallbox);
smallbox.id="chotu";
smallbox.style.width="100px";
smallbox.style.height="100px"
smallbox.style.backgroundColor= "lightblue";
smallbox.style.border="1px solid black";
smallbox.innerHTML="BOX 1";
smallbox.style.textAlign="center";
smallbox.draggable="true";

const mainDiv = document.createElement('div');
body.appendChild(mainDiv);


let bigbox=document.createElement("div");
bigbox.classList.add("big");
mainDiv.appendChild(bigbox);
bigbox.style.width="320px";
bigbox.style.height="300px"
bigbox.style.backgroundColor= "lightblue";
bigbox.style.border="2px dotted black";
bigbox.innerHTML="Drop here";
bigbox.style.textAlign="center";
bigbox.style.marginTop="50px";
bigbox.style.paddingTop="25px";


const draggable= document.querySelectorAll('.small');
draggable.forEach((eve) => {
    eve.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

const dropArea = document.querySelectorAll('.big');
dropArea.forEach((eve) => {
    eve.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    eve.addEventListener('drop',(e)=>{
        e.preventDefault();
        const id= e.dataTransfer.getData('text');
        const dragElement= document.getElementById(id);
        eve.appendChild(dragElement);
        eve.style.justifyContent='center';
        eve.style.alignSelf='center';
    });
});







