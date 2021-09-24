"use strict";
// Classe
var Classe = /** @class */ (function () {
    function Classe(_produto, _preco, _quantidade) {
        this._produto = _produto;
        this._preco = _preco;
        this._quantidade = _quantidade;
    }
    Object.defineProperty(Classe.prototype, "getProduto", {
        // Gets
        get: function () {
            return this._produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Classe.prototype, "getPreco", {
        get: function () {
            return this._preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Classe.prototype, "getQuantidade", {
        get: function () {
            return this._quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Classe.prototype, "setProduto", {
        // Sets
        set: function (produto) {
            if (produto === "") {
                throw new Error("Nome do produto não pode ser vazio!");
            }
            this._produto = produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Classe.prototype, "setPreco", {
        set: function (preco) {
            if (preco === 0) {
                throw new Error("O preço do produto precisa ser maior que zero !");
            }
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Classe.prototype, "setQuantidade", {
        set: function (quantidade) {
            if (quantidade === 0) {
                throw new Error("A quantidade do produto precisar ser maior que zero !");
            }
            this._quantidade = quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Classe.prototype.metodoDesconto = function (quantidade) {
        var ValorDesconto = 0;
        if (quantidade <= 10) {
            return 0;
        }
        if (quantidade >= 11 && quantidade <= 20) {
            return 0.1;
        }
        if (quantidade >= 21 && quantidade <= 50) {
            return 0.2;
        }
        if (quantidade > 50) {
            return 0.25;
        }
        return 1;
    };
    return Classe;
}());
// Instanciando a classe Principal.
var NovaClasse = new Classe("Camisa", 20, 1);
try {
    NovaClasse.setProduto = "Blusa";
    NovaClasse.setPreco = 30;
    NovaClasse.setQuantidade = 20;
    var ValorTotal = 0;
    if (NovaClasse.metodoDesconto(NovaClasse.setQuantidade) === 0) {
        ValorTotal = NovaClasse.getQuantidade * NovaClasse.getPreco;
    }
    else {
        ValorTotal =
            NovaClasse.getPreco -
                NovaClasse.metodoDesconto(NovaClasse.getQuantidade) * NovaClasse.getPreco;
        ValorTotal = NovaClasse.getQuantidade * ValorTotal;
    }
    console.log("O produto " + NovaClasse.getProduto + " tem o pre\u00E7o de R$" + NovaClasse.getPreco.toFixed(2) + ", quantidade comprada de " + NovaClasse.getQuantidade + " unidades, teve desconto de " + NovaClasse.metodoDesconto(NovaClasse.getQuantidade) * 100 + "%, O valor pago foi de " + ValorTotal + " ");
}
catch (error) {
    console.log(error.message);
}
