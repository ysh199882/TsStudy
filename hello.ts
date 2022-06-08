const a = 'hello world'

function greet(name:string,date:Date){
  console.log(`name+${date.toDateString()}`)
}

greet('yangshihao',new Date());