// Funções recursivas

function recursiva(max) {
    if (max >= 12270) return;
    
    console.log(max);
    max++;
    recursiva(max)
};

recursiva(0);
