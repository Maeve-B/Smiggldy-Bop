//The fucntion needs to take an input arguement and return the value, i.e the compliment


var randomItem=compliments[Math.floor(Math.random()*compliments.length)];
    
    
//    
//function randomCompliment(compliments) {
//return compliments[Math.floor(Math.random()*compliments.length)];
    

var compliments = ["Great Duck", "Hot Wings", "Beak Chic", "Quack My Bitch Up", "Webbed Heaven"];

console.log(randomCompliment(compliments));



document.body.innerHTML = randomItem;






//need to get thyis returning on the page
//Questions- Onclick ow needs to be this function
//random compliemnys is taking comliments as an arguement. 
//in order to psuh this to page I need "display" being replaced by the return value of this fucntion. 

//idea 1: return compliments blah blah, call this a variable, that variable then 
//Could just use an innerHTML method here to overwrite whatever is in result area?
//