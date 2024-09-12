const marvelheroes = ["thor","Ironman","Spiderman"]

const dc = ["superman", "flash", "batman"]

// marvelheroes.push(dc)  //array ko as a data le liya


// console.log(marvelheroes);
// console.log(marvelheroes[3][1]);

// const allheros = marvelheroes.concat(dc)   concat sabko ek sath la deta h
// console.log(allheros)


// const all_new_heros = [...marvelheroes, ...dc]  //split function like glass split karo tut jata h 
// console.log(all_new_heros)

// const anotherarr = [1,2,3,[4,5],6,[7,8,9]]   //all the values split ho jati h
// const realanotherarr = anotherarr.flat(Infinity)
// console.log(realanotherarr);

console.log(Array.isArray("Kapil"))  //this is not array
console.log(Array.from("Kapil"))  //gives array value
console.log(Array.from({name:"Kapil"}))   //interesting case gives the empty string

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)) //print the alll score value together

