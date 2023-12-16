let fillings1 = prompt("Which momo do you want?");

function makeMomo(fillings) {
  let momo = "Your" + "  " + fillings + " " + "momo is ready";
  return momo;
}

let momo = makeMomo(fillings1);
console.log(momo);
