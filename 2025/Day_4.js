let arr = document.getElementsByTagName("pre")[0].innerText
arr = arr.split("\n")
arr.length = 138

function lookAround(arr) {
  let position = { x: 0, y: 0 }
  let endPosition = { x: arr.length, y: arr[0].length }
  let rolls = "@"
  let result = 0
  let arrIndex = []
  let positions = [[0, -1], [0, 1], [-1, 0], [1, 0], [-1, -1], [1, 1], [-1, 1], [1, -1]]
  while (position.x < endPosition.x) {
    while (position.y < endPosition.y) {
      if (arr[position.x][position.y] !== rolls) {
        position.y++
        continue
      }
      let checking = 0
      positions.forEach(pos => {
        let x = ((pos[0] + position.x) >= 0 && (pos[0] + position.x) < endPosition.x) ? (pos[0] + position.x) : "wrong"
        let y = ((pos[1] + position.y) >= 0 && (pos[1] + position.y) < endPosition.y) ? (pos[1] + position.y) : "wrong"
        if (x !== "wrong" && y !== "wrong") {
          if (arr[x][y] === rolls) checking++
        }
      })

      if (checking < 4) {
        result++
        arrIndex.push({ x: position.x, y: position.y })
      }
      position.y++
    }
    position.x++
    position.y = 0
  }
  return arrIndex
}

// --- Part Two ---

function wrap(arr) {
  let counter = 0
  let arrToRemove = lookAround(arr)
  while (arrToRemove.length > 0) {
    counter += arrToRemove.length
    arrToRemove.forEach(obj => {
      let arrStr = arr[obj.x].split("")
      arrStr[obj.y] = "."
      arr[obj.x] = arrStr.join("")
    })
    arrToRemove = lookAround(arr)
  }
  return counter
}
