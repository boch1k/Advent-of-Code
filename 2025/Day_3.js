function max_number_Index(str) {
  let index = 0
  let max = ""
  for (let n = 0; n < str.length; n++) {
    if (str[n] > max) {
      max = str[n]
      index = n
    }
  }
  return index
}

function wrap(str) {
  let num_a_index = max_number_Index(str.slice(0, - 1))
  let num_b_index = max_number_Index(str.slice(num_a_index + 1))
  let result = (str[num_a_index]) + (str.slice(num_a_index + 1)[num_b_index])
  console.log(result)
  return parseInt(result)
}

// --- Part Two ---

function wrap(str) {
  let full_index = 0
  let end_index = str.length - 11
  let summ = ""
  while (end_index < str.length + 1) {
    let max_index = max_number_Index(str.slice(full_index, end_index++))
    full_index += max_index
    summ += str[full_index]
    full_index++
  }

  return parseInt(summ)
}
