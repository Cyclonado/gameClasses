
// Creating the class with the info 

class hero{
    constructor(name,age,type){
        this.name = name
        this.age = age
        this.type = type
    }
    heroInfo(){
        console.log(` The hero is called ${this.name}, is ${this.age} years old, and is a ${this.type}.`)
    }
};

// Creating object to save classes and link to attacks later

let status = {
    classes:{
        0:["Mage"],
        1:["Warrior"],
        2:["Monk"],
        3:["Ninja"],
    },
    attacks:{
        0:["Magic"],
        1:["Sword"],
        2:["Martial Arts"],
        3:["Shuriken"],
    }
};

// Creating new character

let player = new hero("Lucas",22, status.classes[2]);


// Actual execution

console.log("")
player.heroInfo()
console.log("")
playerAtk()


// Function to determine the attack based on the class chosen

function playerAtk(){
    if(player.type == status.classes[0]){
    
        console.log(` ${player.type} attacked using ${status.attacks[0]}`)

    }
    else if(player.type == status.classes[1]){

        console.log(` ${player.type} attacked using ${status.attacks[1]}`)

    }
    else if(player.type == status.classes[2]){

        console.log(` ${player.type} attacked using ${status.attacks[2]}`)

    }
    else if(player.type == status.classes[3]){

        console.log(` ${player.type} attacked using ${status.attacks[3]}`)

    }
    
}