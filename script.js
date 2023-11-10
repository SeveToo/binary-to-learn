const number = document.querySelector(".number");
const node = document.querySelectorAll(".binary .node");

// buttons
const controls = document.querySelector(".controls");
const start = controls.querySelector(".start");
const stop = controls.querySelector(".stop");
const restart = controls.querySelector(".restart");
const speed025 = controls.querySelector(".speed025");
const speed05 = controls.querySelector(".speed05");
const speed1 = controls.querySelector(".speed1");
const speed2 = controls.querySelector(".speed2");
const zeroOne = controls.querySelector(".zeroOne");
const numbers = controls.querySelector(".numbers");

let i = 0;
let speed = 900;
let zeroAndOne = false;

function containOfBox(x, n) {
  if (zeroAndOne) {
    x.textContent = n;
  } else {
    x.textContent = x.getAttribute("date-nr");
  }
}

function toBinary(x) {
  let suma = 0;
  node.forEach((el) => {
    el.classList.remove("active");
    containOfBox(el, 0);
  });
  for (let i = 0; i < node.length; i++) {
    const el = node[i];
    const elValue = parseInt(node[i].getAttribute("date-nr"));
    if (suma + elValue < x) {
      suma += elValue;
      el.classList.add("active");
      containOfBox(el, 1);
    } else if (suma + elValue == x) {
      el.classList.add("active");
      containOfBox(el, 1);

      break;
    }
  }
}

function licz() {
  if (i > 255) clearInterval(licznik);
  else {
    number.textContent = i;
    toBinary(i);
    i++;
  }
}
let licznik;
function startFunction() {
  clearInterval(licznik);
  licznik = setInterval(licz, speed);
}

start.onclick = () => {
  startFunction();
};

stop.onclick = () => {
  clearInterval(licznik);
};

function clear() {
  number.textContent = 0;
  node.forEach((el) => {
    el.classList.remove("active");
    el.textContent = "0";
  });
  i = 0;
}

restart.onclick = () => {
  clearInterval(licznik);
  clear();
};

speed025.onclick = () => {
  speed = 1500;
  startFunction();
};
speed05.onclick = () => {
  speed = 900;
  startFunction();
};
speed1.onclick = () => {
  speed = 600;
  startFunction();
};
speed2.onclick = () => {
  speed = 400;
  startFunction();
};

function changeFormat(a) {
  if (a) {
    node.forEach((el) => {
      if (el.classList[1]) {
        el.textContent = 1;
      } else {
        el.textContent = 0;
      }
    });
  } else {
    node.forEach((el) => {
      el.textContent = el.getAttribute("date-nr");
    });
  }
}

zeroOne.onclick = () => {
  changeFormat(true);
  zeroAndOne = true;
};
numbers.onclick = () => {
  changeFormat(false);
  zeroAndOne = false;
};
