// console.log("hello world");
const multiply =(a,b)=>{
    return(a*b);
}
console.log(multiply(10,2));


const student={
    name: "Amit kumar",
    age: 24,
    //Below arrow function will get undefined value of this.name and age because here this refers to the global node runtime scope and not to the object.
    // call: ()=>{
    //     console.log("Hi my name is "+this.name+" and my age is "+this.age);
    // }
    call: function(){
        console.log("Hi my name is "+this.name+" and my age is "+this.age);
    }
    call(){
        console.log("Hi my name is "+this.name+" and my age is "+this.age);
    }
}
student.call();
