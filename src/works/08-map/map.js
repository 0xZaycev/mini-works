const map = new Map();
const weakmap = new WeakMap();

(function() {
    const a = {
        x: 12
    };
    const b = {
        y: 12
    };

    map.set(a, 1);
    weakmap.set(b, 2);
})();

(function() {
    console.log(map);
    console.log(weakmap);
})();