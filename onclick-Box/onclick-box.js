let body=document.body;
body.style.background="lightblue";
body.style.height="100vh";
// body.style.width="100vw";



document.addEventListener('click', function(event){
    let container=document.createElement("div");
    container.classList.add("box");
    body.appendChild(container);
    container.style.height="100px";
    container.style.width="150px";
    container.style.border="2px solid black";
    container.style.position="absolute";
    container.style.background="blue";
    container.innerHTML="NEW BOX";
    container.style.textAlign="center";
    container.style.paddingTop="60px";
    container.style.color="white";
    container.style.top= `${event.clientY}px`;
    container.style.left= `${event.clientX}px`;

})