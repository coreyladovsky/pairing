const makeCombos = arr => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      res.push([arr[i], arr[j]]);
    }
  }
  return res;
};

const makeGrid = num => {
  let res = new Array(num - 1).fill(null).map(el => []);
  res.forEach(el => {
    for (let i = 0; i < Math.floor(num / 2); i++) {
      el.push(null);
    }
  });
  return res;
};

const placeCombos = arr => {
  let graphs = new Set();
  let res = makeGrid(arr.length);
  let combos = makeCombos(arr);
  let i = 0;
  let j = 0;

  while (!res[res.length - 1][res[res.length - 1].length - 1]) {
    let used = false;
    forLoop: for (let groupIdx = 0; groupIdx < combos.length; groupIdx++) {
      if (isValidPlacement(res[i], combos[groupIdx])) {
        res[i][j] = combos[groupIdx];
        let graph = res.toString();
        if (graphs.has(graph)) {
          res[i][j] = null;
          used = false;
          break forLoop;
        } else {
          graphs.add(graph);
          combos = combos.slice(0, groupIdx).concat(combos.slice(groupIdx + 1));
          used = true;
          if (!stillSpace(res[i])) {
            i += 1;
            j = 0;

            break forLoop;
          } else {
            j += 1;
            break forLoop;
          }
        }
      }
    }
    if (!used) {
      [i, j] = findsLast(res);
      let temp = res[i][j];
      res[i][j] = null;
      combos.push(temp);
    }
  }

  return res;
};

const findsLast = grid => {
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j]) {
        return [i, j];
      }
    }
  }
};

const stillSpace = day => {
  return day.some(pair => pair === null);
};

const isValidPlacement = (day, pair) => {
  if (!day) return false;
  return day.every(
    combo =>
      combo === null || (!combo.includes(pair[0]) && !combo.includes(pair[1]))
  );
};

const pairStudents = arr => {
  if (arr.length % 2) {
    arr.push(null);
  }
  return placeCombos(arr);
};

// let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"];

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

console.log(pairStudents(classArray));
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
