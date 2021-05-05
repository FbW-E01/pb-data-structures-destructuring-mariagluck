// #### 1. Array Destructuring

let allFood = ["banana", "cucumber", "bread", "cakes", "pizza"];

let[ food1, food2, ...restOfFood ] = allFood;

const fruit = food1;
const vegetable = food2;
const food = restOfFood;

console.log(fruit);
console.log(vegetable);
console.log(food);

//ANSWER:
// It will print:
// banana
// cucumber
// [ 'bread', 'cakes', 'pizza' ]


// #### 2.Object Destructuring
// * Create an object which contains a few key value pairs of human names and halloween costumes e.g. `fran: "witch"`. Assign each value to a variable. Print out the values.

const HalloweenCostumes = {
    fran: "witch",
    Jenny: "DeviceLightEvent",
    Juan: "Scheleton",
    Lisa: "gosht", 

};

const { fran } =  HalloweenCostumes;
const { Jenny } = HalloweenCostumes;
const { Juan } =  HalloweenCostumes;
const { Lisa } =  HalloweenCostumes;

console.log(fran);
console.log(Jenny);
console.log(Juan);
console.log(Lisa);

//ANSWER:
// IT PRINTS: witch
// DeviceLightEvent
// Scheleton
// gosht

// #### 3. Parameters: Object Destructuring 

const bandInfo = {
    bandName: "Rosalía",
    bandRole: "singer and dancer",
    greatest_hit: "Malamente",
    nationality: "Spanish",
    genre: "flamenco-pop-trap", 
};

function musicInfoPrint ({bandName, bandRole, greatest_hit, nationality, genre}) {
   console.log(`${bandName} is a ${nationality} ${bandRole}. The musician sings ${genre} and their greatest hit is "${greatest_hit}"`);
}

musicInfoPrint(bandInfo);

//ANSWER: IT PRINTS
// Rosalía is a Spanish singer and dancer. The musician sings flamenco-pop-trap and their greatest hit is "Malamente"