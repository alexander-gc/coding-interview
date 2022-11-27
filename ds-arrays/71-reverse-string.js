function reverse(str = "") {
  let result = [];

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }

  return result.join("");
}

//console.log(reverse("Hola como estas"));

function reverse2(str = "") {
  return str.split("").reverse().join("");
}

//console.log(reverse2("Hola como estas"));

const reverse3 = (str = "") => [...str].reverse().join("");

console.log(reverse3("Hola como estas"));
