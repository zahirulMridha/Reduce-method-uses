// prove function is a value by using it a interested way

// how fun with function constructor
const obj  = {
   para : ['a','b'],
   body : ['return a - b']
} 

const cns = new Function(obj.para,obj.body)

console.log(cns(50,5))

console.log(cns);

// see what is show on console 
// const cns = new Function('a','b',`return a + b `)

// console.log(cns);