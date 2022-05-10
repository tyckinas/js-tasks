// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulElBy2(el) {
    // ... code
    return el * 2
  }
  const arrMultipliedBy2 = numbers.map(mulElBy2)
  console.log({
    numbers,
    result: arrMultipliedBy2
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerElBy2(el) {
    // ... code
    return el ** 2
  }
  const arrPowerBy2 = numbers.map(powerElBy2)
  console.log({
    numbers,
    result: arrPowerBy2
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulElementByIndex(el, i) {
    // ... code
    return el * i
  }
  const elmentsMultByIndex = numbers.map(mulElementByIndex)
  console.log({
    numbers,
    result: elmentsMultByIndex
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(el) {
    // Jūsų kodas
    return el >= 0
  }
  console.log({
    numbers,
    result: numbers.filter(filterPositives)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(el) {
    // Jūsų kodas
    return el < 0
    
  }
  console.log({
    numbers,
    result: numbers.filter(filterNegatives)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(el) {
    // Jūsų kodas
    return el % 2 === 0;
  }
  console.log({
    numbers,
    result: numbers.filter(filterEquals)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(el) {
    // Jūsų kodas
    return el % 2 !== 0;

  }
  console.log({
    numbers,
    result: numbers.filter(filterOdds)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(el) {
    // ... code
    if(el < 0) return el * -1
    else return el
  }
  const arrWithAbsoluteValues = numbers.map(arrAbsoluteValues) 

  console.log('---');
  console.log({
    numbers,
    result: arrWithAbsoluteValues
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(el, i) {
    // Jūsų kodas
    return el ** i
  }
  const arrElsPowByindex = numbers.map(powArrElementsByIndex)
  console.log({
    numbers,
    result: arrElsPowByindex
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(el) {
    // Jūsų kodas
    return el % 1 === 0

  }
  console.log({
    numbers,
    result: numbers.filter(filterNaturals)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(el) {
    // Jūsų kodas
    if(el % 1 !== 0) return Math.round(el)
    else return el
  }
  const arrElementsRounded = numbers.map(absArrElements)
  console.log({
    numbers,
    result: arrElementsRounded
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(el, i) {
    //  Jūsų kodas
    return i === 0 || i % 2 === 0
  }
  console.log({
    numbers,
    result: numbers.filter(filterEverySecond)
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(el, i) {
    //  Jūsų kodas
    return i === 0 || i % 5 === 0

  }
  console.log({
    numbers,
    result: numbers.filter(filterEveryFifth)
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr) {
    // ... code
    arr.forEach((el , i) => console.log(`[${i}] => ${el}`))
  }
  printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    // Jūsų kodas
   return arr.reduce((sum, currValue) => sum += currValue ,0)
  }

  console.log({
    numbers,
    result: sumArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    // Jūsų kodas
    return arr.reduce((avg , currValue) => (avg += currValue / arr.length) ,0)
  }

  console.log({
    numbers,
    result: avgArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    //  Jūsų kodas
   return arr.reduce((max, currentValue) => {
      if(currentValue > max)  max = currentValue
      return max
    },arr[0])

  }

  console.log({
    numbers,
    result: arrMax(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    //  Jūsų kodas
    return arr.reduce((min, currentValue) => {
      if(currentValue < min)  min = currentValue
      return min
    },arr[0])
  }

  console.log({
    numbers,
    result: arrMin(numbers)
  });
}
console.log('---');
console.groupEnd();
