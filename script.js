let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let currentPlaying = true;
let startButton = document.getElementById("start");
let openDoor1;
let openDoor2;
let openDoor3;
function randomChoreDoorGenerator(){
  choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor==0){
     openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
     openDoor3 = spaceDoorPath;
     }
     else if(choreDoor==1){
       
       openDoor2 = botDoorPath;
       openDoor1 = spaceDoorPath;
       openDoor3 = beachDoorPath;
     }
  else{
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
  
}
door1.onclick = function ll(){
  if(currentPlaying&&!isClicked(door1)){
  doorImage1.src = openDoor1;
  playDoor(door1);
  
  }
}
door2.onclick = function ll(){
  if(currentPlaying&&!isClicked(door2)){
 doorImage2.src = openDoor2;
  playDoor(door2);
  }
}
door3.onclick = function ll(){
  if(currentPlaying&&!isClicked(door3)){
  doorImage3.src = openDoor3;
  playDoor(door3);
  }
}
function startRound(){
  doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentPlaying = true;
  randomChoreDoorGenerator();
}

startButton.onclick = function hh(){
  if(!currentPlaying){
  startRound();
}
}
function isBot(door){
  if(door.src===botDoorPath){
    return true;
  }
  else false;
  
}
function isClicked(door){
  if(door.src===closedDoorPath){
    return false;
  }
  else return true;
  
} 
function playDoor(door){
  numClosedDoors--;
  if(numClosedDoors===0){
    gameOver('win');
  } else if(isBot(door)){
    gameOver();
  }
  
}
function gameOver(str){
  if(str==='win'){
    
    startButton.innerHTML = 'You win! Play again?';
  }else{
    startButton.innerHTML = 'Game over!';
  }
  currentPlaying = false;
}
startRound();

