//-------------- Hierarchy -------------
const html = document.querySelector("html");
const body = document.querySelector("body");
const ecran = document.createElement("div");
    const calcul = document.createElement("div");
    ecran.appendChild(calcul);

    const response = document.createElement("div");
    ecran.appendChild(response);

const keyboard = document.createElement("div");
const subKeyboard = document.createElement("div");
const floorA = document.createElement("div");
const floorB = document.createElement("div");
const floorC = document.createElement("div");
const floorD = document.createElement("div");
const floorE = document.createElement("div");
    
keyboard.appendChild(subKeyboard);
subKeyboard.appendChild(floorA);
subKeyboard.appendChild(floorB);
subKeyboard.appendChild(floorC);
subKeyboard.appendChild(floorD);
subKeyboard.appendChild(floorE);
    
html.appendChild(body);
body.appendChild(ecran);
body.appendChild(keyboard);
//------------End Hierarchy -------------

//------------Buttons and operations -------------
const operations = ["(", ")", "%","AC","7","8","9","/", "4","5", "6","*","1", "2","3","-","0",".","=","+",];
for (let i = 0; i <= operations.length - 1; i++) {
  //loop creation of buttons for each values of the array
  const op = document.createElement("button");
  op.textContent = operations[i];
  //------------A bit of style for the buttons -------------
  op.style.width = "17%";
  op.style.height = "65px";
  op.style.borderRadius = "20%";
  op.style.backgroundColor = "rgb(168, 163, 175)";
  op.style.color = "white";
  op.style.fontSize = "20px";
  op.style.fontWeight = "bold";
  op.style.fontFamily = "Arial";
  op.style.boxShadow = "2px 2px 5px rgb(63, 60, 68) ";
  //------------End of bit of style -------------
    
  //------------- Operations --------------------
  let cases = operations[i];
  switch (cases) {
    case "AC":
      op.addEventListener("click", function () {
        response.textContent = "";
      });
      break;

    case "=":
      op.addEventListener("click", function () {
        response.textContent = Function("return " + ecran.textContent)();
      });
      op.style.backgroundColor = "rgb(58, 147, 255)";
      break;

    default:
      op.addEventListener("click", function () {
        calcul.textContent += operations[i];
      });
  }
  //------------- End Operations --------------------

  if (i <= 3) {
    floorA.appendChild(op);
  }
  if (i > 3 && i <= 7) {
    floorB.appendChild(op);
  }
  if (i > 7 && i <= 11) {
    floorC.appendChild(op);
  }
  if (i > 11 && i <= 15) {
    floorD.appendChild(op);
  }
  if (i > 15 && i <= 19) {
    floorE.appendChild(op);
  }
}
