var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

<<<<<<< HEAD
function addElementToBeginningOfArray(array, element) {
  return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array1 = array.slice(1)
  return array1;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  array2 = array.slice(0, arrays.length -1)
  return array2;
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array) {
  array2 = array.slice(0, array.length -1)
  return array2;
=======
function addElementToBeginningOfArray(array,element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return x.unshift = []
>>>>>>> 2582c7a228ee18d41524a2bc312847ca49e5d40d
}
