var countries = [
  {
    name: "Romania",
    continet: "Europa",
    population: 19237691, // populatia in nr de persoane
    area: 238397, //populatia in km patrati
    democratic: true,
    listOfColorsFlag: ["red", "yellow", "blue"],
  },

  {
    name: "Spania",
    continet: "Europa",
    population: 47350000,
    area: 505990,
    democratic: true,
    listOfColorsFlag: ["red", "yellow"],
  },

  {
    name: "Tunisia",
    continet: "Africa",
    population: 12000000,
    area: 163610,
    democratic: false,
    listOfColorsFlag: ["red", "white"],
  },

  {
    name: "Brazilia",
    continet: "America de Sud",
    population: 203062512,
    area: 8515767,
    democratic: true,
    listOfColorsFlag: ["green", " yellow", "blue"],
  },

  {
    name: "Japonia",
    continet: "Asia",
    population: 125960000,
    area: 377975,
    democratic: true,
    listOfColorsFlag: ["white", "red"],
  },
];

countries.forEach(function (capsuna) {
  console.log(
    "Density of: " +
      capsuna.name +
      " is " +
      capsuna.population / capsuna.area +
      " person/km2"
  );
});

countries.push({
  name: "Egipt",
  continet: "Africa",
  population: 109000000,
  area: 1002450,
  democratic: false,
  listOfColorsFlag: ["red", "white", "black"],
});
console.log("Array after push is: ", countries);

var firstCountry = countries.shift();
console.log(countries);

countries.splice(2, 0, {
  name: "Australia",
  continet: "Australia",
  population: 25690000,
  area: 7692024,
  democratic: true,
  listOfColorsFlag: ["blue", "red", "white"],
});
console.log(countries);

var subset = countries.splice(0, 6);
console.log(subset);

//tari democratice

var isDemocratic = countries.every(function () {
  democraticCountries === true;
});

console.log("Are all democratic country?", isDemocratic);

//filtrarea

var countriesEuropa = countries.filter(function () {
  countriesEuropa === "Europa";
});
console.log("Tarile din Europa sunt:", countriesEuropa);
