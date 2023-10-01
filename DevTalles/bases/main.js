"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const riverPlateJugadores = {
        arquero: 'Armani',
        defensa: 'Gonzales Pires',
        medio: 'Enzo Perez',
        delantero: 'Borja'
    };
    const { arquero, defensa, medio, delantero } = riverPlateJugadores;
    const printPlayers = (_a) => {
        var { arquero } = _a, resto = __rest(_a, ["arquero"]);
        console.log(arquero, resto);
    };
    printPlayers(riverPlateJugadores);
    const jugadoresArr = ['Armani', 'Gonzales Pires', 'Enzo Perez', 'Borja'];
    const [arqueroArr, defensaArr, medioArr, delanteroArr] = jugadoresArr;
    console.log(arqueroArr, defensaArr, medioArr, delanteroArr);
})();
(() => {
    const pityMartinez = {
        name: 'Gonzalo Pity Martinez',
        salary: 1000000,
        active: true
    };
    const juanferQuintero = {
        name: 'Juan Fernando Quintero',
        salary: 500000,
        active: false
    };
    const enzoPerez = {
        name: 'Enzo Perez',
        salary: 800000,
        active: true
    };
    const riverPlayers = [pityMartinez, juanferQuintero, enzoPerez];
    for (const player of riverPlayers) {
        console.log(player.name);
    }
})();
(() => {
    let river = "campeon";
    console.log(river);
    const PityMartinez = "crack";
    const riverVsBoca = () => {
        console.log("Gano river 2 a 0, en la 'cancha' de boca, mejor dicho en la media cancha de boca");
    };
    riverVsBoca();
})();
//# sourceMappingURL=main.js.map