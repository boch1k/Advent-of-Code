let arr = document.getElementsByTagName("pre")[0].innerText.split("\n")

let counter = 50
let zeroCount = 0
function wheel(d) {
  
  let val = parseInt(d.substring(1))
  if (val > 100) {
    val = val % 100
  }
  if (d[0] === "L") {
    counter < val ? counter += 100 - val : counter -= val
    if (counter === 0) zeroCount++
  }
  if (d[0] === "R") {
    (counter + val > 100) ? counter += val - 100 : counter += val
    if (counter === 100) {
      zeroCount++
      counter = 0
    }
  }
}
