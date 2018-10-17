"use strict";

function startGame() {
  let play = prompt("Do you want to play the game?");
  if (play === "yes") {
    let userName = prompt("Enter your name.");
    startCombat(play,userName);
  }
  else if (play === "no") {
    console.log("Ok, we will play later.");}
  }

  function startCombat (play,userName) {
  let userHealth = 40; //changed total health to make game testing faster
  let grantHealth = 10;
  let healCount = 3;
  let userWins = 0;
  while (play) {
    let choice =prompt("Do you want to attack, heal, or bravely run away?");
    if (choice === "bravely run away") {
         console.log("your descendants will tell tales of your brave running for centurties to come");
         break;
        }
    if (choice === "attack") {
      userHealth -= getDmg();
      grantHealth -= getDmg();
      console.log(`${userName} was attacked. ${userName} has ${userHealth} health left.`);
      console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);
    }  
    if (choice === "heal"){
      if (healCount > 0) {
        userHealth += heal();
        userHealth -= getDmg();
        healCount--;
        console.log(`${userName} was attacked. ${userName} has ${userHealth} health left.`);
        console.log(`${userName} was healed. ${userName} has ${userHealth} health left.`); }
      else {
        userHealth -= getDmg();
        console.log(`${userName} was attacked. ${userName} has ${userHealth} health left.`);
        console.log(`${userName} is dumber than they look, ${userName} is out of healing potions.`);  
      }
    }
    

   
    
    if (grantHealth <= 0) {
      userWins++;
      grantHealth = 10;
      if (userWins === 3) {
        console.log(`${userName} is victorious!`);
        victoryScreen();
        break;
      } else {
        console.log(`${userName} has beaten Grant. ${userName} must win ${3 - userWins} more time(s).`);
      }
    } 
    if (userHealth <= 0) {
      console.log("Grant beat you, don't mess with Grant.");
      defeatScreen();
      break;
    }
  }
   return;
}


const getDmg = () => { 
 return Math.floor(Math.random()* 5) + 1;
};

const heal = () => {
  return Math.floor(Math.random()*10) + 1;
  
};



startGame();

