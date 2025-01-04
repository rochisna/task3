const a = 30;
console.log(a);

let b = 30;
console.log(b);

var c = 30;
console.log(c);
c = 20;
console.log(c);

//console.log(c);
//rochisna
for(let i=1;i<=5;i++){
    setTimeout(function(){
        console.log(i);
    },10);
}
for(var i=1;i<=5;i++){
    setTimeout(function(){
        console.log(i);
    },10);
}
let person = {
    fname : "John",
    lname : "doe",
}
person.age = 20;
console.log("fname"+person.fname);
console.log("lname"+person.lname);
console.log("age"+person.age);



