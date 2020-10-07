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
for(var i = 0; i < array.length; i++) {
  const index = array.indexOf(findFn)
  if(index > -1) {
    array.splice(index, 0)
    output = array
  }
}
return output
}
