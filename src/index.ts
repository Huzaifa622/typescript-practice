//Datatypes

// const a:number = 10;
// console.log(a);

// let b:any = false;
// b=12;
// console.log(b);


//Arrays--------------------------------------------
// const mixed:Array<any> = [];;
// mixed.push(1);
// mixed.push("hello");
// mixed.push(true);
// console.log(mixed);


// const mixedNumStr:Array<string|number> = [];

// mixedNumStr.push(true)  it only accepts string and number
// mixedNumStr.push(1);
// mixedNumStr.push("hello");  
// console.log(mixedNumStr)

//Tuple--------------------------------------------

// const threeChildages:[number,number,number] = [1,2,3]; // specified values in array is called tuple

// objects----------------------------------------

// type obj = {
//     name:string,
//     age:number,
// }

// const obj1 : obj ={
//     name: "John",
//     age: 25
// }

// // console.log(obj1)
// interface interObj {
// name:string,
// age:number,
// }

// const obj2 : interObj ={
//     name : "ali",
//     age : 25,
// }
// console.log(obj2)

// classes------------------------------------
// class player {
//      public name:string;
//     public age:number;
//     private id:number;
//     constructor( name:string , age:number  ){
//       this.name = name;
//       this.age = age;
//       this.id = Number(Math.random()*1000);


//     }
//     getId = () => this.id
//      getAge = () => this.age
// }

// const player1 = new player('huz' , 1);

// console.log(player1.name)
// console.log(player1.age)
// console.log(player1.getId())

// type assersion ------------------------------------

// const btn = document.querySelector('button') as HTMLButtonElement
// OR
// const btn = document.querySelector('button')!
// where ! or as HTMLButtonElement both are type assersion

// const input = document.querySelector('input')!
// console.log(input.value.length);
// const form = document.querySelector('form')!
// const input = document.querySelector('input')!
// form.onsubmit=(e)=>{
//     e.preventDefault()
//     console.log(input.value)
// }

