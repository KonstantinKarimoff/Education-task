
function fullSum(...args) {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') throw new Error("Wrong Argument Type");
    };

    let ars = [];
    for (let i = 0; i < args.length; i++) {
        ars[i] = args[i];
    }

    let result = ars.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    return result;
}

window.fullSum = fullSum;


