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
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(weekDays[3]);

// Ex # 02:
const fivePosts = ["Morning walk", "Making a Dinner", "Playing with the children", "Watching a movie", "Doing an exercise"];
console.log(fivePosts[2]);
fivePosts[2]= "Reading an Article";
console.log(fivePosts[2]);

// Ex # 03:
const fourPosts = ["Morning walk", "Making a Dinner", "Watching a movie", "Doing an exercise"];
console.log(fourPosts);
const temporaryContainer = fourPosts[0];
fourPosts[0] = fourPosts[1];
fourPosts[1] = temporaryContainer;
console.log(fourPosts);

// Ex # 04:
const posts = [];
console.log(posts);
posts.push("Evening Joy");
console.log(posts);
posts.push("Morning Exercise");
console.log(posts);
posts.push("Beauty of Nature");
console.log(posts);