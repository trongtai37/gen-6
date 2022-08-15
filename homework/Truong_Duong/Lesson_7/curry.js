// Modify the below function
function curry(f) {
    const argsList = [];

    const fn =  function(a) {
        if(argsList.length === f.length - 1) {
            return f(...argsList, a);
        }
        argsList.push(a);
        return fn;
    }
    return fn;
}

// Do not modify the below function
function main() {
    const sum = (a, b) => {
        return a + b;
    };
    const curriedSum = curry(sum);
    console.log(curriedSum(1)(2));
}

main();