const people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];
console.groupCollapsed("1. Atspausdinkite visus žmones eilutėmis");
{
  // ...sprendimas ir spausdinimas
  people.forEach((person) => {
    console.log(JSON.stringify(person));
  });
}
console.groupEnd();

console.groupCollapsed(
  "2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu"
);
{
  // ...sprendimas ir spausdinimas
  people.forEach((person) => {
    console.log(`${person.name}-${person.surname}`);
  });
}
console.groupEnd();

console.groupCollapsed(
  "3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą"
);
{
  // ...sprendimas ir spausdinimas
  people.forEach(({ name, surname, married }) =>
    console.log(
      `${name} ${surname} ${married === true ? `Is married` : `Isn't married`} `
    )
  );
}
console.groupEnd();

console.groupCollapsed(
  "4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą"
);
{
  // ...sprendimas ir spausdinimas
  const arrSexIncome = people.map(({ sex, income }) => ({ sex, income }));
  console.log(arrSexIncome)
}
console.groupEnd();

console.groupCollapsed(
  "5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą"
);
{
  // ...sprendimas ir spausdinimas
  const arrNamesSurnamesSex = people.map(({ name,surname,sex }) => ({ name, surname,sex }));
  console.log(arrNamesSurnamesSex)
}
console.groupEnd();

console.groupCollapsed("6. Atspausdinkite visus vyrus");
{
  // ...sprendimas ir spausdinimas
  console.log(people.filter(person => person.sex === "male"))
}
console.groupEnd();

console.groupCollapsed("7. Atspausdinkite visas moteris");
{
  // ...sprendimas ir spausdinimas
  console.log(people.filter(person => person.sex === "female"))

}
console.groupEnd();

console.groupCollapsed(
  "8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas"
);
{
  // ...sprendimas ir spausdinimas
  people.filter(({hasCar}) => hasCar === true).forEach(({name, surname}) => console.log(`${name} ${surname}`) )

}
console.groupEnd();

console.groupCollapsed("9. Atspausdinkite žmones kurie yra susituokę");
{
  // ...sprendimas ir spausdinimas
  people.filter(({married}) => married === true).forEach(({name, surname}) => console.log(`${name} ${surname}`) )

}
console.groupEnd();

console.groupCollapsed(
  "10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį"
);
{
  // ...sprendimas ir spausdinimas
  const calcDriversByGender =  people.reduce((prevValue, currValue) => {
    return prevValue = {
      femaleDrivers : people.filter(({sex, hasCar}) => sex === 'female' && hasCar ===true ).length,
      maleDrivers : people.filter(({sex, hasCar}) => sex === 'male' && hasCar ===true ).length
    } 
  },{})
  console.log(calcDriversByGender)

}
console.groupEnd();

console.groupCollapsed(
  '11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"'
);
{
  // ...sprendimas ir spausdinimas
  const arrIncomeToSalary = people.map(({income, ...person}) => {
    return {
      ...person,
      salary: income
    }
  })
  console.log(arrIncomeToSalary)
}
console.groupEnd();

console.groupCollapsed(
  "12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės"
);
{
  // ...sprendimas ir spausdinimas
  const arrNoNameSurnameSex = people.map(({age,income,hasCar,married}) => ({age,income,hasCar,married}))
  console.log(arrNoNameSurnameSex)
}
console.groupEnd();

console.groupCollapsed(
  '13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe'
);
{
  // ...sprendimas ir spausdinimas
  const arrNameSurnameConnected = people.map(({name,surname, ...person}) => ({
    fullname: name + " "+ surname,
    ...person
  }))
  console.log(arrNameSurnameConnected)
}
console.groupEnd();
