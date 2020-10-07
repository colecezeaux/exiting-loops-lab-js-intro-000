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
var output;
for(var i = 0; i < array.length; i++) {
  if(array[i] !== findFn) {
    output = null
  } else {
    output = array[i]
  }
}
return output
}
