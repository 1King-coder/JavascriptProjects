class ValidateCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpf', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
    };

    static formula (total) {
        const digit = 11 - (total % 11);
        return digit < 9 ? String(digit) : '0';
    };

    calculateTotal (cpfInArray, regressive) {
        return cpfInArray.reduce((ac, e) => {
            ac += Number(e)*regressive;
            regressive--;
            return ac;
        }, 0);
    };

    generateCorrectCpf() {
        return this.digitOne()
    };

    validate () {
        if (this.cpf.length < 11) return false;
        if (this.cpf === this.cpf[0].repeat(this.cpf.length)) return false;

        return this.cpf === this.generateCorrectCpf();
    };

    digitOne () {
        const total = this.calculateTotal(Array.from(this.cpf.slice(0, 9)), 10);

        const cpfWithD1 = this.cpf.slice(0,9) + ValidateCPF.formula(total);

        return this.digitTwo(cpfWithD1)
    };

    digitTwo (cpfD1) {
        const total = this.calculateTotal(Array.from(cpfD1), 11);

        const correctCpf = cpfD1 + ValidateCPF.formula(total);

        return correctCpf;
    };
};