const FLAG = '•', FLAG_IMG = ''
const LOSS = '☺', LOSS_IMG = ''
const MINE = '♣', MINE_IMG = ''
const SMILY = '☻', SMILY_IMG = ''
const WIN = '♥', WIN_IMG = ''

var gFlag = 0
var gLive = 3
var gHint = 3
var gBoard

var gCell = {
  minesAroundCount: 0,
  isShown: false,
  isMine: false,
  isMarked: false,
}

var gLevel = {
  SIZE: 4,
  MINES: 4,
}
var gGame = {
  isOn: false,
  shownCount: 0,
  markedCount: 0,
  secsPassed: 0,
}

function init() {
  gBoard = buildBoard()
  renderBoard(gBoard)
}




////--------------------------------------------------------------------------
// function setMinesNegsCount(board) {
//   console.log(board);
//   var neighborsCount = 0;
//   for (var i = l - 1; i <= l + 1; i++) {
//       if (i < 0 || i >= board.length) continue;
//       for (var j = j - 1; j <= j + 1; j++) {
//           if (i === i && j === j) continue;
//           if (j < 0 || j >= board.length) continue;
//           if (board[i][j] === MINE) neighborsCount++;
//           console.log(neighborsCount);
//       }
//   }
//   return neighborsCount;
// }

// function difficulty(btn){
//   if(btn === 'easy'){
//     gLevel.SIZE = 4
//     gLevel.MINES = 4
//   }
//   if(btn === 'medium'){
//     gLevel.SIZE = 6
//     gLevel.MINES = 10
//   }
//   if(btn === 'hard'){
//     gLevel.SIZE = 10
//     gLevel.MINES = 15
//   }
// }

// function cellClicked(elCell) {
//   elCell.classList.remove('hiden')
//   elCell.isShown = true
//   getSelectedElCell = elCell
//   var cellCoords = getSelectedCoord(elCell.id)
//   checkGameOver(cellCoords)
//   isFirstMove()
// }

// function getSelectedCoord(strCellId) {
//   var coord = {}
//   var parts = strCellId.split('-')
//   coord.i = +parts[1]
//   coord.j = +parts[2]
//   return coord
// }

// function cellMarked(elCell) { }

// function isEmptyCell(coord) {
//   return gBoard[coord.i][coord.j] === ''
// }

// function isFirstMove() {
//   var cell = document.querySelectorAll('.hiden')
//   if(cell.length > 98){
//     getMines(gLevel.MINES)
//   }
// }

// function checkGameOver(cell) {
//   if (cell === gCell.isMine) {
//     console.log('You Lose');
//   }
// }

// function expandShown(board, elCell, i, j) { }

// function getMines(mine) {
//   var mines = []
//   for (var i = 0; i < gLevel.MINES; i++) {
//     var cellI = getRandomInt(0, mine - 1)
//     var cellJ = getRandomInt(0, mine - 1)
//     var tempArr = [cellI, cellJ]
//     if (!mines.includes(tempArr)) {
//       mines.push(tempArr)
//     }
//   }
//   return mines
// }
