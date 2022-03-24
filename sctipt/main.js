const FLAG = '•'
const LOSS = '☺'
const MINE = '♣'
const SMILY = '☻'
const WIN = '♥'

var gFlag = 0
var gLive = 3
var gHint = 3
var gBoard


var gLevel = {
  SIZE: 4,
  MINES: 0,
}
var gGame = {
  isOn: false,
  shownCount: 0,
  markedCount: 0,
  secsPassed: 0,
}

function init() {
  gBoard = createBoard()
  renderBoard(gBoard)
}


function cellClicked(elCell) {
  elCell.classList.remove('hiden')
  getSelectedElCell = elCell
  var cellCoords = getSelectedCoord(elCell.id)
  console.log(cellCoords);
  //isFirstMove()
}
function getSelectedCoord(strCellId){
  var coord = {}
  var parts = strCellId.split('-')
  coord.i = +parts[1]
  coord.j = +parts[2]
  return coord
}

function cellMarked(elCell) { }

function isEmptyCell(coord){
  return gBoard[coord.i][coord.j]===''
}
function isFirstMove(){
  var cell = document.querySelectorAll('.hiden')
  console.log(cell);
  for (var i = 0; i < gBoard.length; i++) {
    for (var j = 0; j < gBoard.length; j++) {
      gBoard[i][j]
    }
  }
}

function checkGameOver(cell) {
  if (cell === gCell.isMine) {
    console.log('You Lose');
  }
}

function expandShown(board, elCell, i, j) { }

function getMines(mine) {
  var mines = []
  for (var i = 0; i < gLevel.MINES; i++) {
    var cellI = getRandomInt(0, mine - 1)
    var cellJ = getRandomInt(0, mine - 1)
    var tempArr = [cellI, cellJ]
    if (!mines.includes(tempArr)) {
      mines.push(tempArr)
    }
  }
  return mines
}
