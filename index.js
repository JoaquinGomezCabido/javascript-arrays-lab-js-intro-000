var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

var destructivelyAppendKitten = (name) => {
  kittens.push(name)

  return kittens
}

var destrucivelyPrependKitten = (name) => {
  kittens.ushift(name)

  return kittens
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop(1)

  return kittens
}

var destructivelyRemoveFirstKitten = () => {
  kittens.unshift(1)

  return kittens
}

var appendKitten = (name) => {
  var newArray = kittens.slice(kittens.length, 0, name)

  return newArray
}

var prependKitten = (name) => {
  var newArray = kittens.slice(0,0,name)

  return newArray
}

var removeLastKitten = () => {
  var newArray = kittens.slice(kittens.length -1, 1)

  return newArray
}

var removeFirstKitten = () => {
  var newArray = kittens.slice(0,1)

  return newArray
}
