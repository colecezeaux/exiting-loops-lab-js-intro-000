function breakOut(array, changeValue, stopValue) {
for(var i = 0; i < array.length; i++) {
if(array[i] !== stopValue) {
  array[i] = changeValue
} else {
  break
}
}
return array
}

function keepGoing(array, changeValue, skipValue) {
for(var i = 0; i < array.length; i++) {
  if(array[i] === skipValue) {
    continue
  } else {
    array[i] = changeValue
  }
}
return array
}

function findBy(array, findFn) {
for(var i = 0; i < array.length; i++) {
  var output = null
  if(array[i] === findFn) {
    output = array[i]
  }
}
return output
}

function findBy(array, findFn) {
  var output = null
  const find = [] // constant variable itemName = empty array
  for(var i = 0; i < array.length; i++){ // for loop; initialization is variable i = 0, condition is while var i is less than the length of the object cart, iteration is var i incrementing by 1 each loop
    find.push(array[i].findFn) // each loop pushes the index of i’s itemName key value into the empty array of const itemName (giving us an array of only itemNames)
    }
// indexOf() syntax: array.indexOf(item, start)
  const index = find.indexOf(findFn) // constant variable index = indexOf constant variable itemName, where the passed in string item is the item to search for
  if(index > -1){ // [if cart.splice() method does not find the item, it will return -1] if statement; condition is while constant variable index is greater than -1 (and thereby has returned a result)
     array.splice(index, 0) // splice object cart where index is constant variable index, and how many to remove is 1
     output = array // updates variable output within the if statement to only change if the statement returns true to = updated cart object with removed element
  }
    return output // returns variable output; default or true if statement result
}
