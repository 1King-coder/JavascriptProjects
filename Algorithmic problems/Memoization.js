let f = [0, 1];

const fibo = (n, memo={}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
    return memo[n];
};

console.log(fibo(1000))

const gridTraveler = (m, n, memo={}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key]
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key]
};

console.log(gridTraveler(100, 100))