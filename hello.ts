const a = 'hello world'

function greet(name:string,date:Date){
  console.log(`name+${date.toDateString()}`)
}

greet('yangshiha1o',new Date());
//原始类型：number string boolean

//数组类型
let p : number[] = [1,2,3]
let o : string[] = ['1','2','3']

//注意：number[] 和 [number]是不一样的

//返回值类型注解

function ok():number {
  return 1
}

//对象类型
function ok1(info:{name:string,age:number}){
  return info.name+info.age
}

ok1({name:'yang',age:1})

//联合类型：由两个或多个类型组成的类型，表示值可能是这些类型中的一个
let id : string | number;
//如何使用联合类型的值？
function ok2(info:string[] | number){
  //类型收窄
  if(Array.isArray(info)){
    console.log('hello')
  }else{
    console.log(info)
  }
}

//类型别名
type summer = {
  x:string;
  y:number
}

function ok3(tt:summer){
  console.log(tt.x+tt.y);
}
ok3({x:'1',y:1})

//接口

interface winter {
  x:string;
  y:number
}

//类型别名和接口的区别就是：接口可以继承添加新属性，而类型是通过交集

interface Animal{
  weight:number;
  color:string;
}
//1.interface继承扩展
interface Bear extends Animal{
  age:number
}

//2.type交集扩展
type Animal1 = {
  color:string;
  weight:number
}

type Bear2 = Animal1 & {
  age:number
}

//双重类型断言
const a = (expr as any) as T

//字面量类型

const ab = {count:1}

function ok3(method:'GET' | 'POST'){
  return method
}

const req = {method:'SUCCESS'}

ok3(req.method as 'GET')


//非空断言操作符 ！

function ok4(
  x?:number|null
){
  return x!.toUpperCase()
}

