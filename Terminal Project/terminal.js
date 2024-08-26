function setBackgroundColor() {
  const angle = Math.round(Math.random() * 360); // Random angle between 0 and 360 degrees
  const hue1 = Math.round(Math.random() * 360); // Random hue for the first color
  const hue2 = (hue1 + Math.round(Math.random() * 60 + 180)) % 360; // Second color, contrasting hue
  const hue3 = (hue1 + Math.round(Math.random() * 60 + 120)) % 360; // Third color, another contrasting hue

  const colorA = `HSL(${hue1}, 80%, 70%)`;
  const colorB = `HSL(${hue2}, 80%, 70%)`;
  const colorC = `HSL(${hue3}, 80%, 70%)`;

  document.body.style.background = `linear-gradient(${angle}deg, ${colorA}, ${colorB}, ${colorC})`;
}

let strCon = "To get started; type help and press Enter!! ";
const animatedText = document.getElementById("animatedText");
const terminalBody = document.querySelector(".terminal-body");
const cursor = document.getElementById("cursor");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const help = document.getElementById("help");
const line1 = document.getElementById("l1");
const line2 = document.getElementById("l2");
const line3 = document.getElementById("l3");
const helpLine = document.getElementById("helpLine");

function getCharacterByCharacter(str) {
  let i = 0;
  let txt = setInterval(() => {
    cursor.style.visibility = 'visible';
    animatedText.innerHTML += str.charAt(i);
    i++;
    if (i >= str.length) {
      clearInterval(txt);

      setTimeout(() => {
        // Stop the cursor from blinking after typing is complete
        cursor.style.visibility = "hidden"; // Hide the cursor

        text1.innerHTML = "anjali @ Mi-Notebook_14";
        text2.innerHTML = "(main)";
        text3.innerHTML = "~>";
        help.value = "help";
        help.focus();
        help.select();
        helpLine.style.visibility = "visible";
      }, 1000);
    }
  }, 50);
}
document.addEventListener("animationend", animText);

function animText() {
  getCharacterByCharacter(strCon);
}

function command(input) {
  line1.innerHTML = `<span class="name">anjali @ Mi-Notebook_14</span> <span class="main">(main)</span> <span class="arrow">~></span> Executed command: ${input}`;
}

async function factFile() {
  const file = "random.json";
  let response = await fetch(file);
  let fact = await response.json(); 

  let randNo = Math.floor(Math.random() * fact.length);
  return [fact[randNo].fact];
}

async function randomFunction() {
  const language = await langUsed();
  animatedText.innerHTML = ``;
  const rand = await factFile();
  let str1 = `${language[0]} (${language[1]}) Here's an interesting fact about Anjali:   ${rand[0]}`; 
  getCharacterByCharacter(str1);
}



async function langUsed() {
  const file = "greeting.json";
  let response = await fetch(file);
  let lang = await response.json();

  let randNo = Math.floor(Math.random() * lang.length);
  return [lang[randNo].hello, lang[randNo].language];
}

async function helpFunction() {
  const language = await langUsed();
  animatedText.innerHTML = ``;
  let str1 = `${language[0]} (${language[1]})! The following commands are the only ones that are currently available: help, resume, about, linkedin, random, github, contact, date.`;

  getCharacterByCharacter(str1);
}

async function resumeFunction(){
    const language = await langUsed();
  animatedText.innerHTML = ``;
  let str1 = `${language[0]} (${language[1]}) Thanks for the query. Get my resume here: https://shorturl.at/BXeUW. Hold on, opening in a new tab. Please check if the pop-ups are not blocked`;
  setTimeout(()=>{
    window.open("https://shorturl.at/BXeUW", "_blank");
  },10000);

  getCharacterByCharacter(str1);
}

async function githubFunction(){
    const language = await langUsed();
  animatedText.innerHTML = ``;
  let str1 = `${language[0]} (${language[1]}) Thanks for the query. Get my github profile here: https://github.com/AnjaliDebnath. Hold on, opening in a new tab. Please check if the pop-ups are not blocked`;
  setTimeout(()=>{
    window.open("https://github.com/AnjaliDebnath", "_blank");
  },10000);

  getCharacterByCharacter(str1);
}

async function aboutFunction() {
  const language = await langUsed();
  animatedText.innerHTML = ``;
  let str1 = `${language[0]} (${language[1]}) Thanks for the query.   Anjali is a detail-oriented FULL STACK DEVELOPER with experience in developing scalable and efficient software solutions using MERN Technology, with a strong background in algorithms, data structures, and system design. Committed to deliver high-quality code, collaborating in Agile teams, and continuously learning emerging technologies`;
  
  getCharacterByCharacter(str1);
}

async function contactFunction(){
  const language = await langUsed();
  animatedText.innerHTML = ``;
  let str1 = `${language[0]} (${language[1]}) Thanks for the query.  Anjali is reachable at: anjalidebnath1003@gmail.com. You maybe be looking for the following commands: linkedin, github, about`;
  getCharacterByCharacter(str1);
}

async function dateFunction() {
  const now = new Date();

  // Array of month names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get individual date components
  const month = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  // Get individual time components
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  // Determine AM/PM
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert to 12-hour format

  // Format the string
  const str1 = `${language[0]} (${language[1]}) Thanks for the query. The current Date-Time Stamp is: ${month} ${day}, ${year} at ${hours}:${minutes}:${seconds} ${ampm}`;
  
  // Display the date-time string
   getCharacterByCharacter(str1);
}

async function errorFunction() {
  animatedText.innerHTML = '';
  let language = await langUsed(); // Rename to avoid conflict
  let strContent = `${language[0]} (${language[1]})! Whoops, this cannot be done. Please use one of the following available commands: help, resume, about, linkedin, random, github, contact, date. ;
}

function checkInputValue(input) {
  command(input);
  line2.style.display = "none";
  helpLine.style.visibility = "hidden";
  switch (input) {
    case "help":
        helpFunction();
        break;
    case "resume":
        resumeFunction();
        break;
    case "about":
        aboutFunction();
        break;
    case "linkedin":
        linkedinFunction();
        break;
    case "random":
        randomFunction();
        break;
    case "github":
        githubFunction();
        break;
    case "contact":
        contactFunction();
        break;
    case "date":
        dateFunction();
        break;
    default:
      errorFunction();
      break;
        


  }
}

function inputCommand(e) {
  if (e.key == "Enter") checkInputValue(help.value);
}

//execution starts from here after pressing enter
help.addEventListener("keypress", inputCommand);



let minmax = document.querySelector(".button minimize");

    minmax.addEventListener("click", minmaxTab);

    function minmaxTab() {
      if (terminal.style.height === "100vh") {
        Terminal.style.height = "50vh";
        Terminal.style.width = "100%";
        Terminal.style.maxWidth = "900px";
      } else {
        Terminal.style.height = "100vh";
        Terminal.style.width = "100%";
        Terminal.style.maxWidth = "100%";
      }
    }

    let close = document.querySelector(".close");
    close.addEventListener("click", closeTab);

    function closeTab() {
      window.close();
    }
  })
  .catch((error) => console.error("Error fetching the JSON file:", error));

