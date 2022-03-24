function createBoard() {
  var board = []
  for (var i = 0; i < gLevel.SIZE; i++) {
    board[i] = []
    for (var j = 0; j < gLevel.SIZE; j++) {
      board[i][j] = cell = {
        minesAroundCount: 4,
        isShown: false,
        isMine: false,
        isMarked: false
      }
    }
  }
  board[0][0]=MINE
  board[2][2]=MINE
  setMinesNegsCount(board)
  console.table(board)
  return board
}

function setMinesNegsCount(board) {
  var newBoard = copyMat(board)
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      var numOfNeighbors = counntNeigbors(i, j, board)
      console.log('cell',i,j,numOfNeighbors);

    }
  }
}


function renderBoard(board) {
  var strHtml = ''
  for (var i = 0; i < board.length; i++) {
    strHtml += '<tr>'
    for (var j = 0; j < board.length; j++) {
      var tdId = `cell-${i}-${j}`
      strHtml += `<td id="${tdId}" onclick="cellClicked(this)">`
      if (board[i][j].isMine) {
        if (board[i][j].isShown) {
          board[i][j].isShown = false
          strHtml += MINE
        }
      }
      strHtml += `</td>`
    }
    strHtml += '</tr>'
  }
  var elMat = document.querySelector('.board')
  elMat.innerHTML = strHtml
}



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function copyMat(mat) {
  var newMat = []
  for (var i = 0; i < mat.length; i++) {
    newMat[i] = []
    for (var j = 0; j < mat.length; j++) {
      newMat[i][j] = mat[i][j]
    }
  }
  return newMat
}

function counntNeigbors(cellI, cellJ, mat) {
  var neighbors = 0
  for (var i = cellI - 1; i <= cellI + 1; i++) {
    if (i < 0 || i >= mat.length) continue
    for (var j = cellJ - 1; j <= cellJ + 1; j++) {
      if (i === cellI && j === cellJ) continue
      if (j < 0 || j > mat.length) continue
      if (mat[cellI]-1[cellJ]-1===MINE)neighbors++
      if (mat[cellI][cellJ]===MINE)neighbors++
      if (mat[cellI]+1[cellJ]+1===MINE)neighbors++
      if (mat[cellI][cellJ]-1===MINE)neighbors++
      if (mat[cellI][cellJ+1]===MINE)neighbors++
      if (mat[cellI]+1[cellJ]-1===MINE)neighbors++
      if (mat[cellI]+1[cellJ]===MINE)neighbors++
      if (mat[cellI]+1[cellJ]+1===MINE)neighbors++
      
    }
  }
  return neighbors
}