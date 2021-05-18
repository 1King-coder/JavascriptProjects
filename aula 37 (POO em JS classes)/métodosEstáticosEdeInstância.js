class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    };

    raiseVolume() {
        if (this.volume >= 100) return;
        this.volume += 2;
    };

    decreaseVolume() {
        if (this.volume <= 0) return;
        this.volume -= 2;
    };

    static changeBattery() {
        console.log('Battery changed')
    };
};

const c = new RemoteControl('LGTV');

c.raiseVolume()
console.log(c)

RemoteControl.changeBattery()