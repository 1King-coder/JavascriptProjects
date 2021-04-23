let f = [0, 1];

const fibo = (n, memo={}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
    return memo[n];
};

const gridTraveler = (m, n, memo={}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key]
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key]
};

const canSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo)) {
            memo[targetSum] = true
            return true;
        };
    };

    memo[targetSum] = false
    return false;
};

const howSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult != null) {
            memo[targetSum] = [ ...remainderResult, num ];
            return memo[targetSum];
        };
    };
    memo[targetSum] = null
    return null
};

const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num ];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            };
        };
    };

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

