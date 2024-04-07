const divContainer = document.getElementById("container");

const section1 = document.createElement("div");
section1.setAttribute("class", "section1");

const newHeading = document.createElement("h1");
let headingText = document.createTextNode("Dealing with DOM");

newHeading.appendChild(headingText);
section1.appendChild(newHeading);

divContainer.appendChild(section1);

//////////******* Thursday Exercise ***********//////////

////////// Ex # 01:
const orderedList = document.createElement("ol");
const list1 = document.createElement("li");
const list2 = document.createElement("li");
const list3 = document.createElement("li");

list1.appendChild(document.createTextNode("Creating Element."));
list2.appendChild(document.createTextNode("Creating Text Nodes."));
list3.appendChild(document.createTextNode("Adding to HTML page."));

orderedList.appendChild(list1);
orderedList.appendChild(list2);
orderedList.appendChild(list3);
section1.appendChild(orderedList);

////////// Ex # 02:

const section2 = document.createElement("div");
section2.setAttribute("class", "section2");

const secondHeading = document.createElement("h2");
const h2Text = document.createTextNode("Dealing with DOM Nodes");
secondHeading.appendChild(h2Text);

const paragraph = document.createElement("p");
let paraText = document.createTextNode(`To add a new element to the HTML DOM,
you must create the element (element node) first,
and then append it to an existing element.`);
paragraph.appendChild(paraText);


section2.appendChild(secondHeading);
section2.appendChild(paragraph);

divContainer.appendChild(section2);

////////// Ex # 03:
const div1 = document.createElement("div");
const p1 = document.createElement("p");
const div1Text = document.createTextNode("Here is the First div of exercise 03.");
p1.appendChild(div1Text);
div1.appendChild(p1);
divContainer.appendChild(div1);

const div2 = document.createElement("div");
const p2 = document.createElement("p");
const div2Text = document.createTextNode("Here is the Second div of exercise 03.");
p2.appendChild(div2Text);
div2.appendChild(p2);
divContainer.appendChild(div2);

const div3 = document.createElement("div");
const p3 = document.createElement("p");
const div3Text = document.createTextNode("Here is the Third div of exercise 03.");
p3.appendChild(div3Text);
div3.appendChild(p3);
divContainer.appendChild(div3);

const div4 = document.createElement("div");
const p4 = document.createElement("p");
const div4Text = document.createTextNode("Here is the Fourth div of exercise 03.");
p4.appendChild(div4Text);
div4.appendChild(p4);
divContainer.appendChild(div4);