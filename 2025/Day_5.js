let arr = document.getElementsByTagName("pre")[0].innerText
arr = arr.split("\n")
let range = arr.slice(0, 179)
let arrIDs = arr.slice(180, 1180)

function compare(range, ids) {
  let result = {}
  ids.forEach(id => {
    range.forEach(str => {
      let numOne = parseInt(str.split("-")[0])
      let numTwo = parseInt(str.split("-")[1])
      if (parseInt(id) >= numOne && id <= numTwo) {
        id in result ? result[id] += 1 : result[id] = 0
      }
    })
  })
  return result
}

// --- Part Two ---

range.sort((a, b) => { return a.split("-")[0] - b.split("-")[0] })

function rangeUnion(arr) {
  let result = []
  let counter = 0
  const verify = (a1, a2, b1, b2) => { if (Math.max(a1, b1) <= Math.min(a2, b2)) return true }

  const numbersArray = arr.map(str => {
    return [parseInt(str.split("-")[0]), parseInt(str.split("-")[1])]
  })

  for (let i = 0; i < numbersArray.length; i++) {
    let a1 = numbersArray[i][0]
    let a2 = numbersArray[i][1]
    if (numbersArray[i][1] === 0) continue
    for (let n = i + 1; n < numbersArray.length; n++) {
      let b1 = numbersArray[n][0]
      let b2 = numbersArray[n][1]
      if (verify(a1, a2, b1, b2)) {
        a2 = Math.max(a2, b2)
        numbersArray[n][1] = 0
      }
    }
    result.push([a1, a2])
  }

  result.forEach(n => {
    if (n[0] === n[1]) {
      counter++
    } else {
      counter += (n[1] - n[0]) + 1
    }
  })
  return counter
}
