const {Food} = require('./food')


class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {

        // Fill this in
        this.currentRoom.items.forEach((item,i) => {
            if (item.name == itemName) {
                this.items.push(item);
                this.currentRoom.items.splice(i,1);
            }
        })
    }

    dropItem(itemName) {

        // Fill this in
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if (item.name = itemName) {
                this.items.splice(i,1);
                this.currentRoom.items.push(item);
            }
        }
    }

    eatItem(itemName) {
        // Fill this in
        this.items.forEach((item,i) => {
            if (item instanceof Food) {
                if (item.name == itemName) {
                    this.items.splice(i,1);
                }
            }
        })

    }

    getItemByName(name) {

        // Fill this in
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if (item.name == name) return item;
        }
    }
}

module.exports = {
  Player,
};
