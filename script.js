let no_prime_text = [];

document.getElementById("nums").addEventListener("keyup", function (event) {
  const s = performance.now();
  const val = event.target.value;
  let arrNumeros = val
    .split(",")
    .filter((el) => el)
    .map((num) => Math.abs(parseInt(num)));
  arrNumeros = arrNumeros.filter((x, i) => arrNumeros.indexOf(x) === i);

  let arrPrime = buscarPrimos(arrNumeros);
  document.getElementById("num_filtered").innerHTML = arrPrime;
  const arr = no_prime_text
    .map((el) => `<li class="list-group-item">${el}</li>`)
    .join("");
  document.getElementById("no_prime").innerHTML = arr;
  const dis = (performance.now() - s).toFixed(3);
  document.getElementById("performance").innerHTML = dis;
});

function esPrimo(num) {
  if (num < 2) {
    no_prime_text.push(`${num} no es primo porque es menor a 2`);
    return false;
  }
  if (num % 2 == 0) {
    no_prime_text.push(`${num} no es primo porque es divisible entre 2`);
    return false;
  }
  if (num % 3 == 0) {
    no_prime_text.push(`${num} no es primo porque es divisible entre 3`);
    return false;
  }
  for (let i = 5; i < num / 2; i += 2) {
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
