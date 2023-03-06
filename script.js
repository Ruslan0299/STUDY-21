//перше завдання
function maxNumber(a, b) {
  if (a === b) {
    return "a = b";
  }
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
let number1 = prompt("Please enter your number");
let number2 = prompt("please enter your number");
alert(maxNumber(+number1, +number2));

//друге завдання
function revers(number) {
  if (typeof number === "number") {
    return -number;
  } else {
    return "Not a number";
  }
}
let number = Number(prompt("Enter the number"));
alert(revers(number));

//третє завдання
function three(number, count) {
  if (typeof number === "number" && typeof count === "number") {
    let result = number;
    for (let i = 0; i < count; i++) {
      result += 3;
    }
    return result;
  } else {
    return "Not a number";
  }
}
let number = prompt("Enter the number");
let count = prompt("Enter the number");
alert(three(+number, +count));

//четверте завдання
function getMetric(metric, km, m, cm) {
  let result;
  if (metric === "m") {
    result = m;
  } else if (metric === "cm") {
    result = cm;
  } else {
    alert("Invalid type");
  }
  return result;
}
//перетворення в метри
function KmToM(km) {
  return km * 1000;
}
//перетоврення в сантиметри
function KmToCm(km) {
  return km * 100000;
}
//запрос данних у користувача
let metric = prompt("Enter your type(m or cm)");
let km = +prompt("Enter number in kilometers");
//демонстрація результату
let result = getMetric(metric, km, KmToM(km), KmToCm(km));
alert(`Result: ${result} ${metric}`);
