const _speed = Symbol('speed');

class Car {
    constructor(name) {
        this.name = name;
        this[_speed] = 0;
    };

    set speed(value) {
        if(typeof value !== 'number') return;
        if(value >= 100 || value <= 0) return;
        this[_speed] = value;
    };

    get speed() {
        return this[_speed];
    };

    accelerate() {
        if(this[_speed] >= 100) return;
        this[_speed]++;
    };

    stop() {
        if (this[_speed] <= 0) return;
        this[_speed]--;
    };

    backward() {
        if (this[_speed] > 0) {
            this[_speed]--;
            return;
        };

        if (this[_speed] <= -100) return;
        this[_speed]--;        
    };
};

const car1 = new Car('Fusquinha tunado');

for (let pressKey = 0; pressKey <= 200; pressKey++) {
    car1.accelerate();
}
car1.speed = 2000;

console.log(car1.speed)
