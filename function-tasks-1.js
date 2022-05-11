const elements = [2, "", 1 > 2, 1410, "bolsevikas", "pokstas"];

console.groupCollapsed(
  "1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą."
);
{
  // ...sprendimas ir spausdinimas
  function getFirstEl(arr) {
    return arr[0];
  }
  console.log(getFirstEl(elements));
}
console.groupEnd();

console.groupCollapsed(
  "2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina."
);
{
  const elementsCopy = [2, "", 1 > 2, 1410, "bolsevikas", "pokstas"];

  // ...sprendimas ir spausdinimas
  function shift(arr) {
    let removedEl;
    for (let i = 0; i < arr.length; i++) {
      if (i < 1) {
        removedEl = arr[0];
      }
      arr[i] = arr[i + 1];
    }
    arr.splice(arr.length - 1, arr.length - 1);
    return removedEl;
  }
  console.log(shift(elementsCopy), elementsCopy);
}
console.groupEnd();

console.groupCollapsed(
  "3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą."
);
{
  // ...sprendimas ir spausdinimas
  function returnLastEl(arr) {
    return arr[arr.length - 1];
  }
  console.log(returnLastEl(elements));
}
console.groupEnd();

console.groupCollapsed(
  "4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina."
);

{
  const elementsCopy = [2, "", 1 > 2, 1410, "bolsevikas", "pokstas"];

  // ...sprendimas ir spausdinimas
  function pop(arr) {
    let removedEl = arr[arr.length - 1];
    arr.splice(arr.length - 1);
    return removedEl;
  }
  console.log(pop(elementsCopy), elementsCopy);
}
console.groupEnd();

console.groupCollapsed(
  "5. Parašykite funkciją, kuri grąžina elementų kiekį masyve"
);
{
  // ...sprendimas ir spausdinimas
  function arrLength(arr) {
    return arr.length;
  }
  console.log(arrLength(elements));
}
console.groupEnd();

console.groupCollapsed(
  "6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą"
);
{
  // ...sprendimas ir spausdinimas
  function indexOfLastEl(arr) {
    return arr.length - 1;
  }
  console.log(indexOfLastEl(elements));
}
console.groupEnd();

console.groupCollapsed(
  "7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis"
);
{
  // ...sprendimas ir spausdinimas
  function printIndexes(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
    }
  }
  printIndexes(elements);
}
console.groupEnd();

console.groupCollapsed(
  "8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis"
);
{
  // ...sprendimas ir spausdinimas
  function printValues(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  printValues(elements);
}
console.groupEnd();

console.groupCollapsed(
  "9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  "
);
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // ... sprendimas ir spausdinimas
  function keyAndValuePairs(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`[${i}] => ${arr[i]}`);
    }
  }
  keyAndValuePairs(elements);
}
console.groupEnd();

console.groupCollapsed(
  "10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo."
);
{
  // ...sprendimas ir spausdinimas
  function printValuesReversed(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
    }
  }
  printValuesReversed(elements);
}
console.groupEnd();

console.groupCollapsed(
  "11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ..."
);
{
  // ...sprendimas ir spausdinimas
  function printIndexesRow(arr) {
    let stringWithIndexes = "";
    for (let i = 0; i < arr.length; i++) {
      stringWithIndexes += i + " ";
      if(i === arr.length - 1){
        console.log(stringWithIndexes)
      }
    }
  }
  console.log(printIndexesRow(elements));
}
console.groupEnd();

console.groupCollapsed(
  "12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48"
);
{
  // ...sprendimas ir spausdinimas
  function printValuesRow(arr) {
    let stringWithValues = "";
    for (let i = 0; i < arr.length; i++) {
      stringWithValues += arr[i] + ", ";
      if(i === arr.length - 1){
        console.log(stringWithValues.slice(0 , stringWithValues.length -2))
      }
    }
  }
  printValuesRow(elements);
}
console.groupEnd();

console.groupCollapsed(
  "13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:"
);
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  // ...sprendimas ir spausdinimas
  function keyAndValuePairsRow(arr) {
    let keysAndValues = "";
    for (let i = 0; i < arr.length; i++) {
      keysAndValues += `[${i}] => ${arr[i]}`;
    }
    return keysAndValues;
  }
  console.log(keyAndValuePairsRow(elements));
}
console.groupEnd();
