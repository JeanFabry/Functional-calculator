const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection="column";
body.style.alignItems = "center";
body.style.width="50%";
const ecran = document.createElement("div");
ecran.style.border = "1px solid black";
ecran.style.height = "75px";
ecran.style.width= "50%";

const keyboard = document.createElement("div");
keyboard.style.display="flex";
keyboard.style.flexDirection="column";
keyboard.style.border = "1px solid black";
keyboard.style.width= "50%";

    const floorA = document.createElement("div");
    floorA.style.display="flex";
    floorA.style.justifyContent = "space-between";

    const floorB = document.createElement("div");
    floorB.style.display = "flex";
    floorB.style.justifyContent = "space-between";

    const floorC = document.createElement("div");
    floorC.style.display = "flex";
    floorC.style.justifyContent = "space-between";

    const floorD = document.createElement("div");
    floorD.style.display="flex";
    floorD.style.justifyContent = "space-between";
    
    const floorE = document.createElement("div");
    floorE.style.display = "flex";
    floorE.style.justifyContent = "space-between";

body.appendChild(ecran);
body.appendChild(keyboard);
keyboard.appendChild(floorA);
keyboard.appendChild(floorB);
keyboard.appendChild(floorC);
keyboard.appendChild(floorD);
keyboard.appendChild(floorE);


const operations = ["(", ")", "%", "AC", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"]
for (let i=0; i<= operations.length-1;i++) {
    const op = document.createElement("button");
    op.textContent = operations[i];
    op.style.width="25%";
    
    // body.appendChild(op);

    let cases = operations[i];
    switch(cases){

        case "AC":
        op.addEventListener("click", function () {
        ecran.textContent = "";})
        break;

        case "=":
        op.addEventListener("click", function (){
        ecran.textContent=Function('return ' + ecran.textContent)();
        });
        break;

        default:
        op.addEventListener("click", function () {
        ecran.textContent += operations[i];
        });   
    };   

     if (i <= 3) {
       floorA.appendChild(op);
     }
     if ((i > 3) && (i <= 7)) {
       floorB.appendChild(op);
     }
     if ((i > 7) && (i <= 11)) {
       floorC.appendChild(op);
     }
     if (i > 11 && i <= 15) {
       floorD.appendChild(op);
     }
     if (i > 15 && i <= 19) {
       floorE.appendChild(op);
     }
}


