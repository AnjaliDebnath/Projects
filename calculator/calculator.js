document.querySelectorAll('.btn').forEach(bttn => {
    bttn.addEventListener('click', () => {
        const display = document.getElementById('Display');
        const value = bttn.getAttribute('data-value');

        if (value === 'clear') {
            display.value = '';
        } else if (value === 'delete') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                display.value = eval(display.value) || 0;
            } catch(error) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});




















































// // let body=document.body;
// // body.style.display="flex";
// // // body.style.height="75vh";
// // // body.style.width="100vh";

// // let calculator=document.createElement("div");
// // calculator.classList.add("calculator");
// // calculator.style.border = "2px solid #333";
// // calculator.style.borderRadius = "10px";
// // calculator.style.height="75vh"
// // calculator.style.width = "50vh";
// // calculator.style.display="flex";
// // //calculator.style.alignItems="center"
// // body.appendChild(calculator);

// // let display=document.createElement("input");
// // calculator.appendChild(display);
// // display.classList.add("display");
// // display.style.backgroundColor="beige";
// // display.style.width="100vh";
// // display.style.height="10vh";
// // display.style.display="flex";
// // display.style.border = "2px solid #333";
// // display.style.alignItems="flex-start";


// // script.js
// let display = document.getElementById('display');

// function appendToDisplay(value) {
//     display.innerHTML += value;
// }

// function clearDisplay() {
//     display.innerHTML = '';
// }

// function calculateResult() {
//     try {
//         display.innerHTML = eval(display.innerHTML);
//     } catch (e) {
//         display.innerHTML = 'Error';
//     }
// }
