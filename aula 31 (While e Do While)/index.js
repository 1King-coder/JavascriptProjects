function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
};

let rand = random(1, 50);

while (rand !== 10) {
    rand = random(1, 50);
    console.log(rand)
}

console.log('######')

do {
    rand = random(1, 50);
    console.log(rand)
} while (rand !== 10);