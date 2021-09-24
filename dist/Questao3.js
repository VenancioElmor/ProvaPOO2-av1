"use strict";
var Funcionarios = /** @class */ (function () {
    function Funcionarios(_nome, _salariohora, _diastrabalhados, _totalfaltasano) {
        this._nome = _nome;
        this._salariohora = _salariohora;
        this._diastrabalhados = _diastrabalhados;
        this._totalfaltasano = _totalfaltasano;
    }
    Object.defineProperty(Funcionarios.prototype, "Nome", {
        // gets
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "Salariohora", {
        get: function () {
            return this._salariohora;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "Diastrabalhados", {
        get: function () {
            return this._diastrabalhados;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "Totaldefaltasano", {
        get: function () {
            return this._totalfaltasano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "setNome", {
        // Sets
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "setSalarioHora", {
        set: function (salariohora) {
            this._salariohora = salariohora;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "setDiasTrabalhados", {
        set: function (diastrabalhados) {
            this._diastrabalhados = diastrabalhados;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "setTotalFaltasAnos", {
        set: function (totalfaltasano) {
            this._totalfaltasano = totalfaltasano;
        },
        enumerable: false,
        configurable: true
    });
    // Método Salário Bruto
    Funcionarios.prototype.SalarioBruto = function (salariohora, diastrabalhados) {
        var SalarioBruto = 0;
        return (SalarioBruto = salariohora * diastrabalhados);
    };
    // Método para calcular PLR
    Funcionarios.prototype.CalcularPLR = function (totalfaltasano) {
        var SalarioBruto = this.SalarioBruto(this._salariohora, this._diastrabalhados);
        if (totalfaltasano === 0) {
            return SalarioBruto;
        }
        if (totalfaltasano === 1) {
            return SalarioBruto * 0.94;
        }
        if (totalfaltasano === 2) {
            return SalarioBruto * 0.92;
        }
        if (totalfaltasano === 3) {
            return SalarioBruto * 0.9;
        }
        if (totalfaltasano === 4) {
            return SalarioBruto * 0.88;
        }
        if (totalfaltasano >= 5) {
            return 0;
        }
    };
    Funcionarios.prototype.Desconto = function (SalarioBruto) {
        return SalarioBruto * 0.05;
    };
    Funcionarios.prototype.SalarioLiquido = function (SalarioBruto, CalcularPLR, Desconto) {
        return SalarioBruto - Desconto + CalcularPLR;
    };
    return Funcionarios;
}());
var FuncionarioNovo = new Funcionarios("Venâncio", 15, 260, 5);
try {
    FuncionarioNovo.setNome = "Pedro";
    FuncionarioNovo.setSalarioHora = 20;
    FuncionarioNovo.setDiasTrabalhados = 250;
    FuncionarioNovo.setTotalFaltasAnos = 4;
    // SalarioBruto irá receber as informações do método SalarioBruto
    var SalarioBruto = FuncionarioNovo.SalarioBruto(FuncionarioNovo.Salariohora, FuncionarioNovo.Diastrabalhados);
    var PLR = FuncionarioNovo.CalcularPLR(FuncionarioNovo.Totaldefaltasano);
    var Desconto = FuncionarioNovo.Desconto(SalarioBruto);
    var SalarioLiquido = FuncionarioNovo.SalarioLiquido(SalarioBruto, PLR, Desconto);
    console.log("O funcionario de nome " + FuncionarioNovo.Nome + ", tem o sal\u00E1rio bruto de " + SalarioBruto.toFixed(2) + ", teve " + FuncionarioNovo.Totaldefaltasano + " faltas, e sua PLR \u00E9 de " + (PLR === null || PLR === void 0 ? void 0 : PLR.toFixed(2)) + " ");
    console.log("O funcionario de nome " + FuncionarioNovo.Nome + ", tem o sal\u00E1rio bruto de " + SalarioBruto.toFixed(2) + ",teve o desconto de " + Desconto.toFixed(2) + ", a PLR \u00E9 de " + (PLR === null || PLR === void 0 ? void 0 : PLR.toFixed(2)) + " e o sal\u00E1rio l\u00EDquido de " + SalarioLiquido.toFixed(2) + " ");
}
catch (error) {
    console.log(error.message);
}
