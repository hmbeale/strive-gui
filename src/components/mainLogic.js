import {getRandom, moveForward, updateScenery, updatePlayerDisposition,
         startCombat, standardCombatRound, postCombatHeal, playerHeal,
       checkPlayerSuccess, describeScenery} from './logic.js'
//I feel like importing these things here and to logic.js might be a bad idea but idk
import {player, creature} from './objects.js'


//handles player input
//player can move forward, attack, defend, and flee

//each move forward procedurally generates a new scenario
//based on a 'roll' from 1 to 40
const playerMoveForward = () => {
  if (player.reachedDestination){
    return;
  }
  if (!player.isAlive){
    return 'unfortunately, you are dead and cannot take any action\n' +
                 'try refreshing the page for another chance at life';
  }
  if (player.inCombat){
    return 'you are in combat and cannot progress';
  }

  let outputText = '';
  if (!player.inCombat){

    outputText+= checkPlayerSuccess();

    let randNum = getRandom(1, 40);

    if (randNum <= 6) {
      outputText+= moveForward();
      startCombat();
      outputText+= `you encounter a \n${creature.adjective} ${creature.type} \n`
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
      outputText+= player.disposition + '\n';
    }

    if (randNum === 39) {
      outputText+= moveForward();
      outputText+= 'you find some medical supplies\n';
      playerHeal(5);
      outputText+= `your health is ${player.health}/${player.maxHealth} \n`
    }

    if (randNum === 40) {
      outputText+= moveForward();
      outputText+= 'you find a better weapon \n';
      player.attack++;
    }
  }

  return outputText;
}

//player can only attack if in combat and not in an endgame state
const playerAttack = () => {
  if (player.reachedDestination){
    return;
  }
  if (!player.isAlive){
    return 'unfortunately, you are dead and cannot take any action\n' +
                 'try refreshing the page for another chance at life';
  }

  let outputText = '';
  if (!player.inCombat){
    outputText+= 'you are not in combat';
  }

  if (player.inCombat){
    outputText+= 'you attack. '
    outputText+= standardCombatRound(player.attack, creature.attack);
  }

  return outputText;
}

//player can only defend if in combat and not in an endgame state
//weaker than attacking but player gets defensive bonus
const playerDefend = () => {
  if (player.reachedDestination){
    return;
  }
  if (!player.isAlive){
    return 'unfortunately, you are dead and cannot take any action\n' +
                 'try refreshing the page for another chance at life';
  }
  let outputText = '';
  if (!player.inCombat){
    outputText+= 'you are not in combat';
  }
  if (player.inCombat){
    outputText+= 'you defend. ';
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
    return;
  }
  if (!player.isAlive){
    return 'unfortunately, you are dead and cannot take any action\n' +
                 'try refreshing the page for another chance at life';
  }
  let outputText = '';
    if (!player.inCombat){
      outputText+= 'you are not in combat';
    }
    if (player.inCombat) {
      outputText+= 'you flee. '
      let randNum = getRandom(1, 4);

      //flee fails
      if (randNum === 1) {
        outputText+= `the ${creature.type} catches you\n`
        outputText+= standardCombatRound(0, player.maxHealth - 1);
      }

      //flee succeeds
      if (randNum >= 2) {
        player.inCombat = false;
        outputText+= 'you escape successfully but your \n' +
            'flight takes you further away from your goal \n'
        outputText+= postCombatHeal();
        player.distanceTraveled = player.distanceTraveled - 5;
      }
    }
  return outputText;
}
 export {playerMoveForward, playerAttack, playerDefend, playerFlee}
