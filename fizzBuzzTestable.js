
// return transformed

// return arrayOfNums
// return fizzBuzzArray
// return string
// log 

const transformed = (n) => {
  if(n % 15 === 0) {
    return "fizzBuzz"
  } else if (n % 3 === 0) {
    return 'fizz'
  } else if (n % 5 === 0) {
    return 'buzz'
  } else {
    return n.toString()
  } 
}

const arrayOfNums = (num) => {
  let generatedArray = []
  for(let i = 1; i <= num; i++) {
    generatedArray.push(i)
  }
  return generatedArray
}

const fizzBuzzArray = (arrayOfNums) => {
  return arrayOfNums.map(n => transformed(n))
}

const fizzBuzzArrayToString = (fizzBuzzArray) => {
  return fizzBuzzArray.join(" ")
}


const fizzBuzz = (num) => {
  console.log(fizzBuzzArrayToString(fizzBuzzArray(arrayOfNums(num))))

  const arrNums = arrayOfNums(num)
  const fizzBuzzArr = fizzBuzzArray(arrNums)
  const finalString = fizzBuzzArrayToString(fizzBuzzArr)
  console.log(finalString)
}




fizzBuzz(15)
module.exports = {arrayOfNums, transformed, fizzBuzzArray, fizzBuzzArrayToString}