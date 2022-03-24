function buildBoard() {
  var board = []
  var cell = gCell
  for (var i = 0; i < gLevel.SIZE; i++) {
    board[i] = []
    for (var j = 0; j < gLevel.SIZE; j++) {
      board[i][j] = cell.minesAroundCount
    }
  }
  board[2][1] = MINE
  board[3][2] = MINE
  cell.minesAroundCount = setMinesNegsCount(board)
  console.table(board)
  return board
}

function setMinesNegsCount(board) {
  console.log(board.length);
  
  var neighborsCount = 0;
  for (var i = 0; i < board.length; i++) {
    if(i < 0 || i > board.length-1)continue
    for (var j = 0; j < board.length; j++) {
      if(j < 0 || j > board.length-1)continue
      if(board[i][j]===MINE)continue
      if(i===j)continue
    }
  }
  return neighborsCount;
}

function renderBoard(board) {
  var strHtml = ''
  for (var i = 0; i < board.length; i++) {
    strHtml += '<tr>'
    for (var j = 0; j < board.length; j++) {
      var currCell = board[i][j]
      //var currClass = getClassName({i:i,j:j})
      // var tdId = `cell-${i}-${j}`
      // strHtml += `<td id="${tdId}" onclick="cellClicked(this)">`
      // strHtml += currCell
      // strHtml += `</td>`
    }
    strHtml += '</tr>'
  }
  var elMat = document.querySelector('.board')
  elMat.innerHTML = strHtml
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
