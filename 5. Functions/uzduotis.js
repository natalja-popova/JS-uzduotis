// TASKS:
// 1. Parašyti fn kuri grąžina stataus trikampio plotą; Trikampiui yra paduodamas trikampio ilgis ir plotis;
//s=a*b/2
const triangleArea = (side1, side2) => {
  if (typeof side1 !== "number" || typeof side2 !== "number") {
    return "Please provide correct numbers";
  }
  return side1 * side2 * 0.5;
};
const result = triangleArea(10, 15);
console.log(result);

// 2. Parašyt fn kuri apskaičiuoja apskritimo plotą; Į fn turi būt paduodamas skritulio spindulys(puse skersmens);
// s= π*r2
const circleArea = (radius) => {
  if (typeof radius !== "number") {
    return "Please provide correct radius";
  }
  return 3.14 * radius ** 2;
};
const circleAreaResult = circleArea(2);
console.log(circleAreaResult);

// 3. Parašyti funkcija kuri atvaizduoja atvirkščia piramidę sukurtą iš #.
// PVZ.: paduodamas skaičius 4
// ####
// ###
// ##
// #
const drawCone = (conSize) => {
  if (typeof conSize !== "number") {
    return "Please provide correct number";
  }
  while (conSize >= 1) {
    console.log("#".repeat(conSize));
    conSize--;
  }
  return true;
};
console.log(drawCone(15));

// 4. Parašyti funkcija kuri atvaizduoja šukas iš  #.
// PVZ.: paduodamas skaičius 3

// ###
// #
// ###

// PVZ.: paduodamas sk. 7

// #######
// #
// #######
// #
// #######
// #
// #######
const drawFork = (forkSize) => {
  if (typeof forkSize !== "number") {
    return "Please provide correct number";
  }
  for (let i = 1; i <= forkSize; i++) {
    if (i % 2 !== 0) {
      console.log("#".repeat(forkSize));
    } else {
      console.log("#");
    }
  }
  return true;
};
const drawForkResult = drawFork(9);

// 5. Sukurti fn kuri priima kaip argumentą 1sk.
// 5.1. SKaičius turi būt nuo 1 iki 6. Jeigu paduodama 11 - funkcija turi returnint tekstą "Bad provided arg";

// 5.2. Funkcija turi sugeneruot random number nuo 1 iki 6 bei palyginti number su paduotu argumentu, jei reikšmės sutampa - gražinti tekstą "Success"; Jeigu skaičiai nesutampa - gražinti tekstą "You lost, try again";
const randomNumComparison = (num) => {
  let comparisonMsg = "";
  if (num < 1 || num > 6) {
    return "Bad provided arg";
  }
  const randomNum = Math.floor(Math.random() * 6) + 1;

  return num === randomNum
    ? (comparisonMsg = "Success")
    : (comparisonMsg = "You lost, try again");
};
const randomNumComparisonResult = randomNumComparison(5);
console.log(randomNumComparisonResult);

// Extra:
// 6. Parašyti funkcija kuri atvaizduoja kvadratą sukurtą iš #.
// PVZ.: paduodamas skaičius 3
// ###
// ###
// ###
const drawSquare = (squareSize) => {
  if (typeof squareSize !== "number") {
    return "Please provide correct number";
  }
  let i = 1;
  while (i <= squareSize) {
    console.log("#".repeat(squareSize));
    i++;
  }
  return true;
};
console.log(drawSquare(15));
