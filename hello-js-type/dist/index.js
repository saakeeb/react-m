"use strict";
let count = 20;
if (count < 50) {
    count += 50;
}
console.log('count', count);
const tuple1 = [10, 'arr1'];
console.log('tuple1', tuple1);
const small = 36;
const medium = 38;
const large = 40;
;
let myEnum1 = 40;
console.log('myEnum1 ', myEnum1);
function func1(income, taxyear = 2023) {
    if (taxyear < 2022)
        income * 1.2;
    return income * 1.5;
}
func1(35000);
let emPloyee = {
    id: 1,
    name: "Sakib",
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=index.js.map