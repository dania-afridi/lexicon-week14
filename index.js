///******* Tuesday Exercise ***********/

// Ex # 01:
let nonParamFunc = ()=>{ console.log("Bernadette had a boat");}
nonParamFunc();

// Ex # 02:
let hadVehicle = (vehicle) => { console.log(`Bernadette had a ${vehicle}`);}
hadVehicle("volvo");

// Ex # 03:
let calculateBalance = (balance, cost=0) => {
    const newBalance = balance - cost ;
    console.log(`Your new balance is [${newBalance}]Kr.`);
}
calculateBalance(500);
calculateBalance(500, 30);

// Ex # 04:
let areaOfCircle = (radius) => { 
    let area = radius*radius*Math.PI;
    return area;
}
console.log(areaOfCircle(3));

// Ex # 05:
let threeTimes = (x, y, z)=> {
    let sum = x + y + z;
    return sum;
}
console.log(threeTimes(5, 25, 30));
console.log(threeTimes(15, 3, " adding two numbers and one string."));
console.log(threeTimes("Adding text and two numbers ", 15, 3));

///******* Wednesday Exercise ***********/

// Ex # 01:
let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(weekDays[3]);

// Ex # 02:
