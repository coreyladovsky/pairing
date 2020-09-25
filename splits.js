const makeComboSet = (arr) => {
  let res = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      res.add(JSON.stringify([arr[i], arr[j]]));
    }
  }
  return res;
};

const makeGrid = (num) => {
  let res = new Array(num - 1).fill(null).map((el) => []);
  res.forEach((el) => {
    for (let i = 0; i < Math.floor(num / 2); i++) {
      el.push(null);
    }
  });
  return res;
};

const createSchedule = (arr) => {
    if(arr.length > 22) {
        let midIdx = Math.floor(arr.)
    }
}






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
  "y", 
  "z",
  "aa",
  "bb", 
  "cc",
  "dd",
];


console.log(makeComboSet(arr))