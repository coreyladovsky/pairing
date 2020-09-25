const makeCombos = (arr) => {
  // O(n^2)
  let combos = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      combos.add(JSON.stringify([arr[i], arr[j]]));
    }
  }
  return combos;
};

const makeGrid = (num) => {
  // O(n^2)
  let grid = new Array(num - 1).fill(null).map((el) => []);
  return grid;
};

const placeCombos = (arr) => {
  let graphs = new Set();
  let res = makeGrid(arr.length);
  let combos = makeCombos(arr);
  let dayLookUp = new Array(arr.length - 1).fill(null).map((el) => new Set());
  let lastRowLength = arr.length / 2;

  let t = 0;
  for (let combo of combos) {
    if (t >= lastRowLength) break;
    let [a, b] = JSON.parse(combo);
    dayLookUp[t].add(a);
    dayLookUp[t].add(b);
    combos.delete(combo)
    res[t].push(combo);
    t++;
  }

  let i = 0;

  while (res[res.length - 1].length < lastRowLength) {
    let used = false;
    for (let combo of combos) {
      let [personA, personB] = JSON.parse(combo);
      if (isValidPlacement(dayLookUp[i], personA, personB)) {
        res[i].push(combo);
        dayLookUp[i].add(personA);
        dayLookUp[i].add(personB);

        let graph = res.toString();
        if (graphs.has(graph)) {
          res[i].pop();
          dayLookUp[i].delete(personA);
          dayLookUp[i].delete(personB);
          used = false;
          break;
        } else {
          graphs.add(graph);
          combos.delete(combo);
          used = true;
          if (res[i].length >= lastRowLength) {
            i += 1;
          }
          break;
        }
      }
    }
    if (!used) {
      i = findsLast(res);
      let temp = res[i].pop();
      let [tempA, tempB] = JSON.parse(temp);
      dayLookUp[i].delete(tempA);
      dayLookUp[i].delete(tempB);
      combos.add(temp);
    }
  }

  return res;
};

const findsLast = (grid) => {
  for (let i = grid.length - 1; i >= 0; i--) {
    if (grid[i].length > 1) return i;
  }
  return 0;
};

const isValidPlacement = (day, personA, personB) => {
  return !day.has(personA) && !day.has(personB);
};

const pairStudents = (arr) => {
  if (arr.length % 2) {
    arr.push(null);
  }
  return placeCombos(arr);
};

let arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
    "w",
    "x",
  //   "y",
  //   "z"
];

let classRoom = `Ashya Manning
Brandon Brown
Brittany Gaston
Cassidy Beni
Congsong Yang
Crystal Cardona
Danielle Cherry
Danilov laurent
David Maravillas
Dugmar Morocho
Erikson Castro
Farrah Rios
Fausto Santos
Henry Nunez
Isaiah Collazo
Javon Fowler
John Jones
Jovanni Luna
Kelvin Arellano
Kevin Brutus
Kevin Wong
Maria Martinez
Marvin Thompson
Nilber Remon
Ohidur Rahman
Patrick Smith
Phillip Awich
Rafid Hossain
Samantha Jimenez
Syn Perez
Sihame Bazi
Uduakabasi Abasiurua
Stephanie Ramirez
Karen Morriset
Deja Flynn`;

let classArray = classRoom.split("\n");

// const permutations = (arr) => {
//   let
// }

// let allCombos = makeCombos(arr);
//     console.log(allCombos)
console.log(pairStudents(arr));
//
// let rand = [ [ [ 'a', 'b' ],
//     [ 'c', 'd' ],
//     [ 'e', 'f' ],
//     [ 'g', 'h' ],
//     [ 'i', 'j' ] ],
//   [ [ 'a', 'c' ],
//     [ 'b', 'd' ],
//     [ 'e', 'g' ],
//     [ 'f', 'i' ],
//     [ 'h', 'j' ] ],
//   [ [ 'a', 'd' ],
//     [ 'b', 'c' ],
//     [ 'e', 'h' ],
//     [ 'f', 'j' ],
//     [ 'g', 'i' ] ],
//   [ [ 'h', 'i' ], [ 'f', 'g' ], [ 'a', 'e' ], [ 'd', 'j' ], null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ] ]

// console.log(rand.toString())
