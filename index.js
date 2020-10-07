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

}
