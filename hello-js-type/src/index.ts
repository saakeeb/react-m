let count: number = 20;
if (count < 50) {
    count += 50;
}
// testing the feature
console.log('count', count);

//tuple
const tuple1: [number, string] = [10, 'arr1']; //dont use more than two
console.log('tuple1', tuple1);

// enum
const small = 36;
const medium = 38;
const large = 40;

// above is equal to below enums

// enum Size { Small = 36, Medium = 38, Large = 40 }; //this is without the const, if we use const variable then js file will be more organizez 
const enum Size { Small = 36, Medium = 38, Large = 40 }; //more organize with const
let myEnum1 = Size.Large;
console.log('myEnum1 ', myEnum1);

// function
function func1 (income: number, taxyear = 2023) : number {
    if (taxyear < 2022) income * 1.2;
    return income * 1.5;
}
func1(35000);
//  ? mark is optional mark, the mark value will not affect it is undefined or anything else

let emPloyee: {
    readonly id: number, //readonly prevent us modify the data
    name: string,
    retire: (date: Date) => void,
    sallary? : number, 
} = {
    id: 1,
    name: "Sakib",
    retire: (date: Date) => {
        console.log(date);
    }
}



 


