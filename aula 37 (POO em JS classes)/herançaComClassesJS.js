class EletronicDevice {
    constructor(name) {
        this.name = name;
        this.on = false;
    };

    turnOn() {
        if (this.on) {
            console.log(`${this.name} is already On`)
            return;
        };

        this.on = true;
    };

    turnOff() {
        if (!this.on) {
            console.log(`${this.name} is already Off`)
            return;
        };

        this.on = false;
    };
};

class Pokophone extends EletronicDevice {
    constructor(name, color) {
        super(name);
        this.color = color;
    };
};

class Tablet  extends EletronicDevice {
    constructor(name) {
        super(name);
        this.hasWiFi = false;
    };

    turnOn() {
        console.log('TurnOn method modified')
    }

    connectToWifi() {
        console.log('Connected to wi-fi')
    };
    disconnectFromWifi() {
        console.log('Disconnected from wi-fi')
    }
}

const table = new Tablet('sansung galaxy tab')
const poko = new Pokophone('Pokophone 2000', 'blue')

poko.turnOn;
console.log(poko)