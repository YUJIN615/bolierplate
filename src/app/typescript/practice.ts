/**
 * basic type
 */
let a : number = 1;
let b : string = 'hello';
let c : boolean = true;

let d :number[] = [1, 2];
let e :string[] = ["hello", "bye"];
let f :boolean[] = [true, false];


/**
 * optional type
 */
const player : {
  name: string,
  age?: number
} = {
  name: "yujin"
}
// age 값이 없을 수 있으므로 조건을 걸어준다.
if (player.age && player.age < 30) {}


/**
 * define type
 * 타입을 정의해서 재사용한다.
 */
type Name = string;
type Age = number;
type Person = {
  name: Name,
  age?: Age
}

const admin : Person = {
  name: "kim"
}
const user : Person = {
  name: "lee",
  age: 20
}


/**
 * function type
 */
function makePlayer(name:string): Person {
  return {
    name
  }
}

const player1 = makePlayer('yujin');
player1.name = 'lee';
player1.age = 30;
console.log(player1);


/**
 * readonly
 * 요소들을 '읽기 전용'으로 만들어준다.
 */
type Person2 = {
   readonly name: Name,
  age?: Age
}

const player2 : Person2 = {
  name: 'lee'
}
// player2.name = 'kim' // name이 readonly이기 때문에 에러 발생

const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(5) // readonly 이기 때문에 에러 발생

const names: readonly string[] = ["1", "2"];
// names[1] = 2; // readonly 이기 때문에 에러 발생


/**
 * 배열의 요소 type
 */
const player3: [string, number, boolean] = ["yujin", 12, true];
// player3[0] = 1; // 첫번째 요소가 string 타입이기 때문에 에러 발생
player3[0] = "hi"; 


/**
 * undefined, null type
 */
let h : undefined = undefined;
let i : null = null;


/**
 * any type 
 * 어떤 타입이든 사용할 수 있다. 사용을 지양해야 한다.
 */
let j : any = 'any';


/**
 * unknown type
 * 어떤 타입일지 모를 때 사용한다. 
 * 작업 하기 전에 이 변수의 타입을 먼저 확인해야 한다.
 */
let k : unknown;
// let l = k + 1; // k의 type이 unknown이기 때문에 에러 발생

// k의 타입을 체크해줘야 한다.
if (typeof k === 'number') {
  let l = k + 1;
}
if (typeof k === 'string') {
  let l = k.toUpperCase();
}


/**
 * void type
 * 값을 반환하지 않는 함수
 * 필수 값이 아님
 */
function hello () :void {
  console.log('hello');
}

const m = hello();
// m.toUpperCase(); // void type이기 때문에 에러 발생


/**
 * never 타입
 * 함수가 절대 return하지 않을 때 발생
 * return 하지 않고 오류를 발생시킬 때 (예외가 발생할 때) 사용
 * 또는 type이 두가지일 수 있는 상황에서 사용
 */
function hi () : never {
  // return 'hi' // never 타입이기 때문에 return 값이 있으면 에러 발생
  throw new Error("err")
}

function bye (name:string|number) {
  if (typeof name === 'string') name;
  else if (typeof name === 'number') name;
  else name // 이 조건은 반환되지 않기 때문에 never 타입임
}


/**
 * call signiture
 * 파라미터와 반환값의 type을 정의해주는 것
 */
type Add = (a:number, b:number) => number
const add: Add = (a, b) => a + b;


/**
 * overloading
 * 함수가 여러개의 서로 다른 call signiture를 가지고 있을 때 발생
 * 외부 라이브러리나 패키지를 사용할 때 발생
 */
type Add2 = {
  (a: number, b: number) : number
  (a: number, b: string) : number
}
const add2: Add2 = (a, b) => {
  //return a + b; // b가 string일수도 있기 때문에 에러 발생
  if (typeof b === 'string') return a;
  else if (typeof b === 'number') return a + b;
  else return b;
}