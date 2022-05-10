console.groupCollapsed("1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7");
{
  const drinksArr = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "spood", price: 15 },
    { name: "sula", price: 0.99 },
    { name: "sweat", price: 67 },
  ];
  function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => a.price - b.price);
  }
  console.log(sortDrinkByPrice(drinksArr));
}
console.groupEnd();

console.groupCollapsed("2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau");
{
  function addName(obj, name, value) {
    return {
      obj: obj,
      [name]: value,
    };
  }
  console.log(addName({ tevas: 600, makleris: 150 }, "britnius", 300));
}
console.groupEnd();

console.groupCollapsed("3 - https://edabit.com/challenge/48EJWLhF224na8po3");
{
//   function describeFamiliarRelation(gen, sex) {
    //   const sexes = { f: ["mother", , "daughter"], m: ["father", , "son"] }
    // if (gen === 0) {
    //   return "me!";
    // }
    // let result = ["grand", "great grand"][Math.abs(gen) - 2] ?? "";
    // result += sexes[sex][Math.sign(gen) + 1]
    // return result
    

//   }

  const generationsData = {
      '-3':{f:'great grandmother' , m: 'great grandfather'},
      '-2':{f:'grandmother' , m: 'grandfather'},
      '-1':{f:'mother' , m: 'father'},
      '-0':{f:'me' , m: 'me'},
      '1':{f:'daughter' , m: 'son'},
      '2':{f:'granddaughter' , m: 'grandson'},
      '3':{f:'great granddaughter' , m: 'great grandson'},
  }

  function describeFamiliarRelation(gen, sex){
      return generationsData[gen][sex]
  }

  console.log(describeFamiliarRelation(2, "f"));
  console.log(describeFamiliarRelation(1, "m"));
  console.log(describeFamiliarRelation(-3, "f"));
}
console.groupEnd();

console.groupCollapsed("4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX");
{
  function maximumScore(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i].score;
    }
    return result;
  }
  console.log(
    maximumScore([
      { tile: "N", score: 1 },
      { tile: "K", score: 5 },
      { tile: "Z", score: 10 },
      { tile: "X", score: 8 },
      { tile: "D", score: 2 },
      { tile: "A", score: 1 },
      { tile: "E", score: 1 },
    ])
  );
}
console.groupEnd();

console.groupCollapsed("5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD");
{
  function calculateDifference(obj, limit) {
    let damages = 0;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        damages += obj[key];
      }
    }
    return damages - limit;
  }
  console.log(calculateDifference({ kriause: 200, yomama: 100 }, 3));
}
console.groupEnd();

console.groupCollapsed("6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM");
{
  function toArray(obj) {
    return Object.entries(obj);
  }
  console.log(toArray({ a: 1, b: 2 }));
}
console.groupEnd();

console.groupCollapsed("7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip");
{
  function inkLevels(obj) {
    let valuesArr = [];
    for (const color in obj) {
      if (obj.hasOwnProperty(color)) {
        valuesArr.push(obj[color]);
      }
    }
    let min = valuesArr[0];
    for (let i = 0; i < valuesArr.length; i++) {
      if (valuesArr[i] < min) {
        console.log(valuesArr);
        min = valuesArr[i];
      }
    }
    return min;
  }
  console.log(
    inkLevels({
      cyan: 23,
      magenta: 12,
      yellow: 10,
    })
  );
}
console.groupEnd();

console.groupCollapsed("8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak");
{
    function stolenItems(obj){
        let damages = 0;
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                damages+= obj[key]
            }
        }
       return damages === 0 ? "Lucky you" : damages
    }

    console.log(stolenItems({}))
}
console.groupEnd();
