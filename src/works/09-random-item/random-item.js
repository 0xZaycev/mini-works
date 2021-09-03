const array = new Array(100500);

(() => { // do not touch
    const randomIndex = Math.round( 0.5 + Math.random() * (array.length + 1));

    array[randomIndex] = 'Where am i?';
})();

// get randomIndex

