
const makeCombos = arr => {
	let res = [];
	for(let i = 0; i < arr.length; i++) {
		for(let j = i + 1; j < arr.length; j++) {
			res.push([arr[i], arr[j]])
		}
	}
	return res
}

const makeGrid = (num) => {
	let res = new Array(num - 1).fill(null).map(el => [])
	res.forEach(el => {
		for(let i = 0; i < Math.floor(num / 2); i++) {
			el.push(null)
		}
	})
	return res;
}


// let test = [ [ null, null, null ],
//   [ null, null, null ],
//   [ null, null, null ],
//   [ null, null, null ],
//   [ null, null, [] ] ]

const placeCombos = (arr, res = makeGrid(arr.length),combos = makeCombos(arr), i = 0, j = 0) => {
	// if(res.every(day => day.every(el => el )))return res;
	if(res[res.length - 1][res[res.length - 1].length - 1])return res;

	let grid = res.map(day => day.slice(0))

	for(let groupIdx = 0; groupIdx < combos.length; groupIdx++) {
		if(isValidPlacement(grid[i], combos[groupIdx])) {
			grid[i][j] = combos[groupIdx]
			let remainingCombos = combos.slice(0, groupIdx).concat(combos.slice(groupIdx + 1))
			if(!stillSpace(grid[i])) {
					return placeCombos(arr, grid, remainingCombos, i + 1, 0)
			} else {
				return placeCombos(arr, grid, remainingCombos, i, j + 1)
			}
		}
	}
	let [newI, newJ] = findsLast(grid);
	let temp = grid[newI][newJ];
	grid[newI][newJ] = null;
	combos.push(temp)
	return placeCombos(arr, grid, combos, newI, newJ)
}

const findsLast = (grid) => {
	for(let i = grid.length - 1; i >= 0; i--) {
		for(let j = grid[i].length - 1; j >= 0; j--) {
			if(grid[i][j]) {
				return [i, j]
			}
		}
	}
}

const stillSpace = (day) => {
	return day.some(pair => pair === null)
}


const isValidPlacement = (day, pair) => {
	if(!day) return false;
	return day.every(combo => combo === null || !combo.includes(pair[0]) && !combo.includes(pair[1]) )
}
let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

const pairStudents = arr => {
	if(arr.length % 2) {
		arr.push(null)
	}
	return placeCombos(arr)
}






let classRoom =
`Ashya Manning
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
Deja Flynn`


let classArray = classRoom.split('\n')




pairStudents(arr)
