import {getRandom, moveForward, updateScenery, updatePlayerDisposition,
         startCombat, standardCombatRound, postCombatHeal, playerHeal,
         describeScenery} from './logic.js'
//I feel like importing these things here and to logic.js might be a bad idea but idk
import {player, creature, distNeeded} from './objects.js'


//handles player input
//player can move forward, attack, defend, and flee

//each move forward procedurally generates a new scenario
//based on a 'roll' from 1 to 40
const playerMoveForward = () => {
  if (player.reachedDestination){
    return 'You\'ve already reached your destination. Refresh the page if ' +
           'you want another journey. ';
  }
  if (!player.isAlive){
    return 'Unfortunately, you are dead and cannot take any action. ' +
                 'Try refreshing the page for another chance at life. ';
  }
  if (player.inCombat){
    return 'You are in combat and cannot progress. ';
  }

  let outputText = '';
  if (!player.inCombat){

    if (player.distanceTraveled >= distNeeded) {
      player.reachedDestination = true;
      return 'You made it to your destination, congratulations. ' +
            'Refresh the page if you want another journey. ';
    }

    let randNum = getRandom(1, 40);

    if (randNum <= 6) {
      outputText+= moveForward();
      startCombat();
      outputText+= `You encounter a \n${creature.adjective} ${creature.type}. `
    }

    if (randNum >= 7 && randNum <= 29) {
      outputText+= moveForward();
    }

    if (randNum >= 30 && randNum <= 36) {
      outputText+= moveForward();
      updateScenery();
      outputText+= describeScenery();
    }

    if (randNum >= 37 && randNum <= 38) {
      outputText+= moveForward();
      updatePlayerDisposition();
      outputText+= player.disposition + '. ';
    }

    if (randNum === 39) {
      outputText+= moveForward();
      outputText+= 'You find some medical supplies. ';
      playerHeal(5);
      outputText+= `Your health is ${player.health}/${player.maxHealth}. `
    }

    if (randNum === 40) {
      outputText+= moveForward();
      outputText+= 'You find a better weapon. ';
      player.attack++;
    }
  }

  return outputText;
}

//player can only attack if in combat and not in an endgame state
const playerAttack = () => {
  if (player.reachedDestination){
    return 'You already made it to your destination and have no more need of violence. ';
  }
  if (!player.isAlive){
    return 'Unfortunately, you are dead and cannot take any action. ' +
                 'Try refreshing the page for another chance at life. ';
  }

  let outputText = '';
  if (!player.inCombat){
    outputText+= 'You are not in combat. ';
  }

  if (player.inCombat){
    outputText+= 'You attack. '
    outputText+= standardCombatRound(player.attack, creature.attack);
  }

  return outputText;
}

//player can only defend if in combat and not in an endgame state
//weaker than attacking but player gets defensive bonus
const playerDefend = () => {
  if (player.reachedDestination){
    return 'You already made it to your destination and have no more need of violence. ';
  }
  if (!player.isAlive){
    return 'Unfortunately, you are dead and cannot take any action. ' +
                 'Try refreshing the page for another chance at life. ';
  }
  let outputText = '';
  if (!player.inCombat){
    outputText+= 'You are not in combat. ';
  }
  if (player.inCombat){
    outputText+= 'You defend. ';
    outputText+= standardCombatRound(
      player.attack - player.attackPenalty,
      creature.attack - player.defenseValue
    );
  }
  return outputText;
}

//player can only flee if in combat and not in an endgame state
//25% chance to get away with a distance attackPenalty
//75% chance to be caught and mauled badly
const playerFlee = () => {
  if (player.reachedDestination){
    return 'What are you trying to run away from, exactly? ';
  }
  if (!player.isAlive){
    return 'Unfortunately, you are dead and cannot take any action. ' +
                 'Try refreshing the page for another chance at life. ';
  }
  let outputText = '';
    if (!player.inCombat){
      outputText+= 'You are not in combat. ';
    }
    if (player.inCombat) {
      outputText+= 'You flee. '
      let randNum = getRandom(1, 4);

      //flee fails
      if (randNum === 1) {
        outputText+= `The ${creature.type} catches you. `
        outputText+= standardCombatRound(0, player.maxHealth - 1);
      }

      //flee succeeds
      if (randNum >= 2) {
        player.inCombat = false;
        outputText+= 'You escape successfully but your ' +
            'flight takes you further away from your goal. '
        outputText+= postCombatHeal();
        player.distanceTraveled = player.distanceTraveled - 5;
      }
    }
  return outputText;
}
 export {playerMoveForward, playerAttack, playerDefend, playerFlee}
