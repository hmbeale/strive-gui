
const player = {
  attack : 3,
  attackPenalty : 2,
  defenseValue : 1,

  health : 15,
  maxHealth : 15,
  combatStartHealth : 15,
  combatHealValue : 2,

  inCombat : false,
  disposition : '',
  distanceTraveled : 0,

  isAlive : true,
  reachedDestination : false
};

const playerDispositions = [
  'you hear some birds chirping',
  'your feet ache',
  'you feel a pleasant breeze',
  'sweat trickles from your brow'
];

const creature = {
  type : '',
  adjective : '',
  health : 0,
  attack : 0
}

const creatureSizes = ['delicate', 'medium sized', 'large', 'hulking'];
const creatureTypes = [
  'beast with dulled fangs',
  'creature with sharp claws',
  'beast with many \nfearsome horns',
  'creature with \nflames dripping from its jaws'
];

const scenery = {
  adjective : '',
  type : ''
}


const sceneryAdjectives = ['small', 'big', 'dark', 'sunlit'];
const sceneryTypes = ['river', 'pool of water', 'tree', 'cluster of bushes',
                      'tower', 'town in \nthe distance', 'flock of birds', 'cloud'];

const distNeeded = 30;

export {player, playerDispositions, creature, creatureSizes, creatureTypes, scenery,
        sceneryAdjectives, sceneryTypes, distNeeded}
