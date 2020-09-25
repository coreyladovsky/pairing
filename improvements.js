const makeCombos= (arr) => {
  let res = new Map();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      res.set(
        JSON.stringify([arr[i], arr[j]]),
        JSON.stringify([arr[i], arr[j]])
      );
    }
  }
  return res;
};

const makeGrid = (num) => {
  let res = new Array(num - 1).fill(null).map((el) => new Set());
//   res.forEach((el) => {
//     for (let i = 0; i < Math.floor(num / 2); i++) {
//       el.push(null);
//     }
//   });
  return res;
};

const placeCombos = (arr) => {
  let graphs = new Set();
  let res = makeGrid(arr.length);
  let combos = makeCombos(arr);
  let dayLookUp =  new Array(num - 1).fill(null).map((el) => new Set());

  let stack = [];
  let i = 0;
  let j = 0;
  let lastRowLength = arr.length / 2;

  while (res[res.length - 1].size() !== lastRowLength) {
    let used = false;
    for (let [groupIdx, combo] of combos) {
      if (isValidPlacement(dayLookUp[i], combo)) {
        res[i][j] = combo;
        let graph = res.toString();
        if (graphs.has(graph)) {
          res[i][j] = null;
          used = false;
          break;
        } else {
          graphs.add(graph);
          combos.delete(groupIdx);
          used = true;
          if (!stillSpace(res[i])) {
            i += 1;
            j = 0;
            break;
          } else {
            j += 1;
            break;
          }
        }
      }
    }
    if (!used) {
      [i, j] = findsLast(res, i, j);
      let temp = res[i][j];
      res[i][j] = null;
      combos.set(temp, temp);
    }
  }

  return res;
};


const findsLast = (grid, i , j) => {
  for (let x = i; x >= 0; x--) {
    for (let y = j; y >= 0; y--) {
      if (grid[x][y]) {
        return [x, y];
      }
    }
  }
};

const stillSpace = (day) => {
  return day.some((pair) => pair === null);
};

const isValidPlacement = (day, pair) => {
    let [personA, personB] = JSON.parse(pair);
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
