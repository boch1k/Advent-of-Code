let summ = 0
arr.forEach(val => {
  let arr = val.split("-")
  first = parseInt(arr[0])
  second = parseInt(arr[1]) + 1
  for (let num = first; num < second; num++) {
    // let count = Math.floor(Math.log10(Math.abs(num)))
    let count = String(num).length
    if (!(count % 2)) {
      let half = count / 2
      let str = String(num)
      let numA = str.substring(0, half)
      let numB = str.substring(half)
      numA === numB ? summ += num : false
    }
  }
});

// --- Part Two ---

function fn(n) {
  if (String(n).length < 2) return 0
  let result = 0
  let nl = String(n).length
  let nlMax = Math.round(nl / 2)
  for (let x = 0; x < nlMax; x++) {
    let subN = String(n).substring(0, x + 1)
    if (nl % subN.length === 0) {
      let repls = nl / subN.length
      if (subN.repeat(repls) === String(n)) {
        result = n
        break
      }
    }
  }
  return result
}

function cover(arr) {
  let sum = 0
  arr.forEach(val => {
    let l2 = val.split("-")
    let first = parseInt(l2[0])
    let second = parseInt(l2[1]) + 1
    for (let num = first; num < second; num++) {
      sum += fn(num)
    }
  });
  return sum
}
