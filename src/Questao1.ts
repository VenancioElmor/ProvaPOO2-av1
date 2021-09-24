// Classe
class Classe {
  constructor(
    private _produto: string,
    private _preco: number,
    private _quantidade: number
  ) {}

  // Gets

  get getProduto() {
    return this._produto;
  }

  get getPreco() {
    return this._preco;
  }

  get getQuantidade() {
    return this._quantidade;
  }

  // Sets

  set setProduto(produto: string) {
    if (produto === "") {
      throw new Error("Nome do produto não pode ser vazio!");
    }
    this._produto = produto;
  }

  set setPreco(preco: number) {
    if (preco === 0) {
      throw new Error("O preço do produto precisa ser maior que zero !");
    }
    this._preco = preco;
  }

  set setQuantidade(quantidade: number) {
    if (quantidade === 0) {
      throw new Error("A quantidade do produto precisar ser maior que zero !");
    }
    this._quantidade = quantidade;
  }

  public metodoDesconto(quantidade: number): number {
    let ValorDesconto = 0;
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
  }
}

// Instanciando a classe Principal.
const NovaClasse = new Classe("Camisa", 20, 1);

try {
  NovaClasse.setProduto = "Blusa";
  NovaClasse.setPreco = 30;
  NovaClasse.setQuantidade = 20;

  let ValorTotal = 0;
  if (NovaClasse.metodoDesconto(NovaClasse.setQuantidade) === 0) {
    ValorTotal = NovaClasse.getQuantidade * NovaClasse.getPreco;
  } else {
    ValorTotal =
      NovaClasse.getPreco -
      NovaClasse.metodoDesconto(NovaClasse.getQuantidade) * NovaClasse.getPreco;
    ValorTotal = NovaClasse.getQuantidade * ValorTotal;
  }

  console.log(
    `O produto ${
      NovaClasse.getProduto
    } tem o preço de R$${NovaClasse.getPreco.toFixed(
      2
    )}, quantidade comprada de ${
      NovaClasse.getQuantidade
    } unidades, teve desconto de ${
      NovaClasse.metodoDesconto(NovaClasse.getQuantidade) * 100
    }%, O valor pago foi de ${ValorTotal} `
  );
} catch (error: any) {
  console.log(error.message);
}
