//-------------- Hierarchy -------------
const html = document.querySelector("html");
const body = document.querySelector("body");
const historique = document.createElement("div");
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
body.appendChild(historique);

//------------End Hierarchy ------------

//------------Functions Called during events (click & keypress) from buttons generated (see further) ------------
   let interrupteur = true;//interrupteur to prevent repetition of operation +,-,/,*,. (see operationsNoRepeat l.79)

   function kill() { //reads content on the screen and returns its results
     return Function("return " + calcul.textContent)();
   }

   function ac(e) { //refresh screen
     e.preventDefault();
     if (e.code == "Space" || e.code == undefined) {
       calcul.textContent = "";
       response.textContent = "";
     }
   }

   function equal(e) { //displays results on screen and historic
     e.preventDefault();
     if (e.code == "Enter" || e.code == "NumpadEnter" || e.code == undefined) {
       let linebreak = "<br>";
       response.textContent = kill();
       historique.innerHTML +=
         calcul.textContent + " =" + response.textContent + linebreak;
       historique.style.display = "block";
     }
   }

   function ecriture(e, i) { //allows to display the content of the buttons on the screen
     console.log(e);
     e.preventDefault();
     if (e.code == "Numpad" + i || e.code == undefined || e.key == i) {
       if ((response.textContent == "")||(calcul.textContent.slice(-1) == "*" ) ||
            (calcul.textContent.slice(-1) == "/" )||
            (calcul.textContent.slice(-1) == "-" ) ||
            (calcul.textContent.slice(-1) == "+" )) {
         calcul.textContent += i;
       }  
          else {
            calcul.textContent = i;
            response.textContent = "";
          }
       }
       interrupteur = true;
       console.log(interrupteur);
     }

   function operationsNoRepeat(e, i) { //prevent repetition of operation +,-,/,*,.
     if (e.key == i || e.code == undefined) {
       if (interrupteur === true) {
         calcul.textContent += i;
       }
       interrupteur = false;
     }
   }

//------------ End Functions Called during events (click & keypress) ------------   

//------------ Generating Buttons & Events -------------
const operations = [
  "(",
  ")",
  "%",
  "AC",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
]; //array content of the calculator

for (let i = 0; i <= operations.length - 1; i++) {
  //loop creation of buttons for each values of the array
  const op = document.createElement("button");
  let cases = operations[i];
  let pointKiller = false;
  op.textContent = cases;

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

  //------------- Events  --------------------
  switch (cases) { //events and functions called for each possibility of use of the calculator
    case "AC":
      op.addEventListener("click", ac);
      body.addEventListener("keypress", ac);
      break;

    case "=":
      op.addEventListener("click", equal);
      body.addEventListener("keypress", equal);
      op.style.backgroundColor = "rgb(58, 147, 255)";
      break;

    case "%":
      op.addEventListener("click", function (e) {
        response.textContent = calcul.textContent / 100;
        calcul.textContent += "%";
      });
      break;

    default:
      if (
        cases == "." ||
        cases == "+" ||
        cases == "-" ||
        cases == "*" ||
        cases == "/"
      ) {
        op.addEventListener("click", function (e) {
          operationsNoRepeat(e, cases);
        });
        body.addEventListener("keypress", function (e) {
          operationsNoRepeat(e, cases);
        });
      } else {
        op.addEventListener("click", function (e) {
          ecriture(e, cases);
        });
        body.addEventListener("keypress", function (e) {
          ecriture(e, cases);
        });
      }
  }
  //------------- End Events --------------------

  //------------- Putting buttons generated in differents divs--------------------
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
  //------------- End putting buttons generated in differents divs-------------------
}
//------------ End Generating Buttons & Events -------------