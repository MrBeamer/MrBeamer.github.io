//Global varibales in the global scope
let breakfastTime = 1;
let beachTime = 1;
let spaceTime = 1;

// Gets the current time and replaces the placeholder through innerHTML
let showCurrentTime = () =>{

let clock = document.getElementById('clock');

let currentTime = new Date();
let hour = currentTime.getHours();
let min = currentTime.getMinutes();
let sec = currentTime.getSeconds();

let clockTime = `${hour}:${min}:${sec}`;

clock.innerHTML = clockTime;
};


//Calls the first function showCurrentTime + checks if the current time is party, beach or space and than changes current image
//to the matching image 
let updateClock =()=>{

showCurrentTime();

let secondTime = new Date();
let timeHour = secondTime.getHours();

let messageText = 'Welcome stranger, set your times!';
let image = 'images/woman4.png';

let pizzaImage = document.getElementById('food-image');
let textQuote = document.getElementById('timeEvent');

if(timeHour == breakfastTime){
image = "images/woman.png";
messageText = "Speak no evil, and you won’t be invited to cocktail parties.";
}
else if(timeHour == beachTime){
image = 'images/woman2.jpg';
messageText = "I need vitamin sea.";
}
else if(timeHour == spaceTime){
image = "images/spacewoman.png";
messageText = "Houston we have a problem.";
}

console.log(messageText); 

textQuote.innerHTML = messageText;
pizzaImage.src = image;

};

//Calls the updateClock every oneSecond so the the clock keeps refreshing
let oneSecond = 1000;
setInterval( updateClock, oneSecond);

//Pushing the button plays music 
let button = document.getElementById('button');
let audio = new Audio('music/theme.mp3');

let pushButton = () =>{
audio.play();
}

button.onmousedown = pushButton;


// Activates Party selector
let breakfastTimeSelector =  document.getElementById("breakfastTimeSelector");

let breakfastEvent = () => {
    breakfastTime = breakfastTimeSelector.value;
};

breakfastTimeSelector.addEventListener("change", breakfastEvent);


// Activates Beach selector
let beachTimeSelector =  document.getElementById("beachTimeSelector");

let beachEvent = () =>{
    beachTime = beachTimeSelector.value;
};

beachTimeSelector.addEventListener("change", beachEvent);


// Activates Space selector
let spaceTimeSelector =  document.getElementById("spaceTimeSelector");

let spaceEvent = () =>{
    spaceTime = spaceTimeSelector.value;
};

spaceTimeSelector.addEventListener("change", spaceEvent);

