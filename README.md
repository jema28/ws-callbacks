# Callbacks

A callback function, also known as a **higher-order function**, is a function that is passed as an argument to another function. A function can do anything any object can do, that also means they can be passed around as arguments!

### Pass a function into another and call it
```js
const myCallback = ()=> {
    console.log('callback is happening')
}

const otherFunc = (cb) => {
  cb();
}

otherFunc(myCallback)
```

NOTE: we do **not** call it like this `otherFunc(myCallback())`


### We can also pass our own arguments to the callback!

```js
const myCallback = (str)=> {
    console.log(str)
}

const otherFunc = (cb) => {
  cb('hello');
}


otherFunc(myCallback)
```

## Synchronous and Asynchronous Callbacks
Synchronous code runs in the order it appears on the page. One command has to finish before the next one can run. All the examples so far in this workshop have been examples of synchronous callbacks.

With asynchronous code, code can run before other code has "finished".


![](https://i.imgur.com/8uop3Ao.png)


An example using [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout):

```js
const myFunc = cb => {
  setTimeout(()=> {
    cb();
  }, 2000);

  console.log('hello im first')
}

const myCallback = () => {
  console.log("im second");
}

myFunc(myCallback);

output:
 * hello im first
 * im second
```

## Exercises
1. How would I call myFunc with otherFunc as the callback?
```js
const myFunc = (otherFunc) => {
  console.log('i want to run this before triggering the other function')
  otherFunc()
}

const otherFunc = () => {
  console.log("----------------------------------------------")
  console.log('i want to run this after the code in the first function')
}
```

2. Write the code inside squareFirstItemInArr so that it takes the first item in the array, squares it (using the squareFunc) and then console.log it

```js
const squareFirstItemInArr = (arr, otherFunc) => {
 // write the code in here
}

const squareFunc = (myNum) => {
  return myNum * myNum
}
const myArray = [3, 53, 234, 4]

squareFirstItemInArr(myArray, squareFunc)
```


3. Async callback: fill in the prepareMeal function so that it console logs the following (in this order!)
- curry started cooking
- rice started cooking
- make salad
- lay the table
- pour drinks
- rice ready!
- curry ready!

```js
const prepareMeal = (cb1, cb2) => {
  // your code goes here
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
```


