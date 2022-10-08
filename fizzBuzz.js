// INPUT: Int
// OUTPUT: show in console

// Core logic:
/*
Check if num is div by 3
- 'fizz'
Check if num is div by 5
- 'buzz'
Check if num is div by 3 and 5 || (or 15)
- 'fizzBuzz'
Else
- 'num'
*/

function fizzBuzz(num) {

  for(let i = 1; i <= num; i++) {
    if(i % 15 === 0) {
      console.log("fizzBuzz")
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i.toString())
    } 
  }
  
}




