import {player, playerDispositions, creature, creatureSizes, creatureTypes, scenery,
        sceneryAdjectives, sceneryTypes} from './objects.js'

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const moveForward = () => {
  player.distanceTraveled++;
  return 'You move forward. ';
};

const updateScenery = () => {
  scenery.type = sceneryTypes[getRandom(0, sceneryTypes.length - 1)];
  scenery.adjective =
    sceneryAdjectives[getRandom(0, sceneryAdjectives.length - 1)];
};

const describeScenery = () => {
  return `You see a ${scenery.adjective} ${scenery.type}. `
}

const updatePlayerDisposition = () => {
  player.disposition =
    playerDispositions[getRandom(0, playerDispositions.length - 1)];
};

const startCombat = () => {
  createCreature();
  player.combatStartHealth = player.health;
  player.inCombat = true;
};

const createCreature = () => {
  let randHealth = getRandom(1, 4);
  let randAttack = getRandom(1, 4);
  //lowest health should take about two attacks (3-7 hp)
  //highest health should take about five attacks (15-19 hp)
  creature.health = getRandom(randHealth * 4 - 1, randHealth * 4 + 3);
  creature.adjective = creatureSizes[randHealth - 1];

  creature.attack = randAttack;
  creature.type = creatureTypes[randAttack - 1];
};

const standardCombatRound = (playerAttack, creatureAttack) => {
  let outputText = '';
  outputText+= resolveCombatDamage(playerAttack, creatureAttack);
  if (creature.health <= 0) {
    outputText+= slaycreature();
  }
  if (player.health <= 0) {
    outputText+= playerCombatDeath();
  }
  if (!player.inCombat) {
    outputText+= postCombatHeal();
  }

  return outputText;
};

const resolveCombatDamage = (playerAttack, creatureAttack) => {
  creature.health = creature.health - playerAttack;
  //makes sure player isn't healed by negative damage
  if (creatureAttack > 0) {
    player.health = player.health - creatureAttack;
  }
  return (`The ${creature.type} attacks. Your health is ${player.health}/${player.maxHealth}. `)
};

const slaycreature = () => {
  player.inCombat = false;
  creature.attack = 0;
  return `You slay the ${creature.type}. `;
};

const playerCombatDeath = () => {
    player.isAlive = false;
    return `The ${creature.type} slew you. `;
}


const postCombatHeal = () => {
  let outputText = '';
  if (player.health < player.combatStartHealth) {
    outputText += 'You bind your wounds as best you can. ';
    playerHeal(player.combatHealValue);
    //fighting shouldn't make you healthier than when you started
    if (player.health > player.combatStartHealth) {
      player.health = player.combatStartHealth;
    }
    outputText+=`Your health is ${player.health}/${player.maxHealth}. `
  }
  return outputText;
};

const playerHeal = (healAmount) => {
  player.health = player.health + healAmount;
  if (player.health > player.maxHealth) {
    player.health = player.maxHealth;
  }
};

export  {getRandom, moveForward, updateScenery, updatePlayerDisposition,
         startCombat, createCreature, standardCombatRound, resolveCombatDamage,
         slaycreature, postCombatHeal, playerHeal,
       describeScenery};
