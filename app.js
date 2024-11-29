
//1. Დაბეჭდეთ რიცხვები 2 დან 8 მდე




for ( let i = 2; i <8; i++) {
    console.log(i);
   
}



//2. 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)

for (let i = 5; i <= 35; i += 4) {
    console.log(i);
}
//.3 დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი 

let product = 1; 
for (let i = 3; i <= 8; i++) {
    product *= i; 
}

console.log(product); 

//4. Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)
//5. დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value 


const person = {
    firstName: "ლალიკო",
    lastName: "გოლეთიანი",
    age: 28
};

console.log(`sruli saxeli: ${person.firstName} ${person.lastName}`);


for (let key in person) {
    console.log(person[key]); //გამოოოიტანს ყველას 
}


//6. დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.
//7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits



const fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    
    console.log(fruits[i]);}



  

// Grapes დასაწყისში და Pineapples ბოლოშიი
fruits.unshift("Grapes");  // დაემატა დაწყებამდე
fruits.push("Pineapples"); // დაემატა ბოლოშიი
 console.log(fruits)



 //8.დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯჯამი 

 let sum = 0;


for (let i = 1; i <= 34; i++) {
    sum += i;
}

console.log(sum);
