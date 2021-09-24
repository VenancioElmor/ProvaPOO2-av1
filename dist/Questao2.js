"use strict";
var ConversaoDeUnidadesDeTempo = /** @class */ (function () {
    function ConversaoDeUnidadesDeTempo() {
    }
    ConversaoDeUnidadesDeTempo.MinutoParaSegundo = function (valor) {
        return valor + " Minutos correspondem a " + valor * 60 + " segundos";
    };
    ConversaoDeUnidadesDeTempo.HoraParaMinuto = function (valor) {
        return valor + " Horas correspondem a " + valor * 60 + " minutos";
    };
    ConversaoDeUnidadesDeTempo.DiaParaHora = function (valor) {
        return valor + " Dias correspondem a " + valor * 24 + " horas";
    };
    ConversaoDeUnidadesDeTempo.SemanaParaDia = function (valor) {
        return valor + " Semanas correspondem a " + valor * 7 + " dias ";
    };
    ConversaoDeUnidadesDeTempo.MesParaDias = function (valor) {
        return valor + " Meses correspondem a " + valor * 30 + " dias";
    };
    ConversaoDeUnidadesDeTempo.AnoParaDias = function (valor) {
        return valor + " Anos correspondem a " + (valor * 365.25).toFixed(2) + " dias";
    };
    return ConversaoDeUnidadesDeTempo;
}());
console.log(ConversaoDeUnidadesDeTempo.AnoParaDias(3));
