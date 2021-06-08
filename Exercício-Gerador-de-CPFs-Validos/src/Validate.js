export default class ValidateCPF {

    static formula (total) {
        const digit = 11 - (total % 11);
        return digit < 9 ? String(digit) : '0';
    };

    static calculateTotal (cpfInArray, regressive) {
        return cpfInArray.reduce((ac, e) => {
            ac += Number(e)*regressive;
            regressive--;
            return ac;
        }, 0);
    };

    static generateCorrectCpf(cpf) {
        return ValidateCPF.digitOne(cpf)
    };

    static validate (cpf) {
        if (cpf[0].repeat(cpf.length) === cpf) return false;

        return cpf === ValidateCPF.generateCorrectCpf(cpf);
    };

    static digitOne (cpf) {
        const total = ValidateCPF.calculateTotal(Array.from(cpf.slice(0,9)), 10);

        const cpfWithD1 = cpf.slice(0,9) + ValidateCPF.formula(total);

        return ValidateCPF.digitTwo(cpfWithD1)
    };

    static digitTwo (cpfD1) {
        const total = ValidateCPF.calculateTotal(Array.from(cpfD1), 11);

        const correctCpf = cpfD1 + ValidateCPF.formula(total);

        return correctCpf;
    };

};