//Array lenght
//Array toString()
//Array pop()
//Array push()
//Array shift()
//Array unshift()
//Array join()
//Array delete
//Array concat()
//Array falt()
//Array splice()
//Array slice()

const myData = [
  {
      name:"David",
      age: 20,
  },

  {
      name:"Mark",
      age: 26,
  },

  {
      name:"Emmanuel",
      age: 32,
  },

  {
      name:"Augustine",
      age: 34,
  },

  {
      name:"Alex",
      age: 40,
  }
];

let index = 0;
let lent = myData.lenght

const myList = (res) => {
    let listOut = res[index].age.toString()


  return listOut
}

console.log(myList(myData))


const firstList = (res) => {
  let myPop = res.pop()

  console.log(myData);

  return myPop
}
 
console.log(firstList(myData))

const secondList = (res) => {
  let myPush = res.push({name: "ben", age: 50})

  console.log(myData)

  return myPush
}

console.log(secondList(myData))

const thirdList = (res) => {
  let myJoin = res.join("||")

  return myJoin
}

console.log(thirdList(myData))

const fourthList = (res) => {
  let myDelete = delete res[index];

  console.log(myData);

  return myDelete
}

console.log(fourthList(myData))

const anotherData = [
  {
    name: "john",
    age: 46,
  },

  {
    name: "sam",
    age: 66,
  }
];

const fifthList = (res, prop) => {
  let myConCat = res.concat(prop);

  return myConCat;
}

console.log(fifthList(myData, anotherData))

const nextedArr = [[{name:"abeeb", age:12}],[{name:"ade", age: 15}]]

const sixthList = (res) => {
  let myFlat = res.flat()

  return myFlat;
}

console.log(sixthList(nextedArr))