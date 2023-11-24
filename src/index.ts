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

type obj = {
    name:string,
    age:number,
}

const obj1 : obj ={
    name: "John",
    age: 25
}

// console.log(obj1)
interface interObj {
name:string,
age:number,
}


