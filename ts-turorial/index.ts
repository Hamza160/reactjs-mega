// Function parameters Annotations

// Regular Func
function addOne(num:number){
    return num + 1
}

const res = addOne(3)
console.log(res)

// Arrow Funct
const double = (x:number, y:number) => x * y
const res1 = double(10, 3)

// Default Params Value
function greet(person: string = 'Annonymous') {
    return `Hello ${person}`
}

const res2 = greet()
console.log(res2)

// Function Return Annotations
// Regular Func 
function double1(x:number):number{
    return x * x
}

// Arrow Func
const double2 =(x:number) :number => x * x