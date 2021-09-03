/**
 * Цель:
 * при вызове caller должен возвращать
 * значение больше предыдущего на 1
 *
 * Нельзя создавать глобальных переменных
 * Внутри caller можно создать переменную используя var, const или let один раз
 *
 * Возможно в коде есть ошибка ¯\_(ツ)_/¯
 * */

const caller = (() => {
    const caller = () => {
        // ...
    };

    return caller;
})();

console.log(caller()); // 0
console.log(caller()); // 1
console.log(caller()); // 2