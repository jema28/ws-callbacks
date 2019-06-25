//1. How would I call myFunc with otherFunc as the callback?
// myFunc(otherFunc)

const myFunc = (otherFunc) => {
  console.log('i want to run this before triggering the other function')
  otherFunc()
}

const otherFunc = () => {
  console.log("----------------------------------------------")
  console.log('i want to run this after the code in the first function')
}

//2. write the code inside squareFirstItemInArr so that it takes the first item in the array, squares it (using the squareFunc) and then console.log it
const squareFirstItemInArr = (arr, otherFunc) => {
 const myNum = arr[0]
 const squaredNum = squareFunc(myNum)
 console.log(squaredNum)
}

const squareFunc = (myNum) => {
  return myNum * myNum
}
const myArray = [3, 53, 234, 4]

squareFirstItemInArr(myArray, squareFunc)

//3. async callback: fill in the prepareMeal function so that it console logs the following (in this order!)
//curry started cooking
// rice started cooking
// make salad
// lay the table
// pour drinks
// rice ready!
// curry ready!

const prepareMeal = (cb1, cb2) => {
  cb1()
  cb2()
  console.log('make salad')
  console.log('lay the table')
  console.log('pour drinks')
}

const cookRice = () => {
  console.log('rice started cooking')
  setTimeout(()=> {
    console.log('rice ready!')
  }, 3000)
}
const cookCurry = () => {
  console.log('curry started cooking')
  setTimeout(()=> {
    console.log('curry ready!')
  }, 3500)
}

prepareMeal(cookCurry, cookRice)