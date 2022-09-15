let no_prime_text = [];

document.getElementById("nums").addEventListener("keyup", function (event) {
  const val = event.target.value;
  let arrNumeros = val
    .split(",")
    .filter((el) => el)
    .map((num) => parseInt(num));
  arrNumeros = arrNumeros.filter((x, i) => arrNumeros.indexOf(x) === i);

  let arrPrime = buscarPrimos(arrNumeros);
  document.getElementById("num_filtered").innerHTML = arrPrime;
  const arr = no_prime_text
    .map((el) => `<li class="list-group-item">${el}</li>`)
    .join("");
  document.getElementById("no_prime").innerHTML = arr;
});

function esPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      no_prime_text.push(`${num} no es primo porque es divisible entre ${i}`);
      return false;
    }
  }
  return true;
}

function buscarPrimos(arrNumeros) {
  no_prime_text = [];
  return arrNumeros.filter((num) => esPrimo(num));
}
