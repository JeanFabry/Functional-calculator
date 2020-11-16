const body = document.querySelector("body");
const ecran = document.createElement("div");

for (let i = 0; i <= 9; i++) {
  const button = document.createElement("button");
  button.textContent = i;

  body.appendChild(button);

  button.addEventListener("click", function () {
    ecran.textContent += String(i);
  });
}

const operations= ["+","-","*",":"]
for (let i=0; i<= operations.length-1;i++) {
const op = document.createElement("button");
op.textContent = operations[i];
body.appendChild(op);
op.addEventListener("click", function () {
  ecran.textContent += operations[i];
});
}

const c = document.createElement("button");
c.textContent = "C";
body.appendChild(c);
c.addEventListener("click", function () {
  ecran.textContent = "";
});

const equal = document.createElement("button");
equal.textContent = "=";
body.appendChild(equal);
equal.addEventListener("click", function () {
  ecran.textContent=eval(ecran.textContent);
});


body.appendChild(ecran);
ecran.style.border = "1px solid black";
ecran.style.height = "100px";
