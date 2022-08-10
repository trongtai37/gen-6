// Modify the below function
function memoize(func) {
    const cache = {};

    const memorizeFn = function (a, b) {
        if (cache[a] && cache[a][b]) {
            return cache[a][b];
        }
        const result = func(a, b);
        cache[a] = { ...cache[a] };
        cache[a][b] = result;
        return result;
    };

    return memorizeFn;
}

// Do not modify the below function
function main() {
    const func = (a, b) => {
        console.log('Doing some calculation');
        return a + b;
    };
    const memoized = memoize(func);

    console.log(memoized(1, 2));
    console.log(memoized(1, 2));
    console.log(memoized(1, 3));
    console.log(memoized(1, 3));
}

main();