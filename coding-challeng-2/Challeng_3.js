/* 
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

*/
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];


//-1. Store the the average weight of a "Husky" in a variable "huskyWeight"
const huskyWeight = breeds.find(dog => dog.breed === 'Husky').averageWeight;
console.log('Husky Weight:', huskyWeight);

//-2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)--//

const dogBothActivities = breeds.find(dog => dog.activities.includes('running')).breed;
console.log('0', dogBothActivities);
const dogBothActivities1 = breeds.find(dog => dog.activities.includes('fetch')).breed;
console.log('1', dogBothActivities1);

const duall = dogBothActivities + ' ' + dogBothActivities1;
console.log(duall);

const dogBothActivities2 = breeds.find(dog => dog.activities.includes('running') && dog.activities.includes('fetch')).breed;
console.log(dogBothActivities2);

// console.log('running and fetch:',dogBothActivities);
//-3. Create an array "allActivities" of all the activities of all the dog breeds
const allActivities = breeds.flatMap(dog => dog.activities);
console.log('All Activities:', allActivities);
console.log('(3)', ...allActivities);

//-4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);
console.log(...uniqueActivities);

//-5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(dog => dog.activities.includes('swimming'))
      .flatMap(dog => dog.activities)
      .filter(act => act !== 'swimming')
  )
];

//-6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
const allHeavyEnough = breeds.every(dog => dog.averageWeight >= 10);
console.log(allHeavyEnough);


//-7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false". 
const anyactive = breeds.some(dog => dog.activities.length >= 3);
console.log(anyactive);

//BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator
const heaviestFetchweight = Math.max(
  ...breeds
    .filter(dog => dog.activities.includes('fetch'))
    .map(dog => dog.averageWeight)
)
console.log(heaviestFetchweight);
// Modall 2
const heaviestFetchweightHAndler =breeds
.filter(dog => dog.activities.includes('fetch'))
.map(dog => dog.averageWeight)

const heaviestFetchweight1 = Math.max(...heaviestFetchweightHAndler)
console.log(heaviestFetchweight1);


///What's the average weight of the heaviest breed 
const maxWeight = Math.max(
  ...breeds
    .map(dog => dog.averageWeight)
)
const maxHandler = () => {
  if (maxWeight == 36) {
    console.log('Bulldog');

  }
}




