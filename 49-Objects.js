
// JavaScript variables can also contain many values.

// Objects are variables too. But objects can contain many values.

// Object values are written as name : value pairs (name and value separated by a colon).
    
    var a = {        // declaring the object 

        name: "chitresh",
        age: 20,
        hieght: 180

    }
    // a.sort()
    console.log(a);
    console.log(a.age)
// -----------------------------------------------------------------------------------------

    //  ARRAY 

    let c = [1, 2, 4, "age "]    // declaring the array 

    console.log(c)

    var d = new Array(10) //    this will create an array whose size is 10

    console.log(d)

    let f = new Array(12, 3);// this will create an array of two elements 

    console.log(f)

    f.push(34)// this will add 34 at the end of array 

    f.push(30)
    console.log(f)

    f.pop()// this will delete the last element from the array

    console.log(f)

    let g =[10,11,12,13]

    console.log(g)
    g.shift() // this will delete the element from the starting of the array and shifts the other element towards 0
    console.log(g)
    
    g.unshift(99)
    console.log(g)// this will add the element at the starting of the array and shifts other element towards the end 
    
    h=g.slice(2);// this will return an another array from the desired index
    console.log(h)
    
    g.splice(1,3) // this will reduced the array into the desired indexing 
    console.log(g)

// -----------------------------------------------------------------------------------------
// MAPS 

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  console.log(fruits)

const color = new Map();

color.set("red",100)
color.set("blue",700)
color.set("white",900)
console.log(color)


a=color.get()
console.log(a)

console.log(color.size)  // this will return the size of set 

console.log(color.get("blue")) // this will return the value of blue key 

console.log(color.has("red")) // this will return true if it has red 

console.log(color.delete("white")) // this will return white element 

console.log(color.clear()) // this will delete all the elements 
// -----------------------------------------------------------------------------------------
// SET 

// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// A Set can hold any value of any data type.

const num = new Set([1,2,3,4]);

console.log(num)

num.add(12)  // this will add new element at the end of the set
num.add(1.2)
num.add("hello") // a set contain any type of datatype 
num.add(12)    // set doesnt contain any duplicate item 

console.log(num)

num.delete(1) // this will delete 1

console.log(num.has(3))// this will return true if is has 3 

console.log(num.keys()) // this will return keys 

itr=num.values() // this will return an iterable object 
console.log(itr)

console.log(num.entries())





    



