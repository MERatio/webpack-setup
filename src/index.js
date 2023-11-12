import { cube } from "./math.js";
import "./style.css";
import Icon from "./icon.svg";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

// To test babel (> 0.25% browserslistc)

// This should not be transpiled
const obj = {};
const foo = obj.foo ?? "default";
console.log(foo);

// This should be transpiled
console.log(/[\p{ASCII}&&\p{Decimal_Number}]/v);

function component() {
  const element = document.createElement("pre");

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n",
  );

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
